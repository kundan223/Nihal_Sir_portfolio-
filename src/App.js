// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Education from './components/Education';
import RecentWork from './components/RecentWork';
import Footer from './components/footer';

function App() {
  return (
    <div className="App bg-black px-4 sm:px-8 lg:px-14">  {/* Adjust padding based on screen size */}
      <Navbar />
      <HeroSection />
      <Education />
      <RecentWork />
      <Footer />
    </div>
  );
}

export default App;
