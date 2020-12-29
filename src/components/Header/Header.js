import React from 'react';
import './Style.css'
import {Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(){
    return( 
        <div className='Head'>
          <Toolbar>
            <Typography className='Title'>
              Pizza Corner
            </Typography>
            <div className='Link'>
            <Link to="/">
              <Button variant="contained" color="primary">Home</Button>
            </Link>
            <Link to="/admin">
              <Button variant="contained" color="primary">Admin</Button>
            </Link>
            <Link to="/login">
              <Button variant="contained" color="primary">Login</Button>
            </Link>
            </div>
          </Toolbar>
        </div>
      )
}
export default Header