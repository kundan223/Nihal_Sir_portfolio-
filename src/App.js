import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Landing_page';
import WorkExperience from './components/WorkExperience';
import Research from './components/Research';
import Personal from './components/Personal';
import KeyProjects from './components/KeyProjects';
import Navbar from './components/navbar'; 
import Blog from './components/Blog';
import Footer from './components/footer';
import Blog1 from './components/Blogs/Blog1';
import Blog2 from './components/Blogs/Blog2';
import Blog3 from './components/Blogs/Blog3';
import Blog4 from './components/Blogs/Blog4';
import Blog5 from './components/Blogs/Blog5';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/key-projects" element={<KeyProjects />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs1" element={<Blog1 />} />
        <Route path="/blogs2" element={<Blog2 />} />
        <Route path="/blogs3" element={<Blog3 />} />
        <Route path="/blogs4" element={<Blog4 />} />
        <Route path="/blogs5" element={<Blog5 />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
