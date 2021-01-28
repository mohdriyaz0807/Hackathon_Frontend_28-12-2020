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

const Forgot =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const href = window.location.href.split('/')
    const query = href[href.length-1]
    const param=query!=='admin'?'forgotpassword':'admin/forgotpassword'
    const [data,setData]=useState({email:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/${param}`,data)
    console.log(res.data)
    }

    const classes = useStyles()

    return(
        <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={3} md={4} xs={12}></Grid>
        <Grid item sm={6} md={4} xs={12}>
        <Paper className={classes.paper}>
          <h1 className={classes.firstline}>Forgot Password</h1>
            <FormControl >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input type='email' id="my-input" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            <FormHelperText id="my-helper-text1">Type your registered EmailId</FormHelperText>
            </FormControl><br/><br/>
            <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
            </Paper>
            </Grid>
            </Grid>
            </div>
    )
}

export default Forgot;