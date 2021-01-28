import React from 'react';
import './HomeStyle.css'
import { Paper , Grid ,makeStyles  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1,
    marginTop:'20%',
    marginBottom:'30%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home=()=>{

    const classes = useStyles();

  return (
    <section className={classes.root}>
      <Grid container>
        <Grid item xs={2} sm={3} md={4}></Grid>
        <Grid item xs={10} sm={6} md={4} >
          <Paper className={classes.paper}>
      <h3>Try our Pizza ? Register and Login to access your treat.</h3>
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}
export default Home;
