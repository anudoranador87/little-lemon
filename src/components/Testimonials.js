import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      rating: "⭐⭐⭐⭐⭐",
      name: "Sara Lopez",
      review: "The Greek salad was amazing! The atmosphere is so cozy.",
      img: "https://i.pravatar.cc/150?u=sara"
    },
    {
      id: 2,
      rating: "⭐⭐⭐⭐",
      name: "Mario Rossi",
      review: "Authentic Mediterranean flavors. The bruschetta is a must-try.",
      img: "https://i.pravatar.cc/150?u=mario"
    },
    {
      id: 3,
      rating: "⭐⭐⭐⭐⭐",
      name: "Elena G.",
      review: "Perfect for a family dinner. Excellent service and delicious food.",
      img: "https://i.pravatar.cc/150?u=elena"
    },
    {
      id: 4,
      rating: "⭐⭐⭐⭐",
      name: "John D.",
      review: "A hidden gem in Chicago. I'll definitely be coming back!",
      img: "https://i.pravatar.cc/150?u=john"
    }
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {reviews.map((review) => (
          <article key={review.id} className="testimonial-card">
            <p className="rating">{review.rating}</p>
            <div className="user-info">
              <img src={review.img} alt={review.name} />
              <h3>{review.name}</h3>
            </div>
            <p className="review-text">"{review.review}"</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
