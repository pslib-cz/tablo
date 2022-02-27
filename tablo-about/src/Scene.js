import React from 'react'

export default function Scene({ offsetY }) {
    console.log(offsetY)
    return (
        <div className='scene'>{offsetY}
            <div>
                <img src='./imgs/netflix.png' />
            </div>
        </div>
    )
}
