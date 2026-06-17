import React from 'react';
import Hero from '../components/Hero';
import SpecialOffer from '../components/SpecialOffer';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const Home = () => {
  return (
    <main>
      <Hero />
      <SpecialOffer />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default Home;
