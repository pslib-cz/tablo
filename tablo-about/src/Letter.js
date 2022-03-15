import React from 'react'

export default function Letter({ offsetY, letter }) {

    if (offsetY > 350)
        return <span>{letter}</span>

    return (
        <span style={{ transform: `translateY(${offsetY}px)` }}>{letter}</span>
    )
}
