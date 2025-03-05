import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import AlumniDirectory from './AlumniDirectory';
import JobListings from './JobListings';
import Mentoring from './Mentoring';
import Profile from './Profile';

function App() {
  const location = useLocation(); // Get the current route
  const hideNavbarRoutes = ['/']; // Define routes where Navbar should be hidden

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumnidirectory" element={<AlumniDirectory />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/mentoring" element={<Mentoring />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
