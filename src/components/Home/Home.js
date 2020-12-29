import React from 'react';
import './HomeStyle.css'
import {Container ,CssBaseline } from '@material-ui/core';

const Home=()=>{
    return(
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className='bg-image'>
        <img src='https://1qb35t26pv722y0ac82cika4-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/mogios-hero-1-1024x683.jpg' alt='Pizza'/>
      </Container>
    </React.Fragment>
    )
}
export default Home;
