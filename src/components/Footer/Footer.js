import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import './Footstyle.css'

function Footer() {
  return (
    <div className="footer">
      <Toolbar>
        <Typography><p style={{fontSize:'15px'}}>Food shown are for illustration purpose only. Actual product may differ from the images shown in this website. Our menu prices are now inclusive of GST.</p><p>Hurry Up if Hungry</p><p> &copy; {new Date().getFullYear()} Pizza Corner.All rights reserved.</p></Typography>
      </Toolbar>
    </div>
  )
}

export default Footer