import React from 'react'
import { easterEggs } from './easterEggs'
import { songs } from './songs'

export default function Letter({ offsetY, letter, setEasterEgg, easterEgg }) {



    if (offsetY > 350)
        return <span>{letter}</span>

    function redirect() {

        let url

        if (letter === 'L')
            url = 'https://www.youtube.com/watch?v=hOYFwnqRnJo'
        if (letter === 'O')
            url = 'https://simekjegej.cz/'
        if (letter === 'K') {
            const easterEggPhoto = easterEggs[Math.floor(Math.random() * easterEggs.length)]

            setEasterEgg(easterEggPhoto)
            if (easterEgg)
                return
            new Audio(songs[Math.floor(Math.random() * songs.length)]).play()
        }

        if (!url)
            return
        //redirect page
        window.location.href = url
    }

    return (
        <span onClick={redirect} style={{ transform: `translateY(${offsetY}px)` }}>{letter}</span>
    )
}
