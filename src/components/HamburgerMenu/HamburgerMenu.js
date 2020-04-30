import React from 'react';
import './HamburgerMenu.css';

const hamburgerMenu = props => (
    <nav className="hamburger">
        <ul>
            <li><a href="/">Search By Artist</a></li>
            <li><a href="/">Search By City</a></li>
        </ul>
    </nav>
);

export default hamburgerMenu;
