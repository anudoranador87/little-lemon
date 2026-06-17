import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!date) newErrors.date = "Date is required";
    if (!resTime) newErrors.resTime = "Time is required";
    if (!email || !emailRegex.test(email)) newErrors.email = "A valid email is required";
    if (guests < 1 || guests > 10) newErrors.guests = "Guests must be between 1 and 10";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        setLoading(true);
        submitForm({ date, resTime, guests, occasion, email });
    }
  };

  return (
    <form className="booking-form" style={{ display: 'grid', gap: '15px' }} onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        min={new Date().toISOString().split('T')[0]}
        required 
      />
      {errors.date && <p style={{color: 'red', margin: 0}}>{errors.date}</p>}

      <label htmlFor="res-time">Choose time</label>
      <select 
        id="res-time" 
        value={resTime} 
        onChange={(e) => setResTime(e.target.value)} 
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      {errors.resTime && <p style={{color: 'red', margin: 0}}>{errors.resTime}</p>}

      <label htmlFor="email">Email Address</label>
      <input 
        type="email" 
        id="email" 
        placeholder="you@example.com"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      {errors.email && <p style={{color: 'red', margin: 0}}>{errors.email}</p>}

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
      />
      {errors.guests && <p style={{color: 'red', margin: 0}}>{errors.guests}</p>}

      <label htmlFor="occasion">Occasion</label>
      <select 
        id="occasion" 
        value={occasion} 
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input 
        type="submit" 
        className="hero-btn submit-btn" 
        value={loading ? "Sending..." : "Make Your reservation"} 
        aria-label={loading ? "Sending reservation" : "Make your reservation"}
        disabled={loading}
      />
    </form>
  );
};

export default BookingForm;
