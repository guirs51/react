import React from 'react'
import "./Botao.css"

function BotaoOragen(props) {
  return (
    <button className='orange-btn'>
        {props.texto}
    </button>
  )
}

export default BotaoOragen