import React from 'react'
import {Grid,Typography,Box,Button,List,ListItemButton,ListItemText,ListItemIcon,useMediaQuery} from "@mui/material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Tokendistributionimg from '../Container/Image/Rectangletoken.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const iconstyle={
    color:"#AD15F4",
}
const tonkenpercentage_styling={
    color:'blue',
    fontSize:'14px'
} 
const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 100 },
    { name: 'Group F', value: 500 },
  ];
  const COLORS = ['#8000FF', '#490092', '#9E3EFF', '#6100C2','#6C009F','#AD00FF','#5C01F2'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function Tokendistribution() {
  const matches=useMediaQuery('(max-width:746px)');
  return <>
    <Grid container  display="flex" justifyContent="space-between" 
    sx={{ overflowX:'hidden',pt:5,pb:5,position:'relative',color:'white',backgroundColor:'#0A000C'}}>
    <Typography  sx={{fontSize:{md:'32px',sm:'24px',xs:'16px'},position:'absolute',color:'white',top:{lg:'25%',md:'20%',sm:'15%',xs:'12%'},left:'10%'}} >Token Distribution</Typography>
       {/* // Token distribution graph */}
        <Grid item display="flex" justifyContent="space-around" md={9} sm={12} xs={12} marginLeft="-5px" 
        sx={{alignItems:"center", width:'100%',minHeight:'726px',backgroundImage:`url(${Tokendistributionimg})`,
        backgroundRepeat:'no-repeat',borderRadius:'0% 10% 10% 0%'}}>
         <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            padding="5px"
          >
            {data.map((entry, index) => (
              <Cell width="100%" key={`cell-${index}`} fill={COLORS[index % COLORS.length]} value={entry.value} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <List
                sx={{ width: '100%', maxWidth:{md:'450px',sx:'400px'}}}
                component="nav">
                <ListItemButton>
                 <ListItemIcon style={iconstyle} >
                <FiberManualRecordIcon />
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Liquidity & Listing 20%" />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon style={iconstyle}>
                <FiberManualRecordIcon />
                </ListItemIcon>
                    <ListItemText sx={{fontSize:'12px'}} primary="Mining 25%" />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Ecosystem 10%" />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Advisors 35%" />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="private sale 21%" />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="Public 23%" />
                </ListItemButton>
                <ListItemButton>
                <ListItemIcon >
                <FiberManualRecordIcon style={iconstyle}/>
                </ListItemIcon>
                    <ListItemText sx={{fontSize:{lg:'10px'}}} primary="team 23%" />
                </ListItemButton>
                </List>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{mt:{md:2,xs:4},textAlign:'center'}} display="flex" direction="column" justifyContent="space-evenly"  alignItems="center"><br/>
         <Typography sx={{borderBottom:'1px solid #E5E5E5'}} variant="h4">Token <strong>Allocation</strong></Typography><br/>
         <Typography>1,500,000  <br/><span style={tonkenpercentage_styling}>Public sale</span></Typography><br/>
         <Typography>0.13 USDT <br/> <span style={tonkenpercentage_styling}>Public sale price</span></Typography><br/>
         <Typography>50% TEG, <br/><span style={tonkenpercentage_styling}> 25% UNLOCK MONTHLY</span> </Typography><br/>
        </Grid>
    </Grid>
  </>
};

export default Tokendistribution