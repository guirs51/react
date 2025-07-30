import React from 'react'
import './header.css'
import Botao from '../components/botao'
import BotaoOragen from '../components/BotaoOragen'
import { SlArrowDown } from "react-icons/sl";

function Hearder() {

    const links = document.getElementById('link');
    const passar = () => {
            links.classList.remove('none') 
    }

    const voltar = () => {
        if (!links.classList.contains('none')) {
            links.classList.add('none')
        }
    }

    return (
        <header className='header'>
            <nav>
                <a href="#" className='home'>Home</a>
                <a href="#" className='link' onMouseEnter={passar}>Pages <SlArrowDown /></a>
                <a href="#">Package</a>
                <a href="#">Destination</a>
            </nav>
            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="logo" className='logo' />
            <div className='botoes'>
                <Botao texto="Blog" />
                <BotaoOragen texto="Contact" />
            </div>


            <div className='links none' id='link' onMouseLeave={voltar}>
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Single Destination</a>
                <a href="">Testimonials</a>
                <a href="">Contact</a>
                <a href="">Blog</a>
                <a href="">Post</a>
            </div>
        </header>
    )
}

export default Hearder