import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <div id="div1"><NavLink exact to="/" style={{textDecoration: 'none'}} id="navLink">Home</NavLink></div>
                        <div id="div2"><NavLink to="/favs" style={{textDecoration: 'none'}} id="navLink">My favourites</NavLink></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}