import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    submitForm({ date, resTime, guests, occasion });
  };

  return (
    <form className="booking-form" style={{ display: 'grid', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={handleDateChange} 
        min={new Date().toISOString().split('T')[0]}
        required 
      />

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
        value={loading ? "Saving..." : "Make Your reservation"} 
        aria-label={loading ? "Saving reservation" : "Make your reservation"}
        disabled={loading}
      />
    </form>
  );
};

export default BookingForm;
