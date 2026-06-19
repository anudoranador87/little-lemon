import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [isCartOpen, setIsCartOpen] = useState(false);
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
    <main className="order-page">
      <header className="order-header">
        <div>
          <h1>Order Online</h1>
          <p>Select your favorite dishes and order for pickup or delivery.</p>
        </div>
        <button className="cart-toggle-btn" onClick={() => setIsCartOpen(true)}>
          Cart ({cart.length})
        </button>
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
                className="hero-btn add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </section>

      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              className="cart-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div 
              className="side-cart"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="cart-header">
                <h2>Your Cart</h2>
                <button className="close-cart" aria-label="Close cart" onClick={() => setIsCartOpen(false)}>×</button>
              </div>

              {cart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
              ) : !showCheckoutForm ? (
                <div className="cart-content-wrapper">
                  <ul className="cart-items">
                    {cart.map((item, index) => (
                      <li key={index} className="cart-item">
                        <span>{item.name}</span> 
                        <span>${item.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="cart-bottom">
                    <div className="cart-summary">
                        <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
                        <p>IVA (16%): <span>${iva.toFixed(2)}</span></p>
                        <p className="cart-total">Total: <span>${total.toFixed(2)}</span></p>
                    </div>
                    <div className="cart-actions">
                      <button className="hero-btn full-width-btn" onClick={() => setShowCheckoutForm(true)}>Proceed to Delivery</button>
                      <button className="hero-btn clear-btn" onClick={clearCart}>Clear Cart</button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="delivery-form side-delivery">
                    <h3>Delivery Info</h3>
                    <label htmlFor="delivery-name">Full Name</label>
                    <input id="delivery-name" type="text" placeholder="Full Name" required onChange={(e) => setDeliveryInfo({...deliveryInfo, name: e.target.value})} />
                    <label htmlFor="delivery-address">Address</label>
                    <input id="delivery-address" type="text" placeholder="Address" required onChange={(e) => setDeliveryInfo({...deliveryInfo, address: e.target.value})} />
                    <label htmlFor="delivery-phone">Phone Number</label>
                    <input id="delivery-phone" type="tel" placeholder="Phone Number" required onChange={(e) => setDeliveryInfo({...deliveryInfo, phone: e.target.value})} />
                    <button type="submit" className="hero-btn full-width-btn">Confirm Order</button>
                    <button type="button" onClick={() => setShowCheckoutForm(false)} className="hero-btn cancel-btn">Back</button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default OrderOnline;
