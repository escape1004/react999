import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header id="header">
            <div className="header__port"><Link to="/portfolio">Portfolio</Link></div>
            <div className="header__logo"><Link to="/">webstroyboy</Link></div>
            <nav className="header__menu">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/reference">Reference</Link></li>
                    <li><Link to="/youtube">Youtube</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <a href="/" className="ham">
                    <span className="sr-only">menu</span>
                </a>
            </nav>
        </header>
    )
}

export default Header;