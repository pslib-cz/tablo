import React from 'react'

export default function Letter({ offsetY, letter }) {



    if (offsetY > 350)
        return <span>{letter}</span>

    function redirect() {

        let url

        if (letter === 'L')
            url = 'https://www.youtube.com/watch?v=hOYFwnqRnJo'
        if (letter === 'O')
            url = 'https://simekjegej.cz/'

        if (!url)
            return
        //redirect page
        window.location.href = url
    }

    return (
        <span onClick={redirect} style={{ transform: `translateY(${offsetY}px)` }}>{letter}</span>
    )
}
