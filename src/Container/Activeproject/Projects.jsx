import React,{useState} from 'react'
import {Grid,Typography,Box,Button} from "@mui/material";
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import icons1 from '../Image/icon1.png';
import {Filterdata} from '../redux/Actions/Actions';
import { useDispatch, useSelector } from "react-redux";

const btnstyle={
  overflowX:'hidden',
    color:'white',
    clipPath:'polygon(21% 0px, 94% 0px, 100% 20%, 79% 100%, 6% 100%, 0px 80%)',
    background:'radial-gradient(241.67% 3206.67% at -4.58% -26.67%, rgb(173, 0, 255) 8.51%, rgb(0, 41, 255) 100%)',
    cursor:'pointer',
    position:'relative',
    height:'40px',
    fontSize:'12px',
    width:'245px'
}
function Projects(props) {
 
  const cards = useSelector(state => state);
  const usedispatch=useDispatch();
  const [filter,filterState]=useState(cards);
  const filtervalue=(values)=>{
    console.log(values)
   const filterstatevalues=cards.filter((items)=>{ return items.status==values});
   console.log("filter values",filterstatevalues);
   filterState(filterstatevalues);
    // usedispatch(Filterdata(values));
    return true;
  }
  console.log("Filter value",filter);
  return (
   <Grid container  sx={{backgroundColor:props.bgcolorprojects?props.bgcolorprojects:'#1C171D',color:'white'}} padding='40px 10px'>
     <Grid item sm={8} xs={12}>
     <Box display="flex" justifyContent="center" alignItems="center">
      <Button style={btnstyle} onClick={()=>{filtervalue('active')}} >Active Project</Button>
       <Button style={btnstyle} marginLeft="10px" background='none' onClick={()=>{filtervalue('upcoming')}}>Upcoming</Button>
      </Box> 
     </Grid>
     <Grid item md={4} sm={12} xs={12}>
     <Typography textAlign="center" sx={{mt:{lg:'0px',md:'0px',sm:'10px',xs:'10px'}}}>View More <ArrowForwardIcon style={{position:'relative',top:'8px'}}/> </Typography>
     </Grid><br/><br/>
     {filter.lenght!==0 ? filter.map((items)=>{
        return <>
         <Grid item md={6} sx={{mt:{lg:2,md:4,sm:4,xs:4}}} sm={11} xs={11} key={items.id}>
     <Card sx={{mt:2, backgroundColor:'#1C171D',color:'white',maxWidth:'500px',margin:'auto',
    boxShadow: '0px 4px 15px rgba(173, 21, 244, 0.1), 0px 4px 15px rgba(173, 21, 244, 0.1)'}}>
      <CardMedia component="img"  image={items.img}alt="green iguana" />
      <CardContent>
        <Box  style={{position:'relative',top:'-70px',left:'4%'}} sx={{width:'85px',height:'90px',borderRadius:'12px',backgroundColor:'#C4C4C4',color:'white'}}></Box>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" marginTop="-20px">
        <Typography>Humans <br/>$Bns</Typography>
          <img src={icons1} alt=""/>
          </Box><br/>
          <Box display="flex" justifyContent="space-between" alignItems="flex-end" >
        <Typography sx={{fontSize:{lg:'22px',md:'18px',sm:'16px',xs:'12px'}}}>Total Rise</Typography>
        <Typography>{items.totalrise}</Typography>
        </Box><br/>
        <Box display="flex" justifyContent="space-between" alignItems="flex-end" >
        <Typography>Personal Allocation</Typography>
        <Typography  style={{float:'right',marginRight:'10px'}}>{items.allocation}</Typography>
        </Box>
      </CardContent>
    </Card>
     </Grid>
        </>
     }):(<Grid item xs={12}> <Typography color="white">Not Found </Typography></Grid>)}
    

   </Grid>
  )
}

export default Projects