import React from 'react';

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlights-header">
        <h2>This weeks specials!</h2>
        <button className="hero-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        <article className="special-card">
          <img src="/logo512.png" alt="Greek salad" />
          <div className="special-content">
            <div className="special-header">
              <h3>Greek salad</h3>
              <p className="special-price">$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <p className="order-delivery">Order a delivery 🛵</p>
          </div>
        </article>
        <article className="special-card">
          <img src="/logo512.png" alt="Bruchetta" />
          <div className="special-content">
            <div className="special-header">
              <h3>Bruchetta</h3>
              <p className="special-price">$5.99</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
            <p className="order-delivery">Order a delivery 🛵</p>
          </div>
        </article>
        <article className="special-card">
          <img src="/logo512.png" alt="Lemon Dessert" />
          <div className="special-content">
            <div className="special-header">
              <h3>Lemon Dessert</h3>
              <p className="special-price">$5.00</p>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <p className="order-delivery">Order a delivery 🛵</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Highlights;
