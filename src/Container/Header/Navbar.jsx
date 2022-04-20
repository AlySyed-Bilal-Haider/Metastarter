import React from 'react'
import {Grid,Typography,Button,useMediaQuery} from "@mui/material";
import TemporaryDrawer from './Responisvedrawer';
import {
 Link
} from "react-router-dom";
import './Navbar.css';
const navbarstyling={
    padding:'5px',
    marginTop:'2%', 
}
const Navbar = () => {
  const matches=useMediaQuery('(min-width:906px)');
  return <>
   <Grid container position="relative" top="0px" left="0px" sx={{ overflowX:'hidden',backgroundColor:'#16002C',color:'white',padding:'5px 0px 5px 0px'}}>
       <Grid item  sx={{md:3,sm:6,xs:12}}>
           <Typography sx={{ width:'161px',height:'38px',m:matches?'6% 0px 0px 115px':'5% 0px 0px 100%'}}>
            Logo Here
           </Typography>
       </Grid>
       <Grid item md={7} 
        sx={{display:{
         lg:'block',
         md:'none',
         sm:'none',
         xs:'none'
       }}}>
           <nav style={navbarstyling}>
               <Link to="/" className="a">Home</Link>
               <Link  className="a">Dashboard</Link>
               <Link to="/services"  className="a">Services</Link>
               <Link  className="a">Project</Link>
               <Link  className="a">RoadMap</Link>
            </nav>
       </Grid>
       <Grid item  md={6}
       sx={{color:'white',zIndex:1,display:{ lg:'none', md:'block',  sm:'block', xs:'block' }}} style={{position:'absolute'}}>
         <TemporaryDrawer/>
       </Grid>
       <Grid item md={2}  sx={{display:{ lg:'block', md:'none', sm:'none', xs:'none'}}}>
           <Button sx={{m:'6% 0px 0px 0px',color:'white',
          clipPath:'polygon(21% 0px, 94% 0px, 100% 20%, 79% 100%, 6% 100%, 0px 80%)',
          background:'radial-gradient(241.67% 3206.67% at -4.58% -26.67%, rgb(173, 0, 255) 8.51%, rgb(0, 41, 255) 100%)',width:"100px"}}>
               Connect
           </Button>
           </Grid>
   </Grid>

  </>
}

export default Navbar