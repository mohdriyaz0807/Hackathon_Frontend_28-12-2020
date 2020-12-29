import React from 'react';
import {Paper , Grid ,makeStyles,Button} from '@material-ui/core';
import TransitionsModal from './Modal'
import Logout from '../User/logout'

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
    icon:{
        width:'50px'
    }
  }));

  const Dashboard=()=>{
    const classes = useStyles();

  return (
    <div className={classes.root}>
        <Logout/>
      <h1>Make Your Pizza by selecting below ingredients</h1><br/>
      <Grid container spacing={3}>
      <Grid item xs={1} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://cdn4.iconfinder.com/data/icons/food-and-drink-1-2/64/pizza-food-italian-meal-512.png' alt='pizza Base'/></Paper>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>NY Style Pizza</Paper></Button></label>
        <input type='radio' name='base'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Neapolitan Crust</Paper></Button></label>
        <input type='radio' name='base'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}> Chicago Deep Dish</Paper></Button></label>
        <input type='radio' name='base'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Sicilian Style</Paper></Button></label>
        <input type='radio' name='base'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Thin Crust</Paper></Button></label>
        <input type='radio' name='base'/>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
      <Grid item xs={1} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9K-enDiE2tgJAW7bhIjsLkdW8DPOmmjLfw&usqp=CAU' alt='sauce'/></Paper>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Pesto</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Hummus</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}> Buffalo Sauce</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Marinara Sauce</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Garlic Ranch</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
      <Grid item xs={1} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-04-512.png' alt='cheese'/></Paper>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Mozzarella</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Gorgonzola</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}> Pecorino-Romano</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        <Grid item xs={2} >
          <label ><Button ><Paper className={classes.paper}>Havarti</Paper></Button></label>
        <input type='radio' name='sauce'/>
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={3} ></Grid>
        <Grid item xs={6} >
          <label ><Paper className={classes.paper}><TransitionsModal/></Paper></label>
        </Grid>
        </Grid>
    </div>
  );
}
export default Dashboard;
