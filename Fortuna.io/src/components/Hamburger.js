// src/components/Hamburger.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hamburger.css'; // Import the CSS file
import Home from '../pages/Home'; // Import the Home page
import Signup from '../pages/Signup'; // Import the Signup page
import Signin from '../pages/Signin'; // Import the Signin page
import Profile from '../pages/Profile'; // Import the Profile page

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
            {isOpen && (
                <motion.ul
                    className="menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <li>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/pages/Signin.js" onClick={toggleMenu}>Login</Link>
                    </li>
                    <li>
                        <Link to="/profile" onClick={toggleMenu}>Profile</Link>
                    </li>
                </motion.ul>
            )}
        </div>
    );
};

export default Hamburger;