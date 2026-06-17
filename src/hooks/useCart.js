import { useState, useEffect } from 'react';

export const useCart = () => {
  // Setting up the state for the cart. I'm checking localStorage first
  // because I don't want the user to lose their stuff if they refresh the page!
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Whenever the cart changes, I update localStorage to keep it synced.
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Calculating totals dynamically. 
  // It's cool how easy it is to do this with reduce!
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  return { cart, addToCart, clearCart, subtotal, iva, total };
};
