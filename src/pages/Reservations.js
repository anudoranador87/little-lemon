import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

// Simulation of API function
const fetchAPI = (date) => {
  // Simple deterministic function based on date
  const result = [];
  const day = new Date(date).getDate();
  for (let i = 17; i < 23; i++) {
    if (i % (day % 3 + 1) === 0) {
        result.push(`${i}:00`);
    }
  }
  return result.length > 0 ? result : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Initial state for available times: Grabs today's date and fetches times.
// Required by the Meta Capstone Rubric.
export const initializeTimes = () => {
  return fetchAPI(new Date().toISOString().split('T')[0]);
};

// The updateTimes reducer function. As requested by the rubric, it takes 
// the state and action, and returns the new available times based on the selected date.
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};

const Reservations = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // Simulate API call and "sending email"
    setTimeout(() => {
        alert(`Reservation confirmed! A confirmation email has been sent to ${formData.email}.`);
        navigate('/confirmed');
    }, 1000);
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
