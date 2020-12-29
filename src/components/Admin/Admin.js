import './AdminStyle.css'
import React,{useState} from 'react';
import { FormControl,FormHelperText,Input,InputLabel,Button,makeStyles  } from '@material-ui/core';
import { Link } from "react-router-dom";
import axios from 'axios'

const useStyles = makeStyles({
    root: {
      alignItems:'center',
    },
  });

const Admin =() =>{
    let url='http://localhost:4000'
    const [data,setData]=useState({email:"",password:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/adminlogin`,data)
    console.log(res.data)
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <FormControl >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input id="my-input1" aria-describedby="my-helper-text1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            <FormHelperText id="my-helper-text1">Keep your Password safe !</FormHelperText>
            </FormControl><br/>
            <FormControl>
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={submit}>Submit</Button>
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

export default Admin;