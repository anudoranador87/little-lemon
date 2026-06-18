import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Anna M.',
    rating: 5,
    review: 'Absolutely amazing food! The Greek salad was fresh and the lemon dessert was divine. Will definitely come back!',
    initials: 'AM',
    color: '#495E57',
  },
  {
    id: 2,
    name: 'John D.',
    rating: 5,
    review: 'Best Mediterranean food in Chicago. The bruschetta melts in your mouth. Great atmosphere too!',
    initials: 'JD',
    color: '#EE9972',
  },
  {
    id: 3,
    name: 'Sofia R.',
    rating: 4,
    review: 'Love this place! Very cozy and the staff is super friendly. The portions are generous and the flavors are authentic.',
    initials: 'SR',
    color: '#F4CE14',
  },
  {
    id: 4,
    name: 'Marcus L.',
    rating: 5,
    review: 'The online reservation was so easy to use. Arrived and everything was ready. The food was outstanding. Highly recommend!',
    initials: 'ML',
    color: '#495E57',
  },
];

const StarRating = ({ rating }) => {
  return (
    <p className="rating" aria-label={`Rating: ${rating} out of 5 stars`}>
      {'⭐'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </p>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What our customers say!</h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <article key={t.id} className="testimonial-card">
            <StarRating rating={t.rating} />
            <p className="review-text">"{t.review}"</p>
            <div className="user-info">
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: t.color === '#F4CE14' ? '#333' : 'white',
                  fontWeight: '700',
                  fontSize: '16px',
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <h3>{t.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
