import {Tabs,Tab, Box} from '@mui/material'


export default function Header(props) {
  const handleChange=(e,newvalue) => {
    props.setPage(newvalue);
  }


  return (
    <Box>
      <Tabs theme={props.theme} indicatorColor='primary' onChange={handleChange} value={props.page} centered>
        <Tab value={1} label="Introduir Codi"/>
        <Tab value={2} label="Premis"/>
        <Tab value={3} label="Que es myPrint?"/>
      </Tabs>
     <h2 className='titol'>Green Points: {props.greenPoints}</h2>
    </Box>
  )
}
