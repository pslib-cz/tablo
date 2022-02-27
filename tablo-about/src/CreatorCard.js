import React from 'react'

export default function CreatorCard({ creator, offsetY, index }) {
    console.log(creator)
    const cardOffset = index * 500
    const positionZ = offsetY - 300 - cardOffset
    const opacity = (positionZ + 150) / 100
    return (
        <div style={{ opacity, transform: `translateZ(${positionZ}px) translateY(${-window.innerHeight / 2}px)` }} className='creator__card' > {creator.name}</div>
    )
}
