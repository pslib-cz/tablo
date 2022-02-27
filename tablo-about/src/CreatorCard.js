import React from 'react'

export default function CreatorCard({ creator, offsetY, index }) {
    //console.log(creator)
    const offset = 300
    const cardOffset = index * 500
    const positionZ = offsetY - offset - cardOffset
    const positionY = -window.innerHeight / 2 + (offsetY - offset-cardOffset)
    const opacity = (positionZ + 150) / 100
    return (
        <div style={{ opacity, transform: `translateZ(${positionZ}px) translateY(${positionY}px)` }} className='creator__card' > {creator.name}</div>
    )
}
