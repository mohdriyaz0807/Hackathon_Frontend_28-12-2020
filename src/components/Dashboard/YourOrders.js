import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {makeStyles,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Link} from '@material-ui/core'
import  Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      marginBottom:'30%',
    },
    center:{
      alignItems: 'center',
    }
  })

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
  const [order,setOrder] = useState([])
  let url='https://pizza-apps-backend.herokuapp.com'
  const submit=()=>{
  axios.get(`${url}/yourorders/${props.id}`)
  .then(res=> {
    setOrder(res.data.orders)
    console.log(res.data.orders)
  })
}
  useEffect(()=>{
      submit()
  },[])
  useEffect(()=>{
    axios.delete()
  })

    if(order!==undefined){
    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className={classes.center}>
            <TableCell ><h1>Item</h1></TableCell>
            <TableCell ><h1>Price</h1></TableCell>
            <TableCell ><h1>Status</h1></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                  <h2>{row.orderItems.name}</h2>
                <ul>
                  <li>{row.orderItems.base}</li>
                  <li>{row.orderItems.sauce}</li>
                  <li>{row.orderItems.cheese}</li>
                  <li>{row.orderItems.veggies.join(', ')}</li>
                  <li>{row.orderItems.meat.join(', ')}</li>
                </ul>
                </TableCell>
              <TableCell><h2>RS: {eval((row.orderItems.veggies.length*25)+(row.orderItems.meat.length*25)+150)}</h2></TableCell>
              <TableCell>
                {row.orderItems.status} 
                <Link to="/paymentgateway">
              <Button size='large' variant="text" color="primary">Pay Now</Button>
              </Link>
              <Button variant="outlined" color="secondary" onClick={delete(row._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
    }else{
        return (
            <div className={classes1.root}>
            <Alert severity="info">No orders found ! Make one now to enjoy the treat</Alert>
          </div> )
          }
        }

export default YourOrders
