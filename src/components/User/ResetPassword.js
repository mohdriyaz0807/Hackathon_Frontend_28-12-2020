import React from 'react';
import { FormControl,FormHelperText,Input,InputLabel,Button,Alert } from '@material-ui/core';
import './style.css'


const Reset =() =>{
    let url='https://pizza-apps-backend.herokuapp.com'
    const href = window.location.href.split('/')
    const random = href[href.length-1]
    const param=href[href.length-2]!=='admin'?'reset':'admin/reset'
    const [data,setData]=useState({password:"",password1:"",randomstring:random})
    const submit = data[0]===data[1] ? async ()=>{
    const res= await axios.post(`${url}/${param}`,data)
    console.log(res.data)
    }:{alert}

    const alert=()=>{<Alert severity="warning">Password Mismatch!</Alert>}

    return(
        <div>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input id="my-input1" onChange={e=>setData({...data,password:e.target.value})} value={data.password}/>
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="my-input2">Confirm Password</InputLabel>
            <Input id="my-input2" onChange={e=>setData({...data,password1:e.target.value})} value={data.password1} aria-describedby="my-helper-text1" />
            <FormHelperText id="my-helper-text1">Minimum 8 characters is considered as Strong Password</FormHelperText>
            </FormControl><br/>
            <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
            </div>
    )
}

export default Reset;