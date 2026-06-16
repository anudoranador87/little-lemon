import React from 'react';

const Login = () => {
  return (
    <main className="booking-section">
      <div className="booking-form" style={{ textAlign: 'center' }}>
        <h1>Login</h1>
        <form style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          
          <button type="submit" className="hero-btn">Login</button>
        </form>
        <p style={{ marginTop: '20px' }}>Don't have an account? <span style={{ color: 'var(--primary-green)', cursor: 'pointer', fontWeight: '700' }}>Sign up</span></p>
      </div>
    </main>
  );
};

export default Login;
