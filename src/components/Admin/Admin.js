import './AdminStyle.css'
import React,{useState} from 'react';
import { Paper , Grid ,FormControl,FormHelperText,Input,InputLabel,Button,makeStyles  } from '@material-ui/core';
import { Link } from "react-router-dom";
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
}));

const Admin =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const [data,setData]=useState({email:"",password:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/adminlogin`,data)
    console.log(res.data)
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
            <Input type='email' id="my-input" aria-describedby="my-helper-text" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input type='password' id="my-input1" aria-describedby="my-helper-text1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            <FormHelperText id="my-helper-text1">Keep your Password safe !</FormHelperText>
            </FormControl><br/><br/>
            <FormControl>
            <Button variant="contained" color="primary"  onClick={submit}>Submit</Button>
            </FormControl><br/><br/>
            <FormControl>
            <Link to='./Register/admin'>New User?</Link>
            </FormControl><br/><br/>
            <FormControl>
            <Link to='./ForgotPassword/admin'>Forgot Password?</Link>
            </FormControl>
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