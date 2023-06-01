import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import { Person3TwoTone } from "@mui/icons-material";
import { Menu, MenuItem, Typography } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header({ cart, openLogin }) {
  const history = useHistory();

  const token = window.localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openCart = () => {
    if (!window.location.pathname.includes("Cart"))
      history.push({ pathname: "/Cart" });
  };

  const goToDashboard = () => {
    if (!window.location.pathname.includes("Dashboard"))
      history.push({ pathname: "/Dashboard" });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const openMyOrders = () => {
    if (!window.location.pathname.includes("/Orders")) history.push("/Orders");
    handleClose();
  };

  return (
    <Grid container className="head">
      <Grid item xs={12} className="title">
        <span onClick={goToDashboard} className="title-text">
          Pizza Pan
        </span>
      </Grid>
      <div className="user-icon">
        {token ? (
          <IconButton aria-label="cart" onClick={handleClick}>
            <Person3TwoTone style={{ color: "#fff" }} />
          </IconButton>
        ) : (
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              openLogin();
              handleClose();
            }}
          >
            Login
          </Typography>
        )}
      </div>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={openMyOrders}>My Orders</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
      <div className="cart-icon">
        <IconButton aria-label="cart" onClick={openCart}>
          <StyledBadge badgeContent={cart.length} color="info">
            <ShoppingCartIcon style={{ color: "#fff" }} />
          </StyledBadge>
        </IconButton>
      </div>
    </Grid>
  );
}
export default Header;
