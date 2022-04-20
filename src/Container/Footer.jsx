import React from 'react'
import {Grid,Typography, useMediaQuery,Box} from "@mui/material";
const liststyling={
    fontSize:'14px',
    fontWeight:'normal',
    margin:'auto',
   marginLeft:'2%',
   color:'white'
  }
function Footer() {
    const matches=useMediaQuery('(min-width:960px)');
  const extrassmallscreen=useMediaQuery('(min-width:596px)');
  return (
    <Grid container sx={{ overflowX:'hidden',backgroundColor:'#110713',py:3}}>
          <Grid itemmd={6} xs={12} style={{textAlign:'center'}}>
           <Box style={{position:'relative',top:'5%',left:'20%',width:'238px',height:'238px',background:'linear-gradient(180deg, #6100BF 0%, #AD00FF 100%)',
        borderRadius:'50%'}}>
            <Typography variant="h4" style={{textAlign:'center',color:'white',position:'absolute',top:'90px',left:'15%'}}>Logo Here </Typography>
           </Box>
          </Grid>
          <Grid item md={2} xs={3} >
            <Box style={liststyling}>
              <ul>
              <li><Typography  variant="h5">Home</Typography></li>
              <li> Game</li>
              <li>NFTs</li>
              <li>RoadMap</li>
              <li>Team</li>
              <li>Partner</li>
              </ul>
            </Box>
          </Grid>
          <Grid item md={2} xs={3}>
          <Box style={liststyling}>
              <ul>
              <li><Typography  variant="h5">Company</Typography></li>
              <li> Abouts</li>
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
              </ul>
            </Box>
          </Grid>
          <Grid item md={2} xs={3} style={{marginLeft:matches?"0px":"20px"}}>
          <Box style={liststyling}>
              <ul>
              <li><Typography variant="h5">Platform</Typography></li>
              <li> Support</li>
              <li>Blog</li>
              <li>Documentations</li>
              </ul>
            </Box>
          </Grid>
      </Grid>
  )
}

export default Footer