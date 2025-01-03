// src/context/WalletContext.js
import React, { createContext, useState } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [wallet, setWallet] = useState(null);
    const connection = new Connection(clusterApiUrl('devnet'));

    const connectWallet = async () => {
        const adapter = new PhantomWalletAdapter();
        try {
            await adapter.connect();
            setWallet(adapter);
        } catch (error) {
            console.error("Wallet connection failed:", error);
        }
    };

    return (
        <WalletContext.Provider value={{ wallet, connectWallet }}>
            {children}
        </WalletContext.Provider>
    );
};