import React,{useState} from 'react';
import {Paper , Grid , FormControl,FormHelperText,Input,InputLabel,Button,makeStyles  } from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from 'axios'
import './style.css'

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


const Login =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const [data,setData]=useState({email:"",password:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/login`,data)
    console.log(res.data)
    localStorage.setItem('token', res.data.token)
    window.location.href='./Dashboard'
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={4}></Grid>
          <Grid item xs={4}>
          <Paper className={classes.paper}>
            <FormControl >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input type='email' id="my-input" aria-describedby="my-helper-text" onChange={e=>setData({...data,email:e.target.value})} value={data.email} />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input type='password' id="my-input1" aria-describedby="my-helper-text1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            <FormHelperText id="my-helper-text1">Password is case sensitive</FormHelperText>
            </FormControl><br/><br/>
            <FormControl>
            <Button variant="contained" color="primary"  onClick={submit}>Submit</Button>
            </FormControl><br/><br/>
            <FormControl>
            <Link to='./Register'>New User?</Link>
            </FormControl><br/><br/>
            <FormControl>
            <Link to='./ForgotPassword'>Forgot Password?</Link>
            </FormControl>
            </Paper>
            </Grid>
            </Grid>
            </div>
    )
}

const String=()=>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const href = window.location.href.split('/')
    const requiredstring = href[href.length-1]
    const show=async()=>{
    const res=await axios.get(`${url}/confirm/${requiredstring}`)
    console.log(res.data)
    }
    show()

}

export  {Login,String,}