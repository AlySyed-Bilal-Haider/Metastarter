import React from 'react'
import {Grid,Typography,Box,Button,useMediaQuery} from "@mui/material";
import Bounce from 'react-reveal/Bounce';
const Boxstyling={
    width:'78px',
     height:"78px",
     borderRadius:'50%',
     backgroundColor:'lightgray',
     color:'white',
     margin:'auto',
     borderBox:'box-sizing'
}
const Gridstyling={
    padding:'25px',
    border:'1px solid lightgray',
    borderRadius:'10px',
    backgroundColor:'#0A000C',
    margin:'5px',
    borderBox:'box-sizing'
}

const quantitystyle={ color:'#7331FF',}
function Gamenft(props) {
    const matches=useMediaQuery('(max-width:894px)');
    
  return (
   <Grid container sx={{overflowX:'hidden',p:6,backgroundColor:props.bgcolorprops?props.bgcolorprops:'#110713',color:'white',boxSizing:'border-box'}}>
         <Grid item xs={12}>
             <Box sx={{margin:{lg:"0px 0px 10px 60px",md:"0px 0px 10px 50px",sm:"0px 0px 10px 30px",xs:"0px 0px 10px 0px"}}}>
              <Typography sx={{fontSize:{md:'28px',sm:'22px',xs:'16px'}}}>Recent Gaming and NFT Launches</Typography>
              <Typography color="#7331FF">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
              </Box>
        </Grid>
        <Box justifyContent="center"   textAlign="center" 
         sx={{mt:3,margin:'auto',width:'90%',display:{lg:'flex',md:'flex',sm:'none',xs:'none'},flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'}}}>
             <Grid md={2} sm={12} xs={12} style={Gridstyling}>
            <Box style={Boxstyling}></Box>
            <Typography>ETERNAL</Typography>
            <Typography style={quantitystyle}>272X</Typography>
        </Grid>
        <Grid  item md={2} sm={12} xs={12} style={Gridstyling}>
        <Box style={Boxstyling}></Box>
        <Typography>QBIT</Typography>
            <Typography style={quantitystyle}>272X</Typography>
        </Grid>
        <Grid item md={2}  sm={12} xs={12} style={Gridstyling}>
            <Box style={Boxstyling}></Box>
            <Typography>GMR</Typography>
            <Typography style={quantitystyle}>272X</Typography>
        </Grid>
        <Grid item md={2}  sm={12} xs={12}  style={Gridstyling}>
        <Box style={Boxstyling}></Box>
        <Typography>SSG</Typography>
            <Typography style={quantitystyle}>272X</Typography>
        </Grid>
        <Grid item md={2}  sm={12} xs={12}  style={Gridstyling}>
        <Box style={Boxstyling}></Box>
        <Typography>ETERNAL</Typography>
            <Typography style={quantitystyle}>272X</Typography>
        </Grid>
        <Grid item md={2}  sm={12} xs={12}  style={Gridstyling}>
        <Box style={Boxstyling}></Box>
        <Typography>GN</Typography>
            <Typography style={quantitystyle}>272X</Typography>
        </Grid>
        </Box>
     </Grid>
  )
}

export default Gamenft