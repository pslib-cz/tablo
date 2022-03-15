import React from 'react'
import nav from "./Nav.css"

export default function Nav() {
    return (
        <nav className='nav'>
            <div className='nav__container'>
                <div className='nav__icon'>
                    <p>L4</p>
                </div>
                <ul className='nav__list'>
                    <li><a href='#creators'>CREATORS</a></li>
                    <li><a href='#gallery'>GALLERY</a></li>
                    <li><a href='#tablo'>TABLO</a></li>
                </ul>
            </div>
        </nav>
    )
}
