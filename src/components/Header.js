// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import Hamburger from './Hamburger';
const Header = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Define styles
    const styles = {
        header: {
            position: 'fixed', // Position the header as fixed
            top: '0', // Distance from the top
            left: '0', // Distance from the left
            display: 'flex', // Use flexbox to align items
            alignItems: 'center', // Center items vertically
            justifyContent: 'space-between', // Space items evenly
            cursor: 'pointer', // Change cursor to pointer for clickable logo
            background: 'transparent', // Semi-transparent background
            padding: '10px 20px', // Padding around the header
            borderRadius: '0', // No rounded corners
            boxShadow: '0 4px 5px rgba(0, 0, 0, 0.3)', // Subtle shadow
            zIndex: 1000, // Ensure it appears above other content
            width: '100%', // Ensure the header spans the full width
        },
        logo: {
            height: '90px', // Adjust the size as needed
            marginRight: '5px', // Space between logo and company name
        },
        companyName: {
            fontSize: '1.8rem',
            color: '#F2F5F7', // Light color for contrast
            fontWeight: '700', // Bold font weight
            fontFamily: 'Montserrat, sans-serif', // Use Montserrat font
            letterSpacing: '1px', // Slightly increased letter spacing
        },
        endButton: {
            marginLeft: 'auto', // Push the button to the right
            marginRight: '3%',
        }
    };

    return (
        <div style={styles.header} onClick={() => navigate('/')}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                    src="/favicon.ico" 
                    alt="Company Logo" 
                    style={styles.logo} 
                />
                <span style={styles.companyName}>Fortuna</span>
            </div>
            
            <div>
                {/* <Hamburger /> */}
            </div>
        </div>
    );
};

export default Header; // Corrected export statement