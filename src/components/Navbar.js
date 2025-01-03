// src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ConnectWallet from './ConnectWallet'; // Ensure you have the ConnectWallet component
import './Navbar.css'; // Import the navbar styles

const Navbar = () => {
    const location = useLocation(); // Get the current location
    const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

    // Function to determine if the link is active
    const isActive = (path) => location.pathname === path;

    // Toggle the menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li className="menu-item">
                    <Link to="/" className={isActive('/') ? 'active' : ''}>
                        <div className="gooey-effect"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-9h4v2h-4zm0-4h4v2h-4zm0 8h4v2h-4z"/>
                        </svg>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/pages/Signin.js" className={isActive('/pages/Signin.js') ? 'active' : ''}>
                        <div className="gooey-effect"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-2-9h4v2h-4zm0-4h4v2h-4zm0 8h4v2h-4z"/>
                        </svg>
                        <span>Login</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;