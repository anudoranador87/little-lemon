import React from 'react';

const OrderOnline = () => {
  return (
    <main style={{ padding: '100px 10%', textAlign: 'center' }}>
      <h1>Order Online</h1>
      <p style={{ fontSize: '20px', marginTop: '20px' }}>
        Our online ordering system is currently under maintenance. 
      </p>
      <p>Please call us at (123) 456-7890 to place your order for pickup or delivery.</p>
      <div style={{ marginTop: '40px' }}>
        <img src="/logo512.png" alt="Delivery" style={{ width: '200px', opacity: 0.5 }} />
      </div>
    </main>
  );
};

export default OrderOnline;
