import React from 'react'

export default function Letter({ offsetY, letter }) {

    if (offsetY > 300)
        return null

    return (
        <span style={{ transform: `translateY(${offsetY}px)` }}>{letter}</span>
    )
}
