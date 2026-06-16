import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { initializeTimes, updateTimes } from './pages/Reservations';

test('initializeTimes returns correct initial array', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test('updateTimes returns same array for now', () => {
  const times = initializeTimes();
  const action = { type: 'UPDATE_TIMES' };
  const newTimes = updateTimes(times, action);
  expect(newTimes).toEqual(times);
});

test('Renders BookingForm labels', () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  const dateLabel = screen.getByText(/Choose date/i);
  expect(dateLabel).toBeInTheDocument();
});

test('Submit button has correct text initially', () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  const submitButton = screen.getByRole('button', { name: /Make your reservation/i });
  expect(submitButton).toBeInTheDocument();
});
