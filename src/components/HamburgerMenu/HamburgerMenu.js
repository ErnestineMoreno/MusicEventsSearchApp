import React from 'react'
import './HamburgerMenu.css'

const hamburgerMenu = props => {
let hamburgerClasses = props.show ? 'hamburger open' : 'hamburger';

  return (
    <nav className={hamburgerClasses}>
      <ul>
        <li><img src='powered-by-songkick-pink.png' alt='Songkick copyright logo' /></li>
        <li><a href='/'>Home</a></li>
        <li><a href='/ArtistList'>Search By Artist</a></li>
        <li><a href='/LocationList'>Search By City</a></li>
      </ul>
    </nav>

  )
}

export default hamburgerMenu
