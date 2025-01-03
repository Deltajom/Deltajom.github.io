import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WorkExperience from './components/WorkExperience';
import Publications from './components/Publications';
import FeaturedProjects from './components/FeaturedProjects';
import WorkRequest from './components/WorkRequest';
import OnlineSamples from './components/OnlineSamples';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/featured-projects" element={<FeaturedProjects />} />
        <Route path="/work-request" element={<WorkRequest />} />
        <Route path="/online-samples" element={<OnlineSamples />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
