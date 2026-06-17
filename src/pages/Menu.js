import React from 'react';
import Highlights from '../components/Highlights';
import falafel from '../assets/falafel.jpeg';
import hummus from '../assets/hummus.jpeg';
import baklava from '../assets/baklava.jpeg';

const Menu = () => {
  const fullMenuItems = [
    { name: 'Hummus', price: '$6.50', image: hummus, description: 'Creamy chickpea dip with olive oil and pita.' },
    { name: 'Falafel', price: '$8.50', image: falafel, description: 'Crispy chickpea fritters with tahini sauce.' },
    { name: 'Baklava', price: '$4.50', image: baklava, description: 'Sweet pastry made of layers of filo and nuts.' }
  ];

  return (
    <main>
      <Highlights />
      <section style={{ padding: '20px 10% 60px 10%' }}>
        <h2>Full Menu</h2>
        <div className="specials-grid" style={{ marginTop: '20px' }}>
          {fullMenuItems.map((item, index) => (
            <article key={index} className="special-card">
              <img src={item.image} alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="special-content">
                <div className="special-header">
                  <h3>{item.name}</h3>
                  <p className="special-price">{item.price}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Menu;
