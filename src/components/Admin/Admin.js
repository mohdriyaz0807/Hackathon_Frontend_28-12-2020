import './AdminStyle.css'
import React,{useState} from 'react';
import { Paper , Grid ,FormControl,FormHelperText,Input,InputLabel,Button,makeStyles  } from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    flexGrow: 1,
    marginBottom:'15%',
  },
  firstline:{
    textAlign:'center',
      fontSize:'150%',
      fontFamily:'serif',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Admin =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const [data,setData]=useState({email:"",password:""})
    const [loading,setloading]=useState({show:'Login',disabled:false})
    const submit = async ()=>{
      setloading({show:'Plese Wait..',disabled:true})
    const res= await axios.post(`${url}/adminlogin`,data)
    console.log(res.data)
    localStorage.setItem('admintoken', res.data.token)
    setloading({show:'Login',disabled:false})
    window.location.href='/Orderpanel'
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item sm={2} xs={12} md={4}></Grid>
          <Grid item sm={8} xs={12} md={4}>
          <Paper className={classes.paper}>
          <h1 className={classes.firstline}>Admin Login</h1>
            <FormControl >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input type='email' id="my-input" aria-describedby="my-helper-text" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input type='password' id="my-input1" aria-describedby="my-helper-text1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            <FormHelperText id="my-helper-text1">Keep your Password safe !</FormHelperText>
            </FormControl><br/><br/>
            <FormControl>
            <Button variant="contained" color="secondary" disabled={loading.disabled} onClick={submit}>{loading.show}</Button>
            </FormControl><br/><br/>
            <h4>For Login Purpose use below credentials</h4>
            <p>Email : admin@pizzacorner.com</p>
            <p>Password : 1234</p>
            </Paper>
            </Grid>
            </Grid>
            </div>
    )
}

const Strings=()=>{
  
    let url='https://pizza-apps-backend.herokuapp.com'
    const href = window.location.href.split('/')
    const requiredstring = href[href.length-1]
    const show=async()=>{
    const res = await axios.get(`${url}/adminconfirm/${requiredstring}`)
    console.log(res.data)
    }
    show()
}

export  {Admin,Strings,}