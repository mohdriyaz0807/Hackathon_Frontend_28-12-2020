import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import loader1 from '../assets/loader-1.jpg'
import loader2 from '../assets/loader-2.jpg'
import loader3 from '../assets/loader-3.jpg'

const Loader = () => {
  const images = [loader1,loader2,loader3]
  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 2 ? 0 : prevImage + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "#0000006f",
        width: "100vw",
        height: "101vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <img src={images[currentImage]} alt='loading...' width={100} height={100} style={{borderRadius:'30%'}}/>
    </Box>
  );
};

export default Loader;
