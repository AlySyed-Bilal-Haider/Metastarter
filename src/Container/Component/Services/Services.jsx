import React from 'react'
import {Grid,Typography,Box,Button, Container} from "@mui/material";
import Gamenft from '../../GameNFT/Gamenft';
import Projects from '../../Activeproject/Projects'
function Services() {
  return <>
  <Box width="100%" sx={{backgroundColor:'#0A000C'}}>
   <Container  >
       <Grid container >
        <Grid item xs={12} sx={{backgroundColor:'#19141A',py:2}}>
        <Gamenft bgcolorprops="#19141A"/>
        </Grid>
        </Grid>
    </Container>
    <Box width="100%" sx={{py:6}}>
    <Projects  bgcolorprojects="#0A000C"/>
    </Box>
    </Box>
  </>
}

export default Services