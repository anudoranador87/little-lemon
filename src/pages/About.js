import React from 'react';
import AboutContent from '../components/About';

const About = () => {
  return (
    <main>
      <div style={{ padding: '60px 10%' }}>
        <AboutContent />
        <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish cuisines and have a menu which focuses on fresh ingredients and big flavors that everyone can enjoy.
          </p>
          <p>
            The restaurant was founded by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared passion for Mediterranean food. Mario, the older brother, is the head chef and oversees the kitchen, while Adrian manages the front of house and the business operations.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
