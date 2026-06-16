import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className="hero-btn">Reserve a Table</button>
      </div>
      <img src="/logo512.png" className="hero-img" alt="Little Lemon food" />
    </section>
  );
};

export default Hero;
