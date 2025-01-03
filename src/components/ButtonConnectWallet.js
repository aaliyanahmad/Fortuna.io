// src/components/ButtonConnectWallet.js
import React from 'react';

const ButtonConnectWallet = ({ children, onClick, type = 'button' }) => {
    // Define button styles
    const buttonStyle = {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '1rem',
        background: 'linear-gradient(45deg, #9945FF, #27E6A4)',
        color: '#F2F5F7',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
    };

    const buttonHoverStyle = {
        transform: 'scale(1.1)',
        boxShadow: '0 4px 10px rgba(39, 230, 164, 0.5)',
    };

    const buttonClickStyle = {
        transform: 'scale(0.95)', // Scale down on click
        boxShadow: '0 2px 5px rgba(39, 230, 164, 0.5)', // Reduce shadow on click
    };

    // State to manage hover and click effects
    const [isHovered, setIsHovered] = React.useState(false);
    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = (e) => {
        setIsClicked(true);
        onClick(e);
        // Reset the click effect after a short duration
        setTimeout(() => {
            setIsClicked(false);
        }, 200); // Duration should match the CSS transition duration
    };

    return (
        <button
            style={{
                ...buttonStyle,
                ...(isHovered ? buttonHoverStyle : {}),
                ...(isClicked ? buttonClickStyle : {}),
            }}
            onClick={handleClick}
            type={type}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
};

export default ButtonConnectWallet;

// Usage Example:
// <ButtonConnectWallet onClick={handleConnect}>Connect Wallet</ButtonConnectWallet>