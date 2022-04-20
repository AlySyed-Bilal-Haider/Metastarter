import React from 'react'
import {Grid,Typography,Box,Button} from "@mui/material";
import TextField from '@mui/material/TextField';
function Newsleterr() {
    const btnstyle={
        color:'white',
        clipPath:'polygon(21% 0px, 94% 0px, 100% 20%, 79% 100%, 6% 100%, 0px 80%)',
        background:'radial-gradient(241.67% 3206.67% at -4.58% -26.67%, rgb(173, 0, 255) 8.51%, rgb(0, 41, 255) 100%)',
        cursor:'pointer',
        width:'186px',
        height:'46px',
        fontSize:'12px'
    }
  return (
    <Grid container  
    sx={{ overflowX:'hidden',background: 'radial-gradient(300.45% 1463.87% at -10.71% 36.94%, rgb(10, 0, 12) 0%, rgb(84, 84, 84) 100%)',color:'white',boxSizing:'border-box'}}>
     <Grid item xs={4} sx={{ minHeight:'300px',clipPath: 'polygon(74% 0, 100% 50%, 73% 100%, 0% 100%, 0 46%, 0% 0%)',backgroundColor:'#8000FF' }}>
     </Grid>
     <Grid item xs={7} sx={{ml:3,py:3}}>
       <Typography variant="h4">Subscribe to our newsletter</Typography>
       <Typography sx={{width:{lg:'85%',md:'85%',sm:'100%',xs:'100%'},fontSize:'12px'}} >
         Config 2022 is round the clock—yes, 24 hours straight.
            Join us on May 10-11 (at literally any time) 
            to learn whats new in the world of Figma and FigJam.
            Config 2022 is round the clock—yes, 24 hours straight. </Typography>
        <TextField sx={{py:{lg:2,md:2,sm:1,xs:1},width:'70%',position:'relative',color:'white'}} id="outlined-basic" label="Enter your email" variant="outlined" /><br/>
        <Button style={btnstyle}>Subscribe</Button>
     </Grid>
    </Grid>
  )
}

export default Newsleterr