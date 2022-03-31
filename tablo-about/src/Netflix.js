import React from 'react'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function Netflix({ mainRef, offsetY, easterEgg }) {

    const add = window.innerWidth > 700 ? 100 : 200

    function TabloBackground() {
        if (mainRef.current.clientHeight - window.innerHeight / 2 - add < offsetY) {
            const opacity = (1 - (mainRef.current.clientHeight - window.innerHeight / 2 - add) / offsetY) * 20
            return (
                <div style={{ "--opacity": opacity > 1 ? 1 : opacity }} className='netflix__background'>

                </div>
            )
        }
        return null
    }

    return (
        <>
            <TabloBackground />
            <div className='netflix'>
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    key="galerie_2"
                >
                    <a href={easterEgg ? easterEgg : require("./imgs/tablo_final.jpg")}>
                        <figure><img id='tablo' src={easterEgg ? easterEgg : require("./imgs/tablo_final_min.jpg")} alt="Tablo L4 2022" /></figure>
                    </a>
                </LightGallery>
            </div>
        </>
    )
}
