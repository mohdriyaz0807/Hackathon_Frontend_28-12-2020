import React, {useState} from 'react';
import { Paper , Grid ,FormControl,FormHelperText,Input,InputLabel,Button,makeStyles } from '@material-ui/core';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(4),
      flexGrow: 1,
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
    const submit = async ()=>{
    const res= await axios.post(`${url}/${param}`,data)
    console.log(res.data)
    }
    const classes = useStyles()
    return(
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}></Grid>
        <Grid item sm={4} xs={12}>
        <Paper className={classes.paper}>
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
            <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
            </Paper>
            </Grid>
            </Grid>
            </div>
    )
}

export default Register;