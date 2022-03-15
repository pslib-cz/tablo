import React, { useEffect, useState } from 'react'
import background from "./Background.css"

export default function Background({ offsetY, main }) {
    //Je to píčovina ale nemám na to čas to dělat líp a optimálněji
    useEffect(() => {
        console.log("loading")
    }, [])
    console.log("xd")
    function CircleF(){

    }

    return (
        <div className='background'>
            <svg xmlns="http://www.w3.org/2000/svg" width={main.current.clientWidth} height={main.current.clientHeight} viewBox="0 0 2327 1597">
                <g id="Group_5" data-name="Group 5">
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="360" cy="360" r="360" transform="translate(-245 -35)" fill="#ff4040" />
                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="360" cy="360" r="360" transform="translate(1362 -157)" fill="#4073ff" />
                    <circle id="Ellipse_3" data-name="Ellipse 3" cx="360" cy="360" r="360" transform="translate(1263 720)" fill="#ff7440" />
                </g>
            </svg>

        </div>
    )
}
