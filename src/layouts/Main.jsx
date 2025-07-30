import React from 'react'
import './main.css';
import { BiSolidMouseAlt } from "react-icons/bi";
import Botao from '../components/botao';
import Card from '../components/Card';
import CardElevate from '../components/CardElevate';
import { FaCamera } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Main() {
    return (
        <main>
            <section className='trasparencia' id='inicio'>
                <div className='banner-texto'>



                    <h1 className='title manrope'>Less Hassle, <br /> More Fun.</h1>
                    <p className='manrope'>
                        Discover a new way to travel that’s fun, easy, and stress-free-Turn <br />your dream destinations into unforgettable realities
                    </p>
                </div>
                <div className='div-transparente'>
                    <div className='card'>
                        <div className='img-video'>
                            <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/shifaaz-shamoon-_STLYdogRF4.webp" alt="" className='img-video' />
                            <span className='span-play'><img src="https://icon-library.com/images/play-button-icon-white/play-button-icon-white-8.jpg" alt="" className='img-play' /></span>
                        </div>
                        <div className='img-texto'>
                            <div className='img-perfil'>
                                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar2-1.png" alt="" />
                                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar3-1.png" alt="" className='dois' />
                                <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/oliver-ragfelt-khV4fTy6-D8-unsplash-1.png" alt="" className='tres' />
                                <span><img src="https://cdn-icons-png.flaticon.com/512/7794/7794550.png" alt="" /></span>
                            </div>
                            <p className='enjoy'>
                                12K+ Membership <br /> enjoy our facility
                            </p>
                        </div>
                    </div>
                </div>
                <div className='scroll'>
                    <BiSolidMouseAlt />
                    <p>Scroll Now</p>
                </div>
            </section>

            <section id='destination'>
                <div className='destination-botao'>
                    <h1>Recommended Destination</h1>
                    <Botao texto='View More'></Botao>
                </div>
                <div className='cartoes'>
                    <Card texto='Caspian Sea Beach, Aktau' p='A Unique Seaside Escape in Central Asia' img='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp' day='9' price='1,580'></Card>
                    <Card texto='Pink Beach, Komodo Island' p='A Rare Natural Wonder with Blush-Toned Sand' img='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/matheen-faiz-OcrTk7qXcdM.webp' day='7' price='2,550'></Card>
                    <Card texto='Tanjung Bira, South Sulawesi' p='White Sands and Turquoise Waters Away from the Crowds' img='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/rayyu-maldives-Nbu3v_UDg6w.webp' day='5' price='3,750'></Card>
                </div>
            </section>

            <section id='elevate'>
                <div className='elevate-colum'>
                    <div className='elevate-texto'>
                        <h1>Elevate Your Epic <br /> Adventures</h1>
                        <p className='elevate-p'>We are a travel agency that specializes <br /> in customizing trips according to your <br />preferences, needs, and desires</p>
                    </div>
                    <hr className='elevate-hr' />

                    <div className='elevate-cartoes-img'>
                        <div className='elevate-cartoes'>
                            <CardElevate num='01' img={<FaSun />} title='Explore the Nature'></CardElevate>
                            <CardElevate num='02' img={<IoPersonSharp />}  title='Tour Guide'></CardElevate>
                            <CardElevate num='03' img={<FaCamera />} title='Hidden Gems'></CardElevate>
                            <CardElevate num='04' img={<MdOutlineStarPurple500 />} title='Simple Booking'></CardElevate>
                        </div>
                        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/exotic-tropical-seascape-with-palm-tree-jetty-pie-2024-10-18-08-01-58-utc.webp" alt="" />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Main