import React from 'react';
import marioAdrianA from '../assets/greek-salad.jpg'; // Using existing assets as placeholders if needed
import marioAdrianB from '../assets/bruchetta.jpg';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, 
          focused on traditional recipes served with a modern twist. The chefs draw inspiration 
          from Italian, Greek, and Turkish cuisines and have a menu which focuses on fresh 
          ingredients and big flavors that everyone can enjoy.
        </p>
        <p>
          The restaurant was founded by two Italian brothers, Mario and Adrian, who moved 
          to the United States to pursue their shared passion for Mediterranean food. 
          Mario, the older brother, is the head chef and oversees the kitchen, while 
          Adrian manages the front of house and the business operations.
        </p>
      </div>
      <div className="about-images">
        <img src={marioAdrianA} alt="Mario and Adrian A" className="img-stack-top" />
        <img src={marioAdrianB} alt="Mario and Adrian B" className="img-stack-bottom" />
      </div>
    </section>
  );
};

export default About;
