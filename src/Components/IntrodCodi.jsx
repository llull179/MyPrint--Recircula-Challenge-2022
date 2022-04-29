import { useState } from 'react';
import Form from './Form';
import Recompensa from './Recompensa';

const IntrodCodi =(props) => {
  const [recompensa, setRecompensa] = useState(false);
  const [error, setError] = useState(false);
  const [codi,setCodi] = useState('');
  

  return (
   <div>
     {recompensa?
      <Recompensa theme={props.theme} setRecompensa={setRecompensa} codi={codi}/> :
      <Form codi = {codi} setCodi={setCodi} setError={setError} setRecompensa={setRecompensa} error={error} theme={props.theme}/>}
   </div>
  )
}

export default IntrodCodi
