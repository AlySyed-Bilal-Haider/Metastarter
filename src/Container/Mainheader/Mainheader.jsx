import React from 'react'
import {Grid,Typography,Box,Button,useMediaQuery} from "@mui/material";
import Headerimg from '../Image/headerr.png';
import Bounce from 'react-reveal/Bounce';
import './Mainheader.css';
const btnstyle={
    color:'white',
    clipPath:'polygon(21% 0px, 94% 0px, 100% 20%, 79% 100%, 6% 100%, 0px 80%)',
    background:'radial-gradient(241.67% 3206.67% at -4.58% -26.67%, rgb(173, 0, 255) 8.51%, rgb(0, 41, 255) 100%)',
    cursor: 'pointer',
    width:'195px',
    height:'46px',
    fontSize:'12px'
}
function Mainheader() {
    const matches=useMediaQuery('(max-width:954px)');
    const smalllaptopscreen=useMediaQuery('(max-width:898px)');
    const extrassmallscreen=useMediaQuery('(max-width:596px)');
  return (
   <Grid container sx={{backgroundImage:`url(${Headerimg})`,backgroundSize:'cover',
   backgroundRepeat:'no-repeat',minHeight:matches?'700px':'1029px',borderBox:'box-sizing',position:'relative', overflowX:'hidden'}}>
    <Grid md={6} sm={12} xs={12} color="white">
        <Box width="70%" margin="auto"style={{ marginTop:matches?'20%':"37%"}}>
            <Typography  fontSize={{ lg:48, sm:44, xs:28 }} className="span">
              METASTARTER 
             Binance Crypto Exchange 
            </Typography>
            <Bounce left>
            <Typography fontSize={{ lg:14, sm:12, xs:10}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            </Typography></Bounce>
            <br/>
            <Box display="flex" justifyContent="flex-start"  direction="column">
            <Button style={btnstyle}>Connect</Button>
            <Button style={btnstyle} sx={{background:'none',border:'1px solid blue',
            marginLeft:'10px'}}>How it Works?</Button>
        </Box></Box>
    </Grid>
    <Grid md={6} sm={12}  xs={12} sx={{display:"flex", justifyContent:'center',alignItems:smalllaptopscreen?"flex-start":"center" }} 
    color="white" columnSpacing={3}>
      <Box sx={{textAlign:'center',backgroundColor:'#8522FF',borderRadius:'25px',p:2,minWidth:'22%'
      ,minHeight:"6%"}} style={{margin:matches?'0px 0px 0px 0px':'68% 0px 0px 20px'}} >
          <Typography fontSize="14px">Total Exchange</Typography>
          <Typography  sx={{fontSize:{lg:'28px',md:'26px',sm:'22px',xs:'14px'}}}>$45,000,000</Typography>
      </Box>
      <Box style={{margin:matches?'10% 0px 0px 0px':'85% 0px 0px 0px'}}  sx={{p:2, textAlign:'center', background:'linear-gradient(90deg, rgba(28,24,172,1) 7%, rgba(230,9,233,0.5) 69%)',borderRadius:'25px',padding:'3%',minWidth:'35%',minHeight:"6%",border:'1px solid blue'}}>
          <Typography fontSize="14px">Cryptocurrency Traded</Typography>
          <Typography  variant="h5">10Most Pupolar</Typography>
      </Box>
      <Box style={{margin:matches?'0px 0px 0px 0px':'68% 10% 0px 0px'}} sx={{p:2, textAlign:'center',backgroundColor:'#8522FF',borderRadius:'25px',minWidth:'22%',minHeight:"6%",border:'1px solid blue'}}>
          <Typography fontSize="14px">ctive Customers</Typography>
          <Typography  sx={{fontSize:{lg:'28px',md:'26px',sm:'22px',xs:'14px'}}}> 45,000+ </Typography>
      </Box>
    </Grid>
   </Grid>
  )
}

export default Mainheader