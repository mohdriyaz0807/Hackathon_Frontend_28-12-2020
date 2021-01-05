import React from 'react';
import './HomeStyle.css'
import {Paper , Grid ,makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1,
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
    <div className={classes.root}>
      <Grid container spacing={3} className='first'>
        <Grid item xs={12} sm={12} md={12} >
          <Paper className={classes.paper}><img id='carousel' src='https://peatzeria.com/wp-content/uploads/2019/09/pizza-cutter-1400x350.jpg' alt='Pizza'/></Paper>
        </Grid>
        </Grid>
        <h1>Find Out Our Products at Exclusive Prices.</h1>
        <Grid container spacing={3}>
        <Grid item sm={4} xs={12} md={6}>
          <Paper className={classes.paper}><img src='https://madeitateitlovedit.com/wp-content/uploads/2019/09/Buffalo-Chicken-Pizza-450x300.jpg' alt='Pizza'/></Paper>
        </Grid>
        <Grid item sm={4} xs={12} md={6}>
          <Paper className={classes.paper}><img src='https://images.squarespace-cdn.com/content/v1/5a9f0c9fec4eb70a5ce752f8/1521032855421-ENB7XEP6UXA6ZBDXDVDL/ke17ZwdGBToddI8pDm48kPZjswWEEM1xUlE2nw_1gDZZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFEypcWtVdAnmHnO4a1hPNGKftICS8WvBaaDvL8dARr2lYCOBSuh7_iz0ZUXSA5sds/01-Pizza-01-SliceServe-450x300.jpg?format=750w' alt='Pizza'/></Paper>
        </Grid>
        <Grid item sm={4} xs={12} md={6}>
          <Paper className={classes.paper}><img src='https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,h_300,q_60,w_450/f_auto/pizza-with-mushrooms-and-peppers-3F28F1E' alt='Pizza'/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;
