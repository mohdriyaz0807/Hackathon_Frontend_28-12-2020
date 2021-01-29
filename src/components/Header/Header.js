import React from 'react';
import './Style.css'
import {Grid,ListItem,ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FaceIcon from '@material-ui/icons/Face';

function Header(){
    return( 
        <Grid container className="Head">
            <Grid item xs={12} sm={6} md={6} className="Title">
              Pizza Corner
            </Grid>
            <Grid item xs={4} sm={2} md={2}>
              <ListItem>
              <ListItemIcon><Link to="/" ><HomeIcon fontSize="large" color="primary"/></Link>
                <br/><span className="Link">Home</span></ListItemIcon>
              </ListItem>
            </Grid>
            <Grid item xs={4} sm={2} md={2}>
            <ListItem>
              <ListItemIcon><Link to="/admin" ><SupervisorAccountIcon fontSize="large" color="primary"/></Link>
                <br/><span className="Link">Admin</span></ListItemIcon>
              </ListItem>
            </Grid>
            <Grid item xs={4} sm={2} md={2}>
            <ListItem>
              <ListItemIcon><Link to="/login" ><FaceIcon fontSize="large" color="primary"/></Link>
                <br/><span className="Link">User</span></ListItemIcon>
              </ListItem>
            </Grid>
        </Grid>
      )
}
export default Header