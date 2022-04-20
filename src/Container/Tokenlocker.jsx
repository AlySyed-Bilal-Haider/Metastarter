import React from 'react'
import {Grid,Typography,Box,Button,List,ListItemButton,ListItemText,ListItemIcon} from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import lunchprojectimg from './Image/bgg.png';
import './Textcolor.css';
const iconstyle={
    color:"#AD15F4",
}
function Tokenlock() {
  return <>
      <Grid container style={{padding:'5%', overflowX:'hidden'}} sx={{color:'white',width:'100%',backgroundColor:"#0A000C"}}>
        <Grid item md={6}>
        <Typography variant='h4' className="text-gradient " sx={{p:3}}>Token <Typography variant='h4' sx={{fontWeight:'bold',display:'inline-block'}}>Locker</Typography> </Typography>
              <Typography width="88%" style={{marginLeft:'5%'}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
                   <List
                sx={{ width: '100%', maxWidth: 450 }}
                component="nav">
                <ListItemButton>
                 <ListItemIcon style={iconstyle} >
                <FiberManualRecordIcon />
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon style={iconstyle}>
                <FiberManualRecordIcon />
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                </List>
            </Grid>
          <Grid item md={6}>
          <img src={lunchprojectimg} alt="" style={{position:'relative',width:'100%'}}/>
                </Grid>
            </Grid>
  </>}
export default Tokenlock