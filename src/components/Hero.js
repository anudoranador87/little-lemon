import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroBanner from '../assets/hero-banner.jpg';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="hero-btn" onClick={() => navigate('/reservations')}>Reserve a Table</button>
      </div>
      <div className="hero-image-container">
        <img src={heroBanner} className="hero-img" alt="Little Lemon restaurant food" />
      </div>
    </section>
  );
};

export default Hero;
