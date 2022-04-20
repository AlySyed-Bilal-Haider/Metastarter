import React from 'react'
import {Grid,Typography,Box,Button} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import mediaimg1 from './Image/media1.png';
import mediaimg2 from './Image/media2.png';
import mediaimg3 from './Image/media3.png';
import Coverimg from './Image/coverr.png';
import officalimg from './Image/offical.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const cardstyle={
    color:'white',
}
const whiteandreportBox={
  background: 'linear-gradient(90deg, rgba(170,21,244,1) 41%, rgba(102,29,248,1) 84%)',
  minWidth:'50%',
  minHeight:'127px',
  padding:'5px',
  margin:'5px'
}
function Newsmedia() {
  return <>
   <Grid container sx={{p:1,backgroundColor:'#0A000C'}}>
        <Grid item xs={12} sx={{ overflowX:'hidden',color:'white',p:1,ml:10}} >
        <Typography sx={{fontSize:{md:'36px',sm:'24px',xs:'16px'}}}>News and <strong> Media</strong> </Typography>
        </Grid>
            <Grid item display="flex" width="100%" md={12} sx={{p:5,flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'},justifyContent:{lg:"space-evenly",md:'space-evenly',sm:'center',xs:'center'}}} alignItem="center">
     <Card sx={{backgroundColor:'#0A000C',mt:{lg:0,md:2,sm:4,xs:4},maxWidth: 365 ,boxShadow: '0px 4px 15px rgba(173, 21, 244, 0.1), 0px 4px 15px rgba(173, 21, 244, 0.1)' }}>
      <CardMedia
        component="img"
        height="140"
        image={mediaimg1}
        alt="green iguana"/>
      <CardContent  style={cardstyle}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{backgroundColor:'#0A000C',mt:{lg:0,md:2,sm:4,xs:4}, boxShadow: '0px 4px 15px rgba(173, 21, 244, 0.1), 0px 4px 15px rgba(173, 21, 244, 0.1)', maxWidth: 365 }}>
      <CardMedia
        component="img"
        height="140"
        image={mediaimg2}
        alt="green iguana"/>
      <CardContent style={cardstyle}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2">
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{backgroundColor:'#0A000C',maxWidth:'365px',color:'white',mt:{lg:0,md:2,sm:4,xs:4},boxShadow: '0px 4px 15px rgba(173, 21, 244, 0.1), 0px 4px 15px rgba(173, 21, 244, 0.1)' }}>
      <CardMedia
        component="img"
        height="140"
        image={mediaimg3}
        alt="green iguana"/>
      <CardContent  style={cardstyle}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2">
        <Typography variant="body2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid xs={12} item display="flex" sx={{pt:14,pb:16,justifyContent:{lg:"space-evenly",md:'space-evenly',sm:'flext-start'},flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'}}}   alignItems="center" spacing={2}>
        <Box>

            <img src={Coverimg} alt=""  style={{position:'relative',width:'100%'}}/> 
         <Typography textAlign="center" variant="h4"  style={{position:'relative',color:"white",top:'-250px',width:'100%'}}>Whitepaper</Typography>
         </Box>
        <Box sx={{color:'white'}} sx={{width:{lg:'50%',md:"50%",sm:'70%',xs:'90%'}}} >
            <Typography variant="h4" color="white">Official Documents</Typography><br/>
            <Typography sx={{fontSize:{lg:'12px',md:'12px',sm:'10px',xs:'10px'},width:'100%',color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged.
            </Typography>
            <Box display="flex"  sx={{mt:4,flexDirection:{lg:'row',md:'row',sm:'column',xs:'column',justifyContent:{lg:"space-evenly",md:'space-evenly',sm:'center'}}}}>
              <Box style={whiteandreportBox}>
              <Typography variant="h5" textAlign="center" style={{position:'relative',top:'30px'}} sx={{color:'white'}}>White paper<br/><CloudUploadIcon style={{position:"relative"}}/></Typography> 
              </Box>
               <Box style={whiteandreportBox}><Typography textAlign="center" variant="h5" style={{position:'relative',top:'30px'}} sx={{color:'white'}}>Auidit Report<br/><CloudUploadIcon style={{position:"relative"}}/></Typography> </Box>                
            </Box>
        </Box>
    </Grid>
    </Grid>
  </>
}

export default Newsmedia