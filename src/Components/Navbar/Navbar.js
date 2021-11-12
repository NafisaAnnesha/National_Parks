import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


// Navigation bar
const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="logo-container">
              
        <Link to="/" className="text-logo">National Park
                                               </Link>
            </div>
        </nav>
    );
};

export default Navbar;