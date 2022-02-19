import * as React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './grid.css'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function FullWidthGrid() {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    
    const fetchData= async()=>{
         try {
  
             const res = await axios.get('http://localhost:5000/triage');
             
                 console.log(res);
                 setInfo(res.data);
              
            }
        catch(err) { console.log(err) }
    }
    fetchData();
  }, []); 

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item><div className="insideitem">
            <div className="itemtitle">QTE PRODUITE</div>
            <div className="itemvalue">{Number(info[0]?.Quantity)}</div>
            </div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className="insideitem">
          <div className="itemtitle">OBJECTIF</div>
            <div className="itemvalue">{Number(info[0]?.Quantit_T)}</div>
            </div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className="insideitem">
          <div className="itemtitle">RETOUR BC</div>
            <div className="itemvalue">{Number(info[0]?.Defective_parts)}</div>
            </div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className="insideitem">
            <div className="itemtitle">% RETOUR BC</div>
            <div className="itemvalue">{Number(info[0]?.Defect_percent)} %</div>
            </div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className="insideitem">
          <div className="itemtitle">% RETOUR SQ</div>
            <div className="itemvalue">5.37%</div>
            </div></Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item><div className="insideitem">
          <div className="itemtitle">OBJECTIF SQ</div>
            <div className="itemvalue">1.54%</div>
            </div>
            </Item>
        </Grid>        
      </Grid>
    </Box>
  );
}
