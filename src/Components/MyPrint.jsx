import React from 'react'
import Logo from '../Img/Logo.png'
import {Box,Grid} from '@mui/material'

export default function MyPrint() {
  return (
    <Box> 
       <Grid alignItems='center' justifyContent='center' container spacing= {5} direction ='column'>
         <Grid maxWidth={'lg'}>
           <p>
           <span>MyPrint</span> arriba per capgirar el model de sistema alimentari. Per primera vegada, el comprador
            veurà com estalviar <span>CO2</span> al planeta es tradueix en recompenses directes: metro, bicing, cultura
             i molt més… Com funciona? En comprar producte local i ecològic, el consumidor obtindrà de la nostra
             WebApp  quant <span>CO2</span> ha estalviat a l’atmosfera i una sèrie de Green Points que li permetran accedir
               a les recompenses. A més a més, amb MyPrint guanya el consumidor, el productor i la societat en 
               conjunt, que avança en la seva lluita contra el canvi climàtic perquè amb <span>MyPrint</span> tots podem deixar la nostra petjada!
           </p>
         </Grid>
        <Grid item>
          <img alt ="Logo" src={Logo}/>
        </Grid>
        <Grid item>
         <i>Guillem Palmés Batlle, Lluís Llull Riera, Carlos Saura Besa, Maria Bareche Baqués i Javier Gallardo Sáenz</i>
        </Grid>
      </Grid>
    </Box>
  )
}

