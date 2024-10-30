// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Landing_page';
import WorkExperience from './components/WorkExperience';
import Teaching from './components/Teaching';
import Research from './components/Research';
import Personal from './components/Personal';
import KeyProjects from './components/KeyProjects';
import Navbar from './components/navbar'; // Import the Navbar component

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/research" element={<Research />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/key-projects" element={<KeyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
