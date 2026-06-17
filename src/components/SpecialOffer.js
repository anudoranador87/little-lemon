import React from 'react';

const SpecialOffer = () => {
  return (
    <section style={{ 
      backgroundColor: 'var(--primary-yellow)', 
      padding: '30px 10%', 
      textAlign: 'center', 
      borderRadius: '16px',
      margin: '40px 10%'
    }}>
      <h2 style={{ margin: '0 0 10px 0', color: 'var(--highlight-black)' }}>Daily Special: Falafel Combo</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>Enjoy our Falafel with hummus and pita for only <span style={{ fontWeight: 'bold', fontSize: '22px' }}>$10.99</span>!</p>
      <button className="hero-btn" style={{ backgroundColor: 'var(--primary-green)', color: 'white' }}>
        Add to Order
      </button>
    </section>
  );
};

export default SpecialOffer;
