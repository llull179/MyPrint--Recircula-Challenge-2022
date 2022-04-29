import React from 'react'
import { Grid, Button } from '@mui/material'

export default function Recompensa(props) {
  return (
    <div>
    <Grid alignItems='center' justifyContent='center' container spacing= {5} direction ='column'>
        <Grid item >
            <h1>Recompensa</h1>
        </Grid>
        <Grid  item>
            <h4>Enhorabona!</h4>
            <p> <span> Codi: </span> {props.codi}</p>
            <p>Has aconseguit estalviar <span>50</span> Kg de C02 !</p>
            <p>Has aconseguit <span>100</span> GreenPoihnts!</p>
        </Grid>
        <Grid item>
            <Button theme={props.theme} color="secondary" variant ="outlined">Bescanviar premis</Button>
            <Button theme={props.theme} color="secondary" variant ="outlined" onClick={() => props.setRecompensa(false)}>Tornar</Button>
        </Grid>
    </Grid>
      
      
    </div>
  )
}
