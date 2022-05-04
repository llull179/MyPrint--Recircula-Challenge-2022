import { useState } from 'react';
import Form from './Form';
import Recompensa from './Recompensa';

const IntrodCodi =(props) => {
  
  const [error, setError] = useState(false);
  const [codi,setCodi] = useState('');
  const [recompensa, setRecompensa] = useState(false);

  return (
   <div>
     {recompensa?
      <Recompensa setCodi={setCodi} theme={props.theme} setRecompensa={setRecompensa} setPage={props.setPage} codi={codi}/> :
      <Form greenPoints={props.greenPoints} setGreenPoints={props.setGreenPoints} codi = {codi} setCodi={setCodi} setError={setError} setRecompensa={setRecompensa} error={error} theme={props.theme}/>}
   </div>
  )
}

export default IntrodCodi
