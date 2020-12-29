import React,{useState} from 'react';
import { FormControl,FormHelperText,Input,InputLabel,Button,makeStyles  } from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from 'axios'
import './style.css'

const useStyles = makeStyles({
    root: {
      alignItems:'center',
    },
  });

const Login =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const [data,setData]=useState({email:"",password:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/login`,data)
    console.log(res.data)
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <FormControl >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input id="my-input1" aria-describedby="my-helper-text1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            <FormHelperText id="my-helper-text1">Password is case sensitive</FormHelperText>
            </FormControl><br/>
            <FormControl>
            <Button variant="contained" color="primary"  onClick={submit}>Submit</Button>
            </FormControl><br/>
            <FormControl>
            <Link to='./Register'>New User?</Link>
            </FormControl><br/>
            <FormControl>
            <Link to='./ForgotPassword'>Forgot Password?</Link>
            </FormControl>
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
    {show}

}

export  {Login,String,}