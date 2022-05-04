import React from 'react'

const Missatge = (props) => {
  return (
    <div className={`alerta ${props.tipo}`}>
      {props.msg}
    </div>
  )
}

export default Missatge
