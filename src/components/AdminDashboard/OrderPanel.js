import React,{useEffect,useState} from 'react'
import { makeStyles,Grid,Paper,Button  } from '@material-ui/core'
import  Alert from '@material-ui/lab/Alert';
import axios from 'axios'


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
  }));
const logoff = ()=>{
  localStorage.removeItem('admintoken')
  window.location.href='./admin'
}
const OrderPanel = () => { 
const [order,setorder]=useState([])
    const show = async ()=>{
        let url='https://pizza-apps-backend.herokuapp.com'
        const res= await axios.get(`${url}/orderpanel`,
        {headers:{'authorization':localStorage.getItem('admintoken')
      }})
        console.log(res.data)
        setorder(res.data)
    }

    useEffect(()=>{
      show()
  },[])

    const classes = useStyles();

    if(order!==''){
    return (
      <div className={classes.root}>
        <Button variant="contained" color='primary' onClick={logoff}>LogOut</Button>
        {order.map((row) => (
          <Grid container direction="row" justify="space-around" alignItems="center" spacing={3} key={row.name}>
                      <Grid item xs={12} sm={8} md={6}>
                    <Paper className={classes.paper}>
                  <h2 className={classes.h2}>{row.name}</h2>
                  <p>{row.base}</p>
                  <p>{row.sauce}</p>
                  <p>{row.cheese}</p>
                  <p>{row.veggies.join(', ')}</p>
                  <p>{row.meat.join(', ')}</p>
                <h2 className={classes.h2}>RS: {eval((row.veggies.length*25)+(row.meat.length*25)+150)}</h2>
                <h3>{row.status}</h3>
                </Paper>
                </Grid>
                </Grid>
                ))}
                <br/>
            </div>
    )
    }else{
        return (
            <div className={classes.root}>
                    <Button variant="contained" color='primary' onClick={logoff}>LogOut</Button>
            <Alert severity="info">No orders found</Alert>
          </div>
        )
          }
}

export default OrderPanel
