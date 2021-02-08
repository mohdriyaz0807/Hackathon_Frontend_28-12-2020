import React from 'react';
import './Style.css'
import {Grid,ListItem,ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FaceIcon from '@material-ui/icons/Face';
import Logout from '../User/logout'

function Header(){
    return( 
        <Grid container className="Head">
            <Grid item xs={12} sm={6} md={6} className="Title">
              Pizza Corner
            </Grid>
            <Grid item xs={4} sm={2} md={2}>
              <ListItem>
              <ListItemIcon><Link to="/" ><HomeIcon fontSize="large" color="primary"/>
                <span className="Link">Home</span></Link></ListItemIcon>
              </ListItem>
            </Grid>
            <Grid item xs={4} sm={2} md={2}>
            <ListItem>
              <ListItemIcon><Link to="/admin" ><SupervisorAccountIcon fontSize="large" color="primary"/>
                <span className="Link">Admin</span></Link></ListItemIcon>
              </ListItem>
            </Grid>
            <Grid item xs={4} sm={2} md={2}>
            <ListItem>
              {localStorage.getItem('token') ? <Logout/> : '' }
              </ListItem>
            </Grid>
        </Grid>
      )
}
export default Header