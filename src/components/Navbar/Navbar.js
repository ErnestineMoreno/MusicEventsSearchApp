import React from 'react';
import HamburgerToggleButton from '../HamburgerMenu/HamburgerToggleButton';
import './Navbar.css';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar-menu">
            <div>
                <HamburgerToggleButton />
            </div>
            <div className="navbar-logo"><a href="/">BLISS</a></div>

            <div className="logo-spacing">
</div>
            <div className="navbar-search-items">
                <ul>
                    <li><a href="/">Search By Artist</a></li>
                      <li><a href="/">Search By City</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;