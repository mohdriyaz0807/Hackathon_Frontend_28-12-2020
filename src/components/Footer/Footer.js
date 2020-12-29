import React from "react";
import { Toolbar, Typography, Button } from "@material-ui/core";

function Footer() {
  return (
    <footer className="footer">
        <Button color='Success'>
        Send Feedback
        </Button>
      <Toolbar>
        <Typography variant="h6">Hurry Up if Hungry<br></br> 2020 Pizza Corner.All rights reserved.</Typography>
      </Toolbar>
    </footer>
  );
}

export default Footer;