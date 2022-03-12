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
                    <li><a href='#xd'>CREATORS</a></li>
                    <li><a href='#xd'>PHOTOS</a></li>
                </ul>
            </div>
        </nav>
    )
}
