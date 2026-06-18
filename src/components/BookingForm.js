import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const [selectedTable, setSelectedTable] = useState(null);

  const tables = [
    { id: 'T1', type: 'window', capacity: 2 },
    { id: 'T2', type: 'window', capacity: 4 },
    { id: 'T3', type: 'center', capacity: 6 },
    { id: 'T4', type: 'center', capacity: 4 },
    { id: 'T5', type: 'patio', capacity: 2 },
    { id: 'T6', type: 'patio', capacity: 8 },
  ];

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTable) {
      alert("Please select a table from the map.");
      return;
    }
    submitForm({ date, resTime, guests, occasion, table: selectedTable });
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

      <div className="table-selection-container">
        <label>Select your Table</label>
        <div className="restaurant-map">
          {tables.map(t => (
            <div 
              key={t.id} 
              className={`table-node ${t.type} ${selectedTable === t.id ? 'selected' : ''}`}
              onClick={() => setSelectedTable(t.id)}
            >
              <span className="table-name">{t.id}</span>
              <span className="table-capacity">👤 {t.capacity}</span>
            </div>
          ))}
        </div>
        {selectedTable && <p className="selected-table-text">Table {selectedTable} selected</p>}
      </div>

      <input type="submit" className="hero-btn submit-btn" value="Make Your reservation" aria-label="Make your reservation" />
    </form>
  );
};

export default BookingForm;
