import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Check for both username and password
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        setLoading(true); // Set loading to true

        try {
            // Send login data to backend
            const response = await fetch('http://localhost:5000/api/login', { // Ensure this matches your backend port
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.token) { // Check if the token exists
                    localStorage.setItem('token', data.token);
                    alert('Login successful! Welcome back.');
                    navigate('/'); // Redirect after successful login
                } else {
                    setError('Login failed. No token received.'); // Handle unexpected response
                }
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            setError('Server error. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.header}>Alumni Connect</h2>
                {error && <p style={styles.error}>{error}</p>}
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="username">Username:</label>
                    <input
                        style={styles.input}
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="password">Password:</label>
                    <input
                        style={styles.input}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
               <button type="submit" style={styles.button} disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
    </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    },
    form: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
        width: '400px',
        textAlign: 'center',
    },
    header: {
        marginBottom: '30px',
        color: '#333',
        fontSize: '28px',
        fontWeight: '700',
    },
    inputGroup: {
        marginBottom: '20px',
        textAlign: 'left',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        fontSize: '14px',
        color: '#555',
    },
    input: {
        width: '100%',
        padding: '14px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '15px',
        transition: 'border-color 0.3s',
    },
    button: {
        width: '100%',
        padding: '14px',
        backgroundColor: '#1a6a7a',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'background-color 0.3s',
    },
    error: {
        color: 'red',
        marginBottom: '20px',
    },
};

export default Login;