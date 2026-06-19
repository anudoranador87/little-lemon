import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { fetchAPI, initializeTimes, updateTimes } from './pages/Reservations';

// --- CAPSTONE RUBRIC REQUIREMENT ---
// Unit test to verify initializeTimes returns the correct expected array
test('initializeTimes returns the API times for today', () => {
  const times = initializeTimes();
  const today = new Date().toISOString().split('T')[0];
  expect(times).toEqual(fetchAPI(today));
  expect(times.length).toBeGreaterThan(0);
});

// --- CAPSTONE RUBRIC REQUIREMENT ---
// Unit test to verify updateTimes handles the state correctly
test('updateTimes returns available times for the selected date', () => {
  const action = { type: 'UPDATE_TIMES', payload: '2026-06-20' };
  expect(updateTimes([], action)).toEqual(fetchAPI('2026-06-20'));
});

test('updateTimes keeps state when the action has no date', () => {
  const times = ['17:00'];
  expect(updateTimes(times, { type: 'UPDATE_TIMES' })).toEqual(times);
});

test('Renders BookingForm labels', () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByRole('group', { name: /Select your Table/i })).toBeInTheDocument();
});

test('Submit button has correct text initially', () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} submitForm={() => {}} />);
  const submitButton = screen.getByRole('button', { name: /Make your reservation/i });
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeDisabled();
});

test('Changing date dispatches an update to parent state', async () => {
  const dispatch = jest.fn();
  render(<BookingForm availableTimes={["17:00"]} dispatch={dispatch} submitForm={() => {}} />);

  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: '2026-06-20' },
  });

  await waitFor(() => {
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '2026-06-20' });
  });
});
