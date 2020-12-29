import React from 'react';
import { FormControl,FormHelperText,Input,InputLabel } from '@material-ui/core';

const Admin =() =>{
    return(
        <div className='Logincol'>
            <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl><br/>
            <FormControl>
            <InputLabel htmlFor="my-input1">Password</InputLabel>
            <Input id="my-input1" aria-describedby="my-helper-text1" />
            <FormHelperText id="my-helper-text1">Keep your Password safe !</FormHelperText>
            </FormControl>
        </div>
    )
}

export default Admin;