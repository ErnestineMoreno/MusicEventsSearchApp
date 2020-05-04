import React from 'react'
import './HamburgerMenu.css'

// Hou comment: nice job using a functional componennt here!
const hamburgerMenu = (props) => {
  let hamburgerClasses = 'hamburger'
  if (props.show) {
    hamburgerClasses = 'hamburger open'
  }
  // Hou comment: lines 6-9 can be refactored:
  // let hamburgerClasses = props.show ? 'hamburger open' : 'hamburger';
  return (
    <nav className={hamburgerClasses}>
      <ul>
        <li>
          <img
            src="powered-by-songkick-pink.png"
            alt="Songkick copyright logo"
          />
        </li>
        <li>
          {/* Hou comment: using regular anchor tags here will trigger a page refresh. consider using the <Link /> component from react-router for all the links in your hamburber menu */}
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/ArtistList">Search By Artist</a>
        </li>
        <li>
          <a href="/LocationList">Search By City</a>
        </li>
      </ul>
    </nav>
  )
}

export default hamburgerMenu
