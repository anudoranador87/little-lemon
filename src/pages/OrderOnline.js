import React, { useState, useEffect } from 'react';
import greekSalad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

const OrderOnline = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({ name: '', address: '', phone: '' });
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const menuItems = [
    { id: 1, name: 'Greek Salad', price: 12.99, image: greekSalad, description: 'Crispy lettuce, peppers, olives, Chicago style feta.' },
    { id: 2, name: 'Bruchetta', price: 5.99, image: bruchetta, description: 'Grilled bread, garlic, salt, olive oil.' },
    { id: 3, name: 'Lemon Dessert', price: 5.00, image: lemonDessert, description: 'Authentic grandma recipe lemon dessert.' }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${deliveryInfo.name}! It will be delivered to: ${deliveryInfo.address}. Total: $${total.toFixed(2)}`);
    setCart([]);
    localStorage.removeItem('cart');
    setShowCheckoutForm(false);
    setDeliveryInfo({ name: '', address: '', phone: '' });
  };

  return (
    <main style={{ padding: '60px 10%' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Order Online</h1>
        <p>Select your favorite dishes and order for pickup or delivery.</p>
      </header>
      
      <section className="specials-grid">
        {menuItems.map((item) => (
          <article key={item.id} className="special-card">
            <img src={item.image} alt={item.name} />
            <div className="special-content">
              <div className="special-header">
                <h3>{item.name}</h3>
                <p className="special-price">${item.price.toFixed(2)}</p>
              </div>
              <p>{item.description}</p>
              <button 
                className="hero-btn" 
                style={{marginTop: '20px', width: '100%'}}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="cart-container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>Your cart is empty.</p> : !showCheckoutForm ? (
            <>
                <ul className="cart-items">
                    {cart.map((item, index) => <li key={index} className="cart-item"><span>{item.name}</span> <span>${item.price.toFixed(2)}</span></li>)}
                </ul>
                <div className="cart-summary">
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>IVA (16%): ${iva.toFixed(2)}</p>
                    <p className="cart-total">Total: ${total.toFixed(2)}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  <button className="hero-btn" onClick={() => setShowCheckoutForm(true)}>Proceed to Delivery</button>
                  <button className="hero-btn" onClick={() => setCart([])} style={{ backgroundColor: '#EE9972' }}>Clear Cart</button>
                </div>
            </>
        ) : (
            <form onSubmit={handleCheckoutSubmit} className="delivery-form">
                <h3>Delivery Information</h3>
                <input type="text" placeholder="Full Name" required onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})} />
                <input type="text" placeholder="Address" required onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})} />
                <input type="tel" placeholder="Phone Number" required onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})} />
                <button type="submit" className="hero-btn">Confirm Order</button>
                <button type="button" onClick={() => setShowCheckoutForm(false)} className="hero-btn" style={{backgroundColor: '#ccc'}}>Cancel</button>
            </form>
        )}
      </section>
    </main>
  );
};

export default OrderOnline;
