import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Using lazy loading here! It's supposed to help load pages faster
// by only bringing them in when the user actually navigates to them.
const Home = lazy(() => import('./pages/Home'));
const Reservations = lazy(() => import('./pages/Reservations'));
const ConfirmedBooking = lazy(() => import('./pages/ConfirmedBooking'));
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const OrderOnline = lazy(() => import('./pages/OrderOnline'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      {/* Suspense is needed to show something while the lazy component loads */}
      <Suspense fallback={<div className="page-loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/menu" element={<PageTransition><Menu /></PageTransition>} />
          <Route path="/reservations" element={<PageTransition><Reservations /></PageTransition>} />
          <Route path="/confirmed" element={<PageTransition><ConfirmedBooking /></PageTransition>} />
          <Route path="/order" element={<PageTransition><OrderOnline /></PageTransition>} />
          <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
