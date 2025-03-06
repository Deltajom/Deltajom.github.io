import React from 'react';
import './Resume.css'; // Import styling

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="pdf-wrapper">
        <iframe 
          src="/cv.pdf" 
          title="Resume" 
          className="resume-frame"
        />
      </div>
    </div>
  );
};

export default Resume;
