import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthForm from '../components/forms/AuthForm';

const Login = () => {
    const [error, setError] = useState('');
    const { login } = useAuth();
    const history = useHistory();

    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            history.push('/dashboard');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <AuthForm onSubmit={handleLogin} />
        </div>
    );
};

export default Login;