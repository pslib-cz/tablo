import React from 'react'
import CreatorCard from './CreatorCard'
import creators from "./creators.json"

export default function Scene({ offsetY }) {
    //console.log(offsetY)
    const percentage = (-150 + offsetY) / 100
    const color = `rgba(0, 0, 0, ${percentage})`
    return (
        <div className='scene__background' style={{ backgroundColor: color }}>
            <div className='scene'>
                <div className='scene__netflix' style={{ transform: `translateZ(${- 100 + offsetY}px) translateY(${- offsetY}px)` }}>
                    <img src='./imgs/netflix.png' />
                </div>
                {
                    creators.map((creator,index) => {
                        return <CreatorCard creator={creator} index={index} offsetY={offsetY} />
                    })
                }
            </div>
        </div>
    )
}
