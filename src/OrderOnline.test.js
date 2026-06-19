import { render, screen, fireEvent } from '@testing-library/react';
import OrderOnline from './pages/OrderOnline';

beforeEach(() => {
  localStorage.clear();
});

test('renders online order menu items', () => {
  render(<OrderOnline />);

  expect(screen.getByRole('heading', { name: /Order Online/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Greek Salad/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Baklava/i })).toBeInTheDocument();
});

test('adds an item to cart and shows totals', () => {
  render(<OrderOnline />);

  fireEvent.click(screen.getAllByRole('button', { name: /Add to Cart/i })[0]);
  fireEvent.click(screen.getByRole('button', { name: /Cart \(1\)/i }));

  expect(screen.getByRole('heading', { name: /Your Cart/i })).toBeInTheDocument();
  expect(screen.getAllByText('Greek Salad')).toHaveLength(2);
  expect(screen.getByText(/Subtotal:/i)).toHaveTextContent('$12.99');
  expect(screen.getByText(/IVA \(16%\):/i)).toHaveTextContent('$2.08');
  expect(screen.getByText(/^Total:/i)).toHaveTextContent('$15.07');
});

test('opens delivery form from a non-empty cart', () => {
  render(<OrderOnline />);

  fireEvent.click(screen.getAllByRole('button', { name: /Add to Cart/i })[0]);
  fireEvent.click(screen.getByRole('button', { name: /Cart \(1\)/i }));
  fireEvent.click(screen.getByRole('button', { name: /Proceed to Delivery/i }));

  expect(screen.getByRole('heading', { name: /Delivery Info/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
});
