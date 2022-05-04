import React from 'react'
import {TextField, Box, Grid, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Form(props) {
    
    const handleSubmit = (e) => {
        if(props.codi!=='1234') {
          props.setCodi('');
          props.setError(true);
          return;
        }
        
        props.setGreenPoints(props.greenPoints+500);
        props.setError(false);
        props.setRecompensa(true);
      }
  return (
    <Box > 
    <Grid alignItems='center' justifyContent='center' container spacing= {5} direction ='column'>
      <Grid  item>
      <h2>Introdueix el codi del tiquet!</h2>
      </Grid>
      <Grid item>
        <TextField value = {props.codi} onChange={(e)=>props.setCodi(e.target.value)} error={props.error} id='codi' placeholder='Codi...' label='Introdueix Codi'/>
        
      </Grid>
      <Grid item>
        <Button onClick={handleSubmit} theme ={props.theme} color="black" variant="outlined" endIcon={<SendIcon/>}>Bescanviar codi</Button>  
      </Grid>
    </Grid> 
  </Box>
  )
}
