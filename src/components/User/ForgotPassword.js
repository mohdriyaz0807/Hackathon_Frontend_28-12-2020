import React,{useState} from 'react';
import { FormControl,FormHelperText,Input,InputLabel,Button } from '@material-ui/core';
import './style.css'
import axios from 'axios'



const Forgot =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const query= new URLSearchParams(window.location.search)
    const param=!query.get('admin')?'forgotpassword':'admin/forgotpassword'
    const [data,setData]=useState({email:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/${param}`,data)
    console.log(res.data)
    }
    return(
        <div className='Logincol'>
            <FormControl >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            <FormHelperText id="my-helper-text1">Type your registered EmailId</FormHelperText>
            </FormControl><br/>
            <Button variant="contained" color="primary" href="#contained-buttons" onClick={submit}>Submit</Button>
            </div>
    )
}

export default Forgot;