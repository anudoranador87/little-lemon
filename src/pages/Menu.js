import React from 'react';
import Highlights from '../components/Highlights';

const Menu = () => {
  return (
    <main>
      <Highlights />
      <section style={{ padding: '20px 10% 60px 10%' }}>
        <h2>Full Menu</h2>
        <div className="specials-grid" style={{ marginTop: '20px' }}>
          <article className="special-card">
            <div className="special-content">
              <div className="special-header">
                <h3>Hummus</h3>
                <p className="special-price">$7.99</p>
              </div>
              <p>Creamy chickpea dip with tahini, lemon, and garlic.</p>
            </div>
          </article>
          <article className="special-card">
            <div className="special-content">
              <div className="special-header">
                <h3>Falafel</h3>
                <p className="special-price">$9.99</p>
              </div>
              <p>Deep-fried balls made from ground chickpeas and herbs.</p>
            </div>
          </article>
          <article className="special-card">
            <div className="special-content">
              <div className="special-header">
                <h3>Baklava</h3>
                <p className="special-price">$6.50</p>
              </div>
              <p>Sweet pastry made of layers of filo filled with chopped nuts.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Menu;
