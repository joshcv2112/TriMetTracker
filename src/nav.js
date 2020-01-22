import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'black'
    };

    return (
        <nav >
            <img src={require('./trimet.png')} alt={'TriMet Logo'} height={50}/>
            <ul className="nav-links">
                <Link style={navStyle} to='transit_routes'><li>Routes</li></Link>
                <Link style={navStyle} to='/alerts'><li>Alerts</li></Link>
            </ul>
        </nav>
    );
}

export default Nav; 