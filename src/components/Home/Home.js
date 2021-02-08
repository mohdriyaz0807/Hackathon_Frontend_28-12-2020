import React from 'react';
import './HomeStyle.css'
import { Paper , Grid ,makeStyles  } from '@material-ui/core';
import {Login} from '../User/login';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,  },
}));

const Home=()=>{

    const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" >
        <Grid item xs={12} sm={10} md={8} >
        <Paper className={classes.paper}>
        <h3>Try our Pizza ? Register and Login to access your treat.</h3>
      <Login/>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}
export default Home;
