import React from 'react';
import {Link,NavLink} from "react-router-dom";
import logo from './aac.png';

const Nav = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/aac" className="brand-logo"><img src={logo} id="logo" alt="logo"/>AAC</Link>
                <ul className="right">
                    <li><NavLink to="/aac">Home</NavLink></li>
                    <li><NavLink to="/history">History</NavLink></li>
                    <li><NavLink to="/compression">Compression</NavLink></li>
                    <li><NavLink to="/similar">Similar Formats</NavLink></li>
                </ul>
            </div>
        </nav>
    )

}

export default Nav;