import React from 'react';
import './HamburgerMenu.css';

const hamburgerMenu = props => {
    let hamburgerClasses = "hamburger";
    if (props.show) {
        hamburgerClasses = 'hamburger open';
    }

    return (
        <nav className={hamburgerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/ArtistList">Search By Artist</a></li>
            <li><a href="/LocationList">Search By City</a></li>
        </ul>
        </nav>
    
    );
    
};

export default hamburgerMenu;
