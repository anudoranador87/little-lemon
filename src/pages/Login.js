import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    console.log("Login attempt:", { email, password });
    alert("Login successful! Redirecting to Home.");
    navigate('/');
  };

  return (
    <main className="booking-section">
      <div className="booking-form">
        <h1 style={{textAlign: 'center'}}>Login</h1>
        <form onSubmit={handleLogin} style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" className="hero-btn submit-btn">Login</button>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center' }}>Don't have an account? <span style={{ color: 'var(--primary-green)', cursor: 'pointer', fontWeight: '700' }}>Sign up</span></p>
      </div>
    </main>
  );
};

export default Login;
