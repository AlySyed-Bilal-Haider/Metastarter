import React from 'react'
import {Grid,Typography,Box,Button} from "@mui/material";
import bsc from '../Container/Image/brandcompany.png';
  // import './Partner.css';
function Partner() {
  return (
    <Grid container sx={{ overflowX:'hidden',backgroundColor:'#0A000C'}}>
        <Grid item xs={12} sx={{color:'white',p:1,ml:4}} >
        <Typography variant="h3" sx={{fontSize:{md:'32px',sm:'24px',xs:'16px'}}}>Our <strong> Pertner</strong> </Typography>
        </Grid>
            <Grid item width="100%" xs={12} sx={{backgroundColor:'#110713',p:8}} 
            display="flex" justifyContent="space-evenly" alignItem="center">
              {/* <marquee direction="reverse" delay='0s'  play='running' iterationCount='infinite'> */}
              <img src={bsc} alt="" className="brandlog" style={{position:'relative',width:'100%'}}/>
              {/* </marquee> */}
            </Grid>
    </Grid>
)}
export default Partner