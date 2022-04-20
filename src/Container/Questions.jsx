import React from 'react'
import {Grid,Typography,Box,Button,List,ListItemButton,ListItemText,ListItemIcon} from "@mui/material";
import TextField from '@mui/material/TextField';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const iconstyle={
    color:"#AD15F4",
    position:'relative'
}
function QuestionsASK() {
  return (
    <Grid container  sx={{ overflowX:'hidden',backgroundColor:'#0A000C',py:5,p:1}}> 
    <Grid item md={12} style={{padding:'10% 0% 2% 8%'}} sx={{color:'white'}}>
        <Typography variant="h4">Frequently ASK <strong style={{color:"#FE006F"}}>Questions </strong> </Typography>
    </Grid>
      <Grid item md={6}>
      <List style={{padding:'2% 0% 2% 12%'}}
                sx={{ width: '100%', maxWidth: 450,color:'white' }}
                component="nav">
                <ListItemButton>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <ListItemIcon style={iconstyle} >
                <FiberManualRecordIcon />
                </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <ListItemIcon style={iconstyle}>
                <FiberManualRecordIcon />
                </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                    <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                </ListItemButton>
                </List>
    </Grid>
    <Grid item md={6}>
      <Typography sx={{color:'white',width:'90%',margin:"10px",fontSize:{sm:'12px',xs:'12px'}}}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Typography>
      <List
                sx={{ width: '100%', maxWidth: 450,color:'white'}}
                component="nav">
                <ListItemButton>
                 <ListItemIcon style={iconstyle} >
                <FiberManualRecordIcon />
                </ListItemIcon>
                    <ListItemText sx={{fontSize:'small'}} primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon style={iconstyle}>
                <FiberManualRecordIcon />
                </ListItemIcon>
                    <ListItemText  primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText  primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText primary="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </ListItemButton>
                </List>
      </Grid>
    </Grid>
  )
}

export default QuestionsASK