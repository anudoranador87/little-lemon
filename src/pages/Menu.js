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
      <section className="full-menu-section">
        <h2>Full Menu</h2>
        <div className="specials-grid full-menu-grid">
          {fullMenuItems.map((item, index) => (
            <article key={index} className="special-card">
              <img src={item.image} alt={item.name} />
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
