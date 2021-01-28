import React,{useState} from 'react';
import {Paper , Grid , FormControl,FormHelperText,Input,InputLabel,Button ,makeStyles} from '@material-ui/core';
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

const Reset =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const href = window.location.href.split('/')
    const random = href[href.length-1]
    const param=href[href.length-2]!=='admin'?'reset':'admin/reset'
    const [data,setData]=useState({password:"",password1:"",randomstring:random})
    const submit = data[0]===data[1] ? async ()=>{
    const res= await axios.post(`${url}/${param}`,data)
    console.log(res.data)
    }:alert('Password Mismatch!')

    const classes = useStyles()

    return(
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={12} md={4}></Grid>
        <Grid item sm={6} md={4} xs={12}>
        <Paper className={classes.paper}>
        <h1 className={classes.firstline}>Reset Password</h1>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input type='password' id="my-input1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input2">Confirm Password</InputLabel>
            <Input type='password' id="my-input2" onChange={e=>setData({...data,password1:e.target.value})} value={data.password1} aria-describedby="my-helper-text1" />
            <FormHelperText id="my-helper-text1">Minimum 8 characters is considered as Strong Password</FormHelperText>
            </FormControl><br/><br/>
            <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
            </Paper>
            </Grid>
            </Grid>
            </div>
    )
}

export default Reset;