import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src="/logo192.png" alt="Little Lemon" style={{ height: '100px', filter: 'brightness(0) invert(1)' }} />
      </div>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <p>123 Lemon Street, Chicago</p>
        <p>(123) 456-7890</p>
        <p>contact@littlelemon.com</p>
      </div>
      <div>
        <h3>Social Media</h3>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
