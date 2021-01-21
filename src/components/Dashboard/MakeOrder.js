import React,{useState} from 'react';
import {Paper , Grid ,makeStyles,MenuItem,FormControl,InputLabel,Select,Box,Button} from '@material-ui/core';
import PizzaBase from './Ingredients/PizzaBase'
import Sauce from './Ingredients/Sauce'
import Cheese from './Ingredients/Cheese'
import Veggies from './Ingredients/Veggies'
import Meat from './Ingredients/Meat'
import Logout from '../User/logout'
import axios from 'axios'

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
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const MakeOrder=(props)=>{
        let url='https://pizza-apps-backend.herokuapp.com'
        const classes = useStyles();
        const [item, setItem] = useState('');
        const [displayed,setDisplayed] = useState('none')
        const [order,setOrder] = useState({name:'',base:'',sauce:'',cheese:'',veggies:'',meat:''})
        let id=window.location.href.split('?')[1].split('&')[0]
        const submit = async ()=>{
          const res= await axios.post(`${url}/makeorder/${id}`,order)
          console.log(res.order)
          }

    const handleChange = (event) => {
    setItem(event.target.value);
    setOrder({...order,name:event.target.value})
    setDisplayed('block')
  };
  const getorder = (name,ingridientType) => {
    setOrder({...order,[ingridientType]:name})
    console.log(order);
  }
  return (
    <div className={classes.root}>
        <Logout/>
        <h1>Welcome {props.name} !</h1>
        <h1>Make Your Pizza by selecting below ingredients</h1><br/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={12} lg={12} >
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select..</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item}
          onChange={handleChange}
        >
          <MenuItem value='Double Cheese Margherita'>Double Cheese Margherita</MenuItem>
          <MenuItem value='Farm House'>Farm House</MenuItem>
          <MenuItem value='Peppy Paneer'>Peppy Paneer</MenuItem>
          <MenuItem value='Veggie Paradise'>Veggie Paradise</MenuItem>
          <MenuItem value='Indi Tandoori Paneer'>Indi Tandoori Paneer</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <Box display={displayed}>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://cdn4.iconfinder.com/data/icons/food-and-drink-1-2/64/pizza-food-italian-meal-512.png' alt='pizza Base'/></Paper>
      <Paper className={classes.paper}><PizzaBase getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9K-enDiE2tgJAW7bhIjsLkdW8DPOmmjLfw&usqp=CAU' alt='sauce'/></Paper>
      <Paper className={classes.paper}><Sauce getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-04-512.png' alt='cheese'/></Paper>
      <Paper className={classes.paper}><Cheese getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://content3.jdmagicbox.com/comp/nagaur/x3/9999p1582.1582.190910205840.m8x3/catalogue/mansuri-veg-and-fruits-lalas-nagaur-fruit-vendors-c4rwqk8q83.jpg?clr=5c3b0a' alt='cheese'/></Paper>
      <Paper className={classes.paper}><Veggies getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://www.myfoodwifi.com/wp-content/uploads/2018/03/9a-300x300.jpg' alt='cheese'/></Paper>
      <Paper className={classes.paper}><Meat getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
        <Button variant="contained" color="primary"  onClick={submit}>Add to Cart</Button>
        </Grid>
        </Grid>
        </Box>
    </div>
  );
}
export default MakeOrder;
