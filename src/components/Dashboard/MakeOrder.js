import React,{useState} from 'react';
import {Paper , Grid ,makeStyles,MenuItem,FormControl,InputLabel,Select,Button} from '@material-ui/core';
import PizzaBase from './Ingredients/PizzaBase'
import Sauce from './Ingredients/Sauce'
import Cheese from './Ingredients/Cheese'
import Veggies from './Ingredients/Veggies'
import Meat from './Ingredients/Meat'
import Logout from '../User/logout'
import axios from 'axios'
import Swal from 'sweetalert2';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      marginBlock:'auto',
    },
    margin:{
      width:'250%',
      marginBottom:'15%'
    },
    icon:{
        width:'50px'
    },
    cart:{
      textAlign:'center',
      marginBlock:'auto',
      paddingTop:'5%',
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
        const [order,setOrder] = useState({name:'',base:'',sauce:'',cheese:'',veggies:'',meat:'',status:''})
        const [submitbutton,setsubmitbutton]=useState('Add to Cart')
        let id=window.location.href.split('?')[1].split('&')[0]
        
    const handleChange = (event) => {
    setOrder({...order,name:event.target.value})
  };
  const getorder = (name,ingridientType) => {
    setOrder({...order,[ingridientType]:name})
    console.log(order);
  }
  const submit = async ()=>{
    let count=7
    for(let x in order){
      if(order[x]===''){
        count--
      }
    }
    console.log(count,order)
    if(count>=6){
      setsubmitbutton('Loading...')
      setOrder({...order,status:'Payment pending'})
      const res= await axios.post(`${url}/makeorder/${id}`,order)
      {SweetAlert('success','Your Order has added to the Cart')}
      setsubmitbutton('Add to Cart')
    }else{
      {SweetAlert('error','Please Select All Options')}
    }
}
const SweetAlert =(status,data)=>{
  Swal.fire({
    icon: status,
    title: 'Alert',
    text: data,
})
}
  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item md={9} xs={9} sm={9}>
        <h1 >Welcome {props.name} !</h1>
        <h1>Make Your Pizza by selecting below ingredients</h1>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" >Choose here..</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order.name}
          onChange={handleChange}
          className={classes.margin}
        >
          <MenuItem value='Double Cheese Margherita'>Double Cheese Margherita</MenuItem>
          <MenuItem value='Farm House'>Farm House</MenuItem>
          <MenuItem value='Peppy Paneer'>Peppy Paneer</MenuItem>
          <MenuItem value='Veggie Paradise'>Veggie Paradise</MenuItem>
          <MenuItem value='Indi Tandoori Paneer'>Indi Tandoori Paneer</MenuItem>
        </Select>
      </FormControl>
      </Grid>
        <Grid item md={3} xs={3} sm={3}>
        <Logout/>
        </Grid>
      </Grid>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} md={4} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://cdn4.iconfinder.com/data/icons/food-and-drink-1-2/64/pizza-food-italian-meal-512.png' alt='pizza Base'/></Paper>
      <Paper className={classes.paper}><PizzaBase getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9K-enDiE2tgJAW7bhIjsLkdW8DPOmmjLfw&usqp=CAU' alt='sauce'/></Paper>
      <Paper className={classes.paper}><Sauce getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://cdn0.iconfinder.com/data/icons/foody-icons/32/FoodyIcons_color-04-512.png' alt='cheese'/></Paper>
      <Paper className={classes.paper}><Cheese getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://content3.jdmagicbox.com/comp/nagaur/x3/9999p1582.1582.190910205840.m8x3/catalogue/mansuri-veg-and-fruits-lalas-nagaur-fruit-vendors-c4rwqk8q83.jpg?clr=5c3b0a' alt='cheese'/></Paper>
      <Paper className={classes.paper}><Veggies getName={getorder}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} >
      <Paper className={classes.paper}><img className={classes.icon} src='https://www.myfoodwifi.com/wp-content/uploads/2018/03/9a-300x300.jpg' alt='cheese'/></Paper>
      <Paper className={classes.paper}><Meat getName={getorder}/></Paper>
        </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.cart} >
        <Grid item xs={12} sm={12} lg={12}>
        <Button variant="contained" color="primary"  onClick={submit}>{submitbutton}</Button>
        </Grid>
        </Grid>
    </div>
  );
}
export default MakeOrder;
