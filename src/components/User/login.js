import React from 'react';
import { FormControl,FormHelperText,Input,InputLabel } from '@material-ui/core';
import Home from '../Home/Home'


const Login =() =>{
    return(
        <div className='Logincol'>
            <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input id="my-input1" aria-describedby="my-helper-text1" />
            <FormHelperText id="my-helper-text1">Password is case sensitive</FormHelperText>
            </FormControl>
            <Home />
        </div>
    )
}

export default Login;