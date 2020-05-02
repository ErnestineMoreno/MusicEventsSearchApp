import React from 'react';
import './HamburgerMenu.css';
import { NavLink } from "react-router-dom";

const hamburgerMenu = props => {
    let hamburgerClasses = "hamburger";
    if (props.show) {
        hamburgerClasses = 'hamburger open';
    }

    return (
        <nav className={hamburgerClasses}>
        <ul>
            <li><NavLink to="/ArtistSearch">Search By Artist</NavLink></li>
            <li><NavLink to="/LocationSearch">Search By City</NavLink></li>
        </ul>
        </nav>
    
    );
    
};

export default hamburgerMenu;
