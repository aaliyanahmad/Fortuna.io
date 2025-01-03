// src/components/ConnectWallet.js
import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import Button from './ButtonConnectWallet'; // Ensure Button is imported

const ConnectWallet = () => {
    const { wallet, connectWallet } = useContext(WalletContext);

    return (
        <div>
            {wallet ? (
                <p>Connected: {wallet.publicKey.toString()}</p>
            ) : (
                <Button onClick={connectWallet}>Connect Wallet</Button>
            )}
        </div>
    );
};

export default ConnectWallet;