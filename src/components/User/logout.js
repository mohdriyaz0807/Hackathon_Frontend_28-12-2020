import React from 'react';
import {Button} from '@material-ui/core';

const Logout=()=>{

    const logoff=()=>{
        ['token','userdetails'].forEach(key=>{
    localStorage.removeItem(key)})
    window.location.href = './'
    }
    return(
        <div textAlign='right'>
            <Button variant="contained" color='primary' onClick={logoff}>LogOut</Button>
        </div>
    )
}

export default Logout