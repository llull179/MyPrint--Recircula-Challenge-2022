import React from 'react'
import { Grid, Button, Stack } from '@mui/material'

export default function Recompensa(props) {

  const handleTornar =() =>{
    props.setRecompensa(false)
    props.setCodi('');
  }

  return (
    <div>
    <Grid alignItems='center' justifyContent='center' container spacing= {5} direction ='column'>
        <Grid item >
            <h1>Recompensa</h1>
        </Grid>
        <Grid  item>
            <h4>Enhorabona!</h4>
            <p> <span> Codi: </span> {props.codi}</p>
            <p>Has aconseguit estalviar <span>50</span> g de C02 !</p>
            <p>Has aconseguit <span>500</span> GreenPoihnts!</p>
        </Grid>
        <Grid item>
          <Grid item></Grid>
          <Stack direction="row" spacing={2}>
            <Button theme={props.theme} color="secondary" variant ="outlined" onClick={()=>props.setPage(2)}>Bescanviar premis</Button>
            <Button theme={props.theme} color="secondary" variant ="outlined" onClick={handleTornar}>Tornar</Button>
          </Stack>
            
        </Grid>
    </Grid>
      
      
    </div>
  )
}
