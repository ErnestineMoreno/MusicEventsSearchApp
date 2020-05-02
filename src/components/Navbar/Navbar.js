import React from 'react';
// eslint-disable-next-line 
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import HamburgerToggleButton from '../HamburgerMenu/HamburgerToggleButton';
import './Navbar.css';
// eslint-disable-next-line
import ArtistList from '../ArtistList';


const navbar = props => (
<header className="navbar">       
<nav className="navbar-menu">           
<div className="navbarToggle">
{/* from app.js */}
<HamburgerToggleButton click={props.hamburgerClickHandler} />
            </div>
<Router>
<div className="navbar-logo"><Link to="/">bliss</Link></div>
<div className="logo-spacing"></div>
<div className="navbar-search-items">
<ul>
<li><Link to='/ArtistSearch'>♪ search by Artist</Link></li>
<li><Link to='/LocationSearch'>♪ search by City</Link></li>
</ul>
</div>  
</Router>         
        </nav>
         
</header>
);

export default navbar;