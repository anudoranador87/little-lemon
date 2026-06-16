import React from 'react';
import heroBanner from '../assets/hero-banner.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="hero-btn">Reserve a Table</button>
      </div>
      <div className="hero-image-container">
        <img src={heroBanner} className="hero-img" alt="Little Lemon restaurant food" />
      </div>
    </section>
  );
};

export default Hero;
