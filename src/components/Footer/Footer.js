import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import './Footstyle.css'

function Footer() {
  return (
    <footer className="footer">
      <Toolbar>
        <Typography variant="h6">Hurry Up if Hungry<br/> 2021 Pizza Corner.All rights reserved.<br/>Food shown are for illustration purpose only. Actual product may differ from the images shown in this website. Our menu prices are now inclusive of GST.</Typography>
      </Toolbar>
    </footer>
  )
}

export default Footer