import React, { useState } from 'react';

const Authentication = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // Implement login logic here
    };

    const handleRegister = () => {
        // Implement registration logic here
    };

    const handleLogout = () => {
        // Implement logout logic here
    };

    return (
        <div>
            <h1>Authentication</h1>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Authentication;