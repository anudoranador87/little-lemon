import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login" className="login-nav">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
