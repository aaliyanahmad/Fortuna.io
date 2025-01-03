// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional for performance metrics
import { WalletProvider } from './context/WalletContext'; // Importing the WalletProvider

// Creating a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped in WalletProvider
root.render(
    <React.StrictMode>
        <WalletProvider>
            <App />
        </WalletProvider>
    </React.StrictMode>
);

// Optional: Measure performance
reportWebVitals();