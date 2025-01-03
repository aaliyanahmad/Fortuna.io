// src/components/TransactionForm.js
import React, { useState } from 'react';
import Button from './Button';

const TransactionForm = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement transaction logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                placeholder="Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                required 
 />
            <Button type="submit">Send Transaction</Button>
        </form>
    );
};

export default TransactionForm;