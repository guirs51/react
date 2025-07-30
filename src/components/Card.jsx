import React from 'react'
import './Card.css'
import { FaUmbrellaBeach } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import Botao from './botao';
import { FaDollarSign } from "react-icons/fa6";

function Card(props) {
  return (
    <div className='cartao'>
      <div className='cartao-items'>

        <img src={props.img} alt="" className='img-cartao' />
        <h1 className='h1-cartao'>{props.texto}</h1>
        <p className='p-cartao'> {props.p}</p>
        <div className='itens-row'>
          <FaRegCalendarAlt />
          <p className='p-items'>12 Jun - 20 jun</p>
          <span className='barra'>|</span>
          <CiStar />
          <p className='p-items'>5.0 Rating</p>
          <span className='barra'>|</span>
          <FaUmbrellaBeach />
          <p className='p-items'>Beach</p>
        </div>
        <hr className='hr-cartao' />
        <div className='row-bottom-p'>
          <div>
            <p className='ps sp'><FaDollarSign />{props.price}</p>
            <p className='ps'>{props.day} day package</p>
          </div>
          <div className='botao-Book'>
            <Botao texto='Book now'></Botao>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card