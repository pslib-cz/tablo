import React, { useEffect, useRef, useState } from 'react'
import vojtik from './imgs/vojtik1.jpg'
import lukas from './imgs/lukas.jpg'
import michal from './imgs/michal.jpg'
//import { useState, useRef } from 'react'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { images } from "./gallery"
import GalleryImage from "./GalleryImage"
import Letter from './Letter';
import Netflix from './Netflix';

export default function Scene({ offsetY, setMainRef }) {
    //console.log(offsetY)
    const instagram = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
    const facebook = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
    const github = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
    const wave1 = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    const linkedin = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
    const mainRef = useRef(0)
    const [easterEgg, setEasterEgg] = useState(false)
    useEffect(() => {
        setMainRef(
            mainRef
        )
    }, [])
    //Doufám že tohle nikdy neuvidí Každá, jinak mě zabije
    return (
        <>
            <main className='metrix' ref={mainRef} id='scene'>
                <div className='scene'>
                    <div className='scene__netflix'>
                        <h1 className=''>
                            <Letter setEasterEgg={setEasterEgg} easterEgg={easterEgg} offsetY={.4 * offsetY} key={0} letter={"L"} />
                            <Letter setEasterEgg={setEasterEgg} easterEgg={easterEgg} offsetY={.7 * offsetY} key={1} letter={"Y"} />
                            <Letter setEasterEgg={setEasterEgg} easterEgg={easterEgg} offsetY={.5 * offsetY} key={2} letter={"C"} />
                            <Letter setEasterEgg={setEasterEgg} easterEgg={easterEgg} offsetY={.6 * offsetY} key={3} letter={"K"} />
                            <Letter setEasterEgg={setEasterEgg} easterEgg={easterEgg} offsetY={.3 * offsetY} key={4} letter={"O"} />
                        </h1>
                    </div>
                </div>
                <section id='creators' className='content__container'>
                    <h2>Creators</h2>
                    <div>
                        <div className='creator__container'>
                            <div style={{ margin: "1rem" }}>
                                <figure>
                                    <img src={vojtik} />
                                </figure>
                                <h3>Vojtěch Suchánek</h3>
                                <div className='creator__links'>
                                    <a rel='noopener' href='https://www.instagram.com/vojtik_suchanek' target='_blank'>{instagram}</a>
                                    <a rel='noopener' href='https://www.facebook.com/profile.php?id=100011387843027' target='_blank'>{facebook}</a>
                                    <a rel='noopener' href='https://github.com/elecraft2002' target='_blank'>{github}</a>
                                </div>
                                <p>
                                    Jsem Vojtěch Suchánek a chodím na Lycko. Grafice se věnuji už od základky, baví mě streamování, hraní her 🎮, cvičení, motorky, editování videí a focení.
                                </p>
                            </div>
                        </div>
                        <div className='creator__container'>
                            <div style={{ margin: "1rem" }}>
                                <figure>
                                    <img src={lukas} />
                                </figure>
                                <h3>Lukáš Maršík</h3>
                                <div className='creator__links'>
                                    <a rel='noopener' href='https://www.instagram.com/lukas_marsik/' target='_blank'>{instagram}</a>
                                    <a rel='noopener' href='https://www.facebook.com/luky.marsik' target='_blank'>{facebook}</a>
                                    <a rel='noopener' href='https://www.linkedin.com/in/luk%C3%A1%C5%A1-mar%C5%A1%C3%ADk-260224221' target='_blank'>{linkedin}</a>
                                </div>
                                <p>Jmenuju se Lukáš Maršík. Tvořím grafiku a různé animace. Ve volném čase rád sportuju nebo sleduju Netflix.</p>
                            </div>
                        </div>
                        <div className='creator__container'>
                            <div style={{ margin: "1rem" }}>
                                <figure>
                                    <img src={michal} />
                                </figure>
                                <h3>Michal Höfer</h3>
                                <div className='creator__links'>
                                    <a rel='noopener' href='https://www.instagram.com/majkhoff' target='_blank'>{instagram}</a>
                                </div>
                                <p>Doufám, že je v tomto table krom našich obličejů vidět i ta práce a snaha do něho "vyexportovaná" - Michal</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='gallery' className='gallery '>
                    <h2>Gallery</h2>
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        key="galerie_1"
                    >

                        {images.map((image, index) => {
                            return <GalleryImage key={index} url={image.url} name={image.name} urlMin={image.urlMin} />
                        })}
                    </LightGallery>
                </section>
            </main >
            <Netflix easterEgg={easterEgg} mainRef={mainRef} offsetY={offsetY} />
        </>
    )
}
