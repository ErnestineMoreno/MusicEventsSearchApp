import React from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import HamburgerToggleButton from '../HamburgerMenu/HamburgerToggleButton'
import './Navbar.css'
// eslint-disable-next-line
import ArtistList from '../ArtistList';

const navbar = props => (
  <header className='navbar'>
    <nav className='navbar-menu'>
      <div className='navbarToggle'>
        {/* from app.js */}
        <HamburgerToggleButton click={props.hamburgerClickHandler} />
      </div>
      <Router>
        <div className='navbar-logo'><a href='/'> bliss ♪ </a></div>
        <div className='logo-spacing' />
        <div className='navbar-search-items'>
          <p><img src='powered-by-songkick-pink.png' alt='Songkick copyright logo' /></p>
        </div>
      </Router>
    </nav>
  </header>
)

export default navbar
