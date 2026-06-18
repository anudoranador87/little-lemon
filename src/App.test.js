import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar';

// Mock React Router DOM components securely
jest.mock('react-router-dom', () => {
  const React = require('react');
  return {
    Link: function Link({ children, to }) {
      return React.createElement('a', { href: to }, children);
    },
    BrowserRouter: function BrowserRouter({ children }) {
      return React.createElement('div', null, children);
    },
    Routes: function Routes({ children }) {
      return React.createElement('div', null, children);
    },
    Route: function Route({ children }) {
      return React.createElement('div', null, children);
    }
  };
});

test('renders Little Lemon logo in Navbar', () => {
  render(<Navbar />);
  const logo = screen.getByAltText(/Little Lemon Logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<Navbar />);
  expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
