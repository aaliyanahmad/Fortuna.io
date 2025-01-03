// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importing the Navbar component
import Home from './pages/Home'; // Importing the Home page
import Signup from './pages/Signup'; // Importing the Signup page
import Signin from './pages/Signin'; // Importing the Signin page
import Profile from './pages/Profile'; // Importing the Profile page
import Header from './components/Header'; // Importing the Header component
import Viewport from './Viewport'; // Importing the Viewport styles

const App = () => {
    const styles = Viewport(); // Get the styles from Viewport

    return (
        <Router>
            <div style={styles.view}> {/* Apply the app styles */}
                <Header style={styles.appHeader} /> {/* Pass header styles */}
                <Navbar /> {/*Render the Navbar with the hamburger menu and connect wallet button*/}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home route */}
                    <Route path="/pages/Signin.js" element={<Signup />} /> {/* Signup route */}
                    <Route path="/signin" element={<Signin />} /> {/* Signin route */}
                    <Route path="/profile" element={<Profile />} /> {/* Profile route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;