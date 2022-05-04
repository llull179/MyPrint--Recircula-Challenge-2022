import React from 'react'
import {Box,Grid} from '@mui/material'
import premi from '../Img/Captura.PNG'

export default function MyPrint() {
  return (
   <Box>
     <Grid container direction ='column' justifyContent='center'>
       <Grid container alignItems='center' justifyContent='center' spacing = {10}>
          <Grid item>
            <img alt={'premi'} src={premi}/>
            <p><span>Cinema</span>: 200 GreenPoints</p>
          </Grid>
          <Grid item>
          <img alt={'premi'} src={premi}/>
          <p><span>Cinema</span>: 200 GreenPoints</p>
          </Grid>
          <Grid item >
          <img alt={'premi'} src={premi}/>
          <p><span>Cinema</span>: 200 GreenPoints</p>
          </Grid>
        </Grid>
       <Grid container alignItems='center' spacing = {10} justifyContent='center'>
          <Grid item>
          <img alt={'premi'} src={premi}/>
          <p><span>Cinema</span>: 200 GreenPoints</p>
          </Grid>
          <Grid item>
          <img alt={'premi'} src={premi}/>
          <p><span>Cinema</span>: 200 GreenPoints</p>
          </Grid>
          <Grid item>
          <img alt={'premi'} src={premi}/>
          <p><span>Cinema</span>: 200 GreenPoints</p>
          </Grid>
        </Grid>
       </Grid>
   </Box>
  )
}

