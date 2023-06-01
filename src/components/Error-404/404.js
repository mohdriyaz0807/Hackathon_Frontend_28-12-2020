import { Container, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <Container maxWidth="sm" sx={{ height: "calc(100vh - 100px)" }}>
      <Paper elevation={2} className="error404">
        <h1>404</h1>
        <h2>Oops! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to go back to the
          homepage.
        </p>
        <Link to="/">
          <button className="add-cart-btn">HOME</button>
        </Link>
      </Paper>
    </Container>
  );
}

export default Error404;
