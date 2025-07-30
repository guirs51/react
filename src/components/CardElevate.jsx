import React from 'react'
import './CardElevate.css'

function CardElevate(props) {
    return (
        <div className='card-body'>
            <div className='card-colum'>
                <div className='card-row'>
                    <span className='ciclo-elevate'>{props.img}</span>
                    <p className='p-numb'>{props.num}</p>
                </div>
                <div className='elevate-p-h1'>
                    <h1>{props.title}</h1>
                    <p className='elevate-p2'>The travel package includes <br /> lending services for diving and <br /> snorkeling equipment</p>
                </div>
            </div>
        </div>
    )
}

export default CardElevate