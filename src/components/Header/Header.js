import React from 'react';
import './Style.css'
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(){
    return( 
    <div >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" >
              Pizza
            </Typography>
            <div className='btn-float'>
            <Link to="/">
              <Button variant="contained" color="secondary" href="#contained-buttons">Home</Button>
            </Link>
            <Link to="/admin">
              <Button variant="contained" color="secondary" href="#contained-buttons">Admin</Button>
            </Link>
            <Link to="/login">
              <Button variant="contained" color="secondary" href="#contained-buttons">Login</Button>
            </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      )
}
export default Header