import React, {useState} from 'react';
import { Paper , Grid ,FormControl,FormHelperText,Input,InputLabel,Button,makeStyles } from '@material-ui/core';
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
      flexGrow: 1,
    },
    firstline:{
      textAlign:'center',
      fontSize:'150%',
      fontFamily:'serif'
    },
    paper: {
      padding: theme.spacing(5),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Register = () =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const href = window.location.href.split('/')
    const query = href[href.length-1]
    const param=query!=='admin'?'registeruser':'registeradmin'
    const [data,setData]=useState({name:"",mobile:"",email:"",password:""})
    const [msg,setmsg]=useState({icon:'',message:'',load:'Register',disable:false})
    const submit = async ()=>{
      setmsg({...msg,load:'Please Wait..',disable:true})
    await axios.post(`${url}/${param}`,data)
    .then((res)=>{
    console.log(res.data)
    setData({...data,name:"",mobile:"",email:"",password:""})
    setmsg({...msg,icon:res.data.icon,message:res.data.message,load:'Register',disable:false})
  })
    .catch((err)=>{
      console.log(err)
    })
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12} md={4}></Grid>
        <Grid item sm={6} xs={12} md={4}>
        <Paper className={classes.paper}>
          <h3 className={classes.firstline}>Register yourself</h3>
            <FormControl >
            <InputLabel htmlFor="my-name">Full Name</InputLabel>
            <Input type='text' id="my-name" onChange={e=>setData({...data,name:e.target.value})} value={data.name}/>
            </FormControl><br/>
            <FormControl >
            <InputLabel htmlFor="my-mobile">Mobile</InputLabel>
            <Input type='number' id="my-mobile" onChange={e=>setData({...data,mobile:e.target.value})} value={data.mobile}/>
            </FormControl><br/>
            <FormControl >
            <InputLabel htmlFor="my-mail">Email address</InputLabel>
            <Input type='email' id="my-mail" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input type='password' id="my-password" onChange={e=>setData({...data,password:e.target.value})} value={data.password} aria-describedby="my-helper-text1" />
            <FormHelperText id="my-helper-text1">Minimum 8 characters is<br/> considered as Strong Password</FormHelperText>
            </FormControl><br/><br/>
            <Button variant="contained" color="primary" disabled={msg.disable} onClick={submit}>{msg.load}</Button>
            {msg.icon!==''?<div className={classes.roots}>
                <Alert severity={msg.icon}>{msg.message}</Alert>
                </div>:''}
            </Paper>
            </Grid>
            </Grid>
            </div>
    )
}

export default Register;