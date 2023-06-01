import React, { useState } from "react";
import {
  Alert,
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Modal,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Close,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { API_PATH } from "../utils/api";
import Loader from "../Loader";

const Login = ({ open, closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setShowPassword(false);
    closeModal();
    setError("")
  };

  const onLogin = async () => {
    setLoading(true)
    try {
      const user = await fetch(`${API_PATH}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      }).then((res) => res.json());
      if (user.icon === "success") {
        setLoading(false);
        localStorage.setItem("token", user.token);
        localStorage.setItem("userdata", JSON.stringify(user.result));
        window.location.reload()
      } else {
        setLoading(false);
        setError(user.message)
      }
    } catch (err) {
      setError(err)
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Loader />}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper className="login-modal-paper">
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
          <Box className="login-container">
            <AccountCircle style={{ fontSize: "200px" }} />
            <TextField
              sx={{ m: 2, width: "25ch" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="testuer@pizzapan.com"
              label="Email"
              variant="outlined"
            />
            <FormControl
              required
              sx={{ m: 2, width: "25ch" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <button
              className={`login-btn ${email && password ? "" : "disabled"}`}
              disabled={!email && !password}
              onClick={onLogin}
            >
              Login
            </button>
            <Typography textAlign="center" variant="caption">
              <b>Use below credentials for testing</b>
              <br />
              <b>Email:</b> testuser@pizzapan.com
              <br />
              <b>Password:</b> 123456
            </Typography>
          </Box>
          {error && (
            <Alert
              variant="standard"
              severity="error"
              closeText="close"
              onClose={() => setError("")}
            >
              {error}
            </Alert>
          )}
        </Paper>
      </Modal>
    </>
  );
};

export default Login;
