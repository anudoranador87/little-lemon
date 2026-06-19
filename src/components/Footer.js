import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

// I made the footer cleaner and added a bit more space.
// Using grid makes it much easier to align columns!
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon" />
        <p>Your favorite Mediterranean spot in the heart of Chicago.</p>
        <p className="footer-credit">
          Created by Jose - Front End Developer
        </p>
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <ul>
          <li>123 Lemon Street, Chicago</li>
          <li><a href="tel:+1234567890">(123) 456-7890</a></li>
          <li><a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Social Media</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
