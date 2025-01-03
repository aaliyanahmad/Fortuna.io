// src/pages/Home.js
import React from 'react';
import Header from '../components/Header'; // Import the Header component
import ConnectWallet from '../components/ConnectWallet';
const Home = () => {
    // Define styles
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            fontFamily: 'Montserrat, sans-serif', // Use Montserrat font for the main content
            background: 'linear-gradient(135deg, #131A2A, #1E2B47)', // Background gradient
            color: '#F2F5F7', // Light text color
            padding: '20px', // Padding around the container
        },
        title: {
            fontSize: '3.5rem',
            background: 'linear-gradient(45deg, #27E6A4, #9945FF)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            fontWeight: '600', // Semi-bold font weight
            marginBottom: '20px', // Space below the title
        },
        paragraph: {
            fontSize: '1.5rem',
            maxWidth: '600px',
            marginTop: '20px',
            color: '#B7C8E6',
            lineHeight: '1.6', // Increased line height for readability
        },
        button: {
            marginTop: '30px',
            padding: '12px 24px',
            fontSize: '1.2rem',
            background: 'linear-gradient(45deg, #9945FF, #27E6A4)',
            color: '#F2F5F7',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'transform 0.2 s',
            fontFamily: 'Montserrat, sans-serif', // Use Montserrat font for the button
        },
        buttonHover: {
            transform: 'scale(1.1)',
            boxShadow: '0 4px 10px rgba(39, 230, 164, 0.5)',
        },
    };

    // State to manage hover effect
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div style={styles.container}>
            <Header /> {/* Include the Header component */}
            <h1 style={styles.title}>Welcome to Fortuna</h1>
            <p style={styles.paragraph}>
                Discard your valueless tokens (NFTs, CNFTs, etc.) into the pool of possibilities and embrace the future of digital assets.
            </p>
            <ConnectWallet />
        </div>
    );
};

export default Home;