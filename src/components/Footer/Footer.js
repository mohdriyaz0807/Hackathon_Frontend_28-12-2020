import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import './Footstyle.css'

function Footer() {
  return (
    <footer className="footer">
      <Toolbar>
        <Typography><p>Hurry Up if Hungry</p><p> &copy; 2021 Pizza Corner.All rights reserved.</p><p>Food shown are for illustration purpose only. Actual product may differ from the images shown in this website. Our menu prices are now inclusive of GST.</p></Typography>
      </Toolbar>
    </footer>
  )
}

export default Footer