import React, { useReducer } from 'react';
import BookingForm from '../components/BookingForm';

// Initial state for available times
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer function to handle time updates
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    console.log("Form Submitted:", formData);
    alert("Reservation successful!");
  };

  return (
    <main>
      <section style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Reserve a Table</h1>
        <BookingForm 
          availableTimes={availableTimes} 
          dispatch={dispatch} 
          submitForm={submitForm} 
        />
      </section>
    </main>
  );
};

export default Reservations;
