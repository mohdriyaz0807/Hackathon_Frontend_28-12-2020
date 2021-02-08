import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {makeStyles,Grid,Paper,Button,Link} from '@material-ui/core'
import  Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme)=>({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1,
    marginBottom:'20%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
    center:{
      alignItems: 'center',
    },
    h2:{
      color:'blue'
    }
  }));
const useStyles1 = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin:'auto',
    marginTop:'20%',
    marginBottom:'20%',
  },
}));

const YourOrders = (props) => {
  const classes = useStyles();
  const classes1 = useStyles1();
  const[icon,seticon]=useState('')
  const [alert,setalert]=useState('')
  const [order,setOrder] = useState([])
  let url='https://pizza-apps-backend.herokuapp.com'
  const submit=async ()=>{
    await axios.get(`${url}/yourorders/${props.id._id}`,
  {headers:{'authorization':localStorage.getItem('token')
}})
  .then(res=> {
    setOrder(res.data.orders)
    seticon(res.icon)
    console.log(res.data.orders)
  })
}
  useEffect(()=>{
      submit()
  },[alert])

  const remove=async (orderid,orderitemsp)=>{
    await axios.put(`${url}/update/${props.id._id}/${orderid}`,(orderitemsp))
    {alert==false?setalert(true):setalert(false)}
  }
  
  const paymentHandler = async (e) => {
    const API_URL = 'https://pizza-apps-backend.herokuapp.com/'
    e.preventDefault();
    const orderUrl = `${API_URL}order`;
    const response = await axios.post(orderUrl);
    const { data } = response;
    const options = {
      key: process.env.RAZOR_PAY_TEST_KEY,
      name: "Pizza Corner",
      description: "Pay now and get your order in 30Minutes",
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
         const url = `${API_URL}capture/${paymentId}`;
         const captureResponse = await axios.post(url, {})
         console.log(captureResponse.data);
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#44ff86",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    };

    if(order.length!==0){
    return (
      <div className={classes.root}>
        {order.map((row) => (
          <Grid container direction="row" justify="space-around" alignItems="center" spacing={3} key={row.orderid}>
                      <Grid item xs={12} sm={8} md={6}>
                    <Paper className={classes.paper}>
                  <h2 className={classes.h2}>{row.orderitems.name}</h2>
                  <p>{row.orderitems.base}</p>
                  <p>{row.orderitems.sauce}</p>
                  <p>{row.orderitems.cheese}</p>
                  <p>{row.orderitems.veggies.join(', ')}</p>
                  <p>{row.orderitems.meat.join(', ')}</p>
                <h2 className={classes.h2}>RS: {eval((row.orderitems.veggies.length*25)+(row.orderitems.meat.length*25)+150)}</h2>
                <h3>{row.orderitems.status}</h3>
                <Button variant="outlined" color="secondary" onClick={()=>remove(row.orderid,row.orderitems)}>Remove</Button>
                </Paper>
                </Grid>
                </Grid>
                ))}
                <br/>
                <Button variant="contained" size='large' color="primary" onClick={paymentHandler}>Pay Now</Button>
            </div>
            )
    }else if(icon=='error'){
      return(
        <div className={classes.roots}>
            <Alert severity="info">Your session Ended , Please Login Again</Alert>
        </div>
      )
    }
    else{
        return (
            <div className={classes1.root}>
            <Alert severity="info">No orders found ! Make one now to enjoy the treat</Alert>
          </div> )
          }
        }

export default YourOrders