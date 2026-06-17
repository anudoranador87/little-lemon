import React, { useState } from 'react';
import { useCart } from '../hooks/useCart';
import greekSalad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';
import falafel from '../assets/falafel.jpeg';
import hummus from '../assets/hummus.jpeg';
import baklava from '../assets/baklava.jpeg';

const OrderOnline = () => {
  const { cart, addToCart, clearCart, subtotal, iva, total } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({ name: '', address: '', phone: '' });
  
  const menuItems = [
    { id: 1, name: 'Greek Salad', price: 12.99, image: greekSalad, description: 'Crispy lettuce, peppers, olives, Chicago style feta.' },
    { id: 2, name: 'Bruchetta', price: 5.99, image: bruchetta, description: 'Grilled bread, garlic, salt, olive oil.' },
    { id: 3, name: 'Lemon Dessert', price: 5.00, image: lemonDessert, description: 'Authentic grandma recipe lemon dessert.' },
    { id: 4, name: 'Falafel', price: 8.50, image: falafel, description: 'Crispy chickpea fritters with tahini sauce.' },
    { id: 5, name: 'Hummus', price: 6.50, image: hummus, description: 'Creamy chickpea dip with olive oil and pita.' },
    { id: 6, name: 'Baklava', price: 4.50, image: baklava, description: 'Sweet pastry made of layers of filo and nuts.' }
  ];

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed for ${deliveryInfo.name}! It will be delivered to: ${deliveryInfo.address}. Total: $${total.toFixed(2)}`);
    clearCart();
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
                  <button className="hero-btn" onClick={clearCart} style={{ backgroundColor: '#EE9972' }}>Clear Cart</button>
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
