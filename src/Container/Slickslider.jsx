import React from "react";
import Carousel from "react-elastic-carousel";
import {Grid,Typography,Box,Button} from "@mui/material";
import BorderImage from './Image/borderImage.png';
const app={
    display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  color: '#fff',
 padding:'5% 0% 5% 0%',
   fontSsize: '4em',
  position: 'relative',
  backgroundColor:'#0A000C'
}
const orderlist={
    background: 'hsla(0,0%,100%,.08)',
    borderRadius: '12px',
    color: '#fff',
    width:'80px',
    height:'25px',
    display:'inline-block',
    margin:'5px',
    padding:"10px"
    
}
const orderlist_styling={
    margin:'20px',
    textAlign:'center',
}
const linbox={
    width: '2px',
    minWidth: '2px',
    background: 'linear-gradient(180deg,#333 2.72%,#060108 130.73%)',
    marginRight: '20px',
    marginBottom: '10px',
}
const breakPoints = [
   {width:1,itemsToShow:1},
  { width: 444, itemsToShow: 2 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const settings =  {
  autoplay: true
};
function MultipleItems() {
  return (
    <>
      <Grid container sx={{ overflowX:'hidden',py:4}} style={app}>
          <Grid xs={12} sx={{ml:4}}>
         <Typography variant='h3' sx={{fontSize:{lg:'36px',md:'32px',sm:'28px',xs:'24px'}}} style={{display:'block',}}>RoadMap </Typography> 
         </Grid>
         <Grid xs={12} sx={{p:1}}>  
        <Carousel breakPoints={breakPoints} {...settings} >
            <Box>
                <Typography> 
            Lorem is simple dummy text<br/>
            Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/> 
            </Typography> </Box>
            <Box>
                <Typography> 
            Lorem is simple dummy text<br/>
            Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/> 
            </Typography> </Box> 
            <Box>
                <Typography> 
            Lorem is simple dummy text<br/>
            Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/> 
            </Typography></Box>
            <Box>
                <Typography> 
            Lorem is simple dummy text<br/>
            Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/> 
            </Typography> </Box>
            <Box>
                <Typography> 
            Lorem is simple dummy text<br/>
            Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/> 
            </Typography> </Box>
            <Box>
                <Typography> 
            Lorem is simple dummy text<br/>
            Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/>
           Lorem is simple dummy text<br/> 
            </Typography> </Box>
        </Carousel>
        </Grid>
         <img src={BorderImage} alt="" style={{position:'relative',width:'100%'}}/>
         <Grid  xs={12} display="flex" justifyContent="center" alignItems="center"> 
          <ul  className="slider" style={orderlist_styling}> 
            <li style={orderlist}>2021 </li> 
           <li  style={orderlist}>2022 </li> 
           </ul>
              </Grid>
      </Grid>
    </>
  );
}

export default MultipleItems;
