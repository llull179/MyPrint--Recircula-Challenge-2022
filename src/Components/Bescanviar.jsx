import React from 'react'
import {Box,Grid} from '@mui/material'
import bici from '../Img/bici.png'
import bus  from '../Img/bus.png'
import cine from '../Img/cine.png'
import concert from '../Img/concert.png'
import teatre from '../Img/teatre.png'
import tren from '../Img/tren_bo.png'
import { useState } from 'react'
import Missatge from './Missatge'

export default function Bescanviar(props) {

  const[msg, setMsg] = useState("");
  const[container,setContainer] =useState(false)
  const[tipus,setTipus] =useState('')

  const handleClick = () => {
    if(props.greenPoints >=200) {
      props.setGreenPoints(props.greenPoints-200);
      setMsg("Has bescanviat la recompensa!")
      setTipus('succes')
    }
    else {
      setMsg("Punts insuficients!")
      setTipus('error')
    }
    setContainer(true);
    ocultarModal()
  }

  const ocultarModal = () => {
    console.log("ocult")
        setTimeout(()=>{
            setContainer(false)
        },2000)
  
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {container ? <Missatge msg={msg} tipus={tipus}/>:null}
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <img onClick={handleClick}  className='premi' alt={'concert'} src={concert}/>
            <p className='textPremi'><span>Concert</span>: 200 GreenPoints</p>
        </Grid>
        <Grid item xs={4}>
        <img onClick={handleClick} className='premi' alt={'cine'} src={cine}/>
            <p className='textPremi'><span>Cinema</span>: 200 GreenPoints</p>
        </Grid>
        <Grid item xs={4}>
          <img onClick={handleClick} className='premi' alt={'bici'} src={bici}/>
          <p className='textPremi'><span>Bicing</span>: 200 GreenPoints</p>
        </Grid>
        <Grid item xs={4}>
            <img onClick={handleClick} className='premi' alt={'bus'} src={bus}/>
            <p className='textPremi'><span>Cinema</span>: 200 GreenPoints</p>
        </Grid>
        <Grid item xs={4}>
        <img onClick={handleClick} className='premi' alt={'tren'} src={tren}/>
            <p className='textPremi'><span>Tren</span>: 200 GreenPoints</p>
        </Grid>
        <Grid item xs={4}>
          <img onClick={handleClick} className='premi' alt={'teatre'} src={teatre}/>
            <p className='textPremi'><span>Teatre</span>: 200 GreenPoints</p>
        </Grid>
      </Grid>
    </Box>
  )
}

