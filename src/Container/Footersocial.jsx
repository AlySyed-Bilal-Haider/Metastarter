import React from 'react'
import {Grid,Typography,Box} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footersocial = () => {
  return <>
     <Grid container display="flex" spacing={2} 
     sx={{ overflowX:'hidden',backgroundColor:'#110D12',p:2,
     boxShadow: '1px 0px 23px rgba(0, 0, 0, 0.25)' }}>
         <Grid item color="white" xs={6}>
        <Typography margin="12px"> Logo Here </Typography>
         </Grid>
         <Grid item xs={6} >
           <Box style={{float:'right',color:'white'}} mr={5}>
               <FacebookIcon/>
               <YouTubeIcon/>
               <TwitterIcon/>
               </Box>
         </Grid>
     </Grid>
  </>
}
export default Footersocial