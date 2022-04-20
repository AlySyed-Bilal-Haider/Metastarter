import React from 'react'
import {Grid,Typography,Box,Button,useMediaQuery} from "@mui/material";
import Aboutsimg from '../Image/Idoaboutsremove.png';
import Locker from '../Image/locker.png';
import launchimg from '../Image/launch.png';
const iconstyling={
  width:'20px',
  height:'25.5px',
  position:'relative',
  top:'10px',
  right:'5px'
}
function Aboutus() {
  const matches=useMediaQuery('(max-width:954px)');
  return <>
      <Grid container style={{backgroundColor:'#0A000C',padding:'20px',width:'100%'}}>
          <Grid item md={6} sm={12} xs={12}>
        <img src={Aboutsimg} alt="" style={{width:'100%',position:'relative',top:'15%',left:'0%',height:'100%'}}/>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
              <Box  style={{width:"80%",margin:'13% 0px 0px 10%',color:'white'}} >
              <Typography variant='h4'  className="text-gradient ">About us </Typography><br/>
              <Typography sx={{fontSize:'14px'}} paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged.</Typography>
                </Box>
                <Box display="flex" justifyContent="space-around" sx={{mt:5,color:'white'}}>
                  <Typography> <img  style={iconstyling} src={launchimg} alt=""/>  Launch Project</Typography>
                  <Typography>  <img    style={iconstyling} src={launchimg} alt=""/> Token Minter</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-around" sx={{mt:5,color:'white'}}>
                   <Typography> <img  style={iconstyling}src={Locker} alt=""/> Liquidity Locker</Typography>
                  <Typography>  <img  style={iconstyling} src={Locker} alt=""/>  Token Locker</Typography>
                  </Box>
               
          </Grid>
    </Grid>
  </>
}

export default Aboutus