import React, {useState} from 'react';
import { FormControl,FormHelperText,Input,InputLabel,Button } from '@material-ui/core';
import axios from 'axios'
import './style.css'


const Register = () =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const query= new URLSearchParams(window.location.search)
    const param=!query.get('admin')?'registeruser':'registeradmin'
    const [data,setData]=useState({name:"",mobile:"",email:"",password:""})
    const submit = async ()=>{
    const res= await axios.post(`${url}/${param}`,data)
    console.log(res.data)
    }

    return(
        <div className='Logincol'>
            <FormControl >
            <InputLabel htmlFor="my-name">Full Name</InputLabel>
            <Input id="my-name" onChange={e=>setData({...data,name:e.target.value})} value={data.name}/>
            </FormControl><br/>
            <FormControl >
            <InputLabel htmlFor="my-mobile">Mobile</InputLabel>
            <Input id="my-mobile" onChange={e=>setData({...data,mobile:e.target.value})} value={data.mobile}/>
            </FormControl><br/>
            <FormControl >
            <InputLabel htmlFor="my-mail">Email address</InputLabel>
            <Input id="my-mail" onChange={e=>setData({...data,email:e.target.value})} value={data.email}/>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input id="my-password" onChange={e=>setData({...data,password:e.target.value})} value={data.password} aria-describedby="my-helper-text1" />
            <FormHelperText id="my-helper-text1">Minimum 8 characters is considered as Strong Password</FormHelperText>
            </FormControl><br/>
            <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
            </div>
    )
}

export default Register;