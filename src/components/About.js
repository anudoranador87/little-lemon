import React from 'react';
import marioAndAdrian from '../assets/mario-and-adrian.jpg';
import heroBanner from '../assets/hero-banner.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>About Little Lemon</h1>
        
        <div className="about-story">
          <h2>Our Story: From the Mediterranean to the Midwest</h2>
          <p>
            The story of Little Lemon began with a shared dream between two brothers, Mario and Adrian, 
            who grew up in a vibrant Italian coastal town surrounded by the rich aromas of fresh basil, 
            olive oil, and simmering tomatoes. From a young age, they learned that food wasn't just 
            sustenance—it was a way to bring family and community together.
          </p>
          <p>
            In pursuit of their passion for hospitality and culinary arts, Mario and Adrian moved to 
            the United States, bringing their family traditions with them. They chose the bustling heart 
            of Chicago, Illinois, as the perfect canvas to paint their gastronomic vision.
          </p>
          <ul>
            <li>
              <strong>Mario</strong>, the older brother, serves as the Head Chef. He commands the kitchen 
              with a deep respect for heritage techniques, ensuring every dish honors the authentic 
              roots of Mediterranean cooking.
            </li>
            <li>
              <strong>Adrian</strong> manages the Front of House and business operations. With his warm 
              personality, he ensures that every guest who walks through the doors feels like an 
              extension of the brothers' own family.
            </li>
          </ul>
        </div>

        <div className="about-philosophy">
          <h3>The Culinary Philosophy</h3>
          <p>
            At Little Lemon, we specialize in a unique fusion of Italian, Greek, and Turkish cuisines. 
            Our menu is meticulously curated to focus on fresh, locally sourced ingredients and bold, 
            memorable flavors that everyone can enjoy.
          </p>
          <p>
            We take pride in honoring traditional, time-tested recipes while introducing a modern twist 
            that surprises and delights the contemporary palate. Whether it is a classic Greek salad 
            re-imagined with artisanal presentation, a perfectly crisp bruschetta, or an innovative 
            lemon-infused dessert, our dishes bridge the gap between ancient heritage and modern culinary art.
          </p>
        </div>

        <div className="about-commitment">
          <h3>Our Commitment to You</h3>
          <p>
            We believe that a great dining experience extends far beyond the plate. As a family-owned 
            establishment, Little Lemon is built on the foundations of warmth, hospitality, and a 
            welcoming atmosphere. We strive to create a space where memories are made, laughter is 
            shared, and every meal feels like a celebration of life.
          </p>
          <blockquote>
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            <br />
            <span>— The Little Lemon Philosophy</span>
          </blockquote>
        </div>

        <div className="about-highlights">
          <h3>Key Highlights of Our Restaurant</h3>
          <ul>
            <li><strong>Authentic Heritage:</strong> Founded and operated by native Italian brothers with a lifelong passion for food.</li>
            <li><strong>Diverse Mediterranean Palette:</strong> A rich culinary journey spanning Italy, Greece, and Turkey.</li>
            <li><strong>Fresh & Local:</strong> A strict commitment to utilizing fresh ingredients and seasonal produce.</li>
            <li><strong>The Modern Twist:</strong> Classic comfort food elevated by modern cooking techniques and creative plating.</li>
          </ul>
        </div>
      </div>
      <div className="about-images">
        <img src={marioAndAdrian} alt="Mario and Adrian, the founders" className="img-stack-top" />
        <img src={heroBanner} alt="The Little Lemon restaurant atmosphere" className="img-stack-bottom" />
      </div>
    </section>
  );
};

export default About;
