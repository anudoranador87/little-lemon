import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon title', () => {
  render(<App />);
  const titleElements = screen.getAllByText(/Little Lemon/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
