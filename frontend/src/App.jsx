import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import ContactPage from './Pages/ContactPage';
import ReviewsPage from './Pages/ReviewsPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import './App.css';
import { AuthProvider } from './Utils/AuthContext';
import ChatWidget from './Components/ChatWidget';
import FleetPage from './Pages/FleetPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <ChatWidget />
      </Router>
    </AuthProvider>
  );
};

export default App;
