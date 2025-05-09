import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Publications from './components/Publications';
import FeaturedProjects from './components/FeaturedProjects';
import WorkRequest from './components/WorkRequest';
import OnlineSamples from './components/OnlineSamples';
import Contact from './components/Contact';
import Resume from './components/Resume'; // Import Resume page
import './App.css'; // New CSS file for overall styling

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-wrapper">
          <div className="ad-column left-ad"> {/* Left Ad Placeholder */} </div>
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/featured-projects" element={<FeaturedProjects />} />
              <Route path="/online-samples" element={<OnlineSamples />} />
              <Route path="/work-request" element={<WorkRequest />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <div className="ad-column right-ad"> {/* Right Ad Placeholder */} </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
