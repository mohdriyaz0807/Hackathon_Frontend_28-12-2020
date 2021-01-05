import React from 'react';
import './Style.css'
import {Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header(){
    return( 
        <div className='Head'>
            <span className='Title'>
              Pizza Corner
            </span>
            <div className='Link'>
          <Toolbar>
            <Link to="/">
              <Button variant="contained" color="primary">Home</Button>
            </Link>
            <Link to="/admin">
              <Button variant="contained" color="primary">Admin</Button>
            </Link>
            <Link to="/login">
              <Button variant="contained" color="primary">Login</Button>
            </Link>
          </Toolbar>
            </div>
        </div>
      )
}
export default Header