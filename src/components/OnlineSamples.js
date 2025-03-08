import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OnlineSamples.css';

const OnlineSamples = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="samples-container">
      <h2 className="samples-title">Featured Online Samples</h2>

      <ul className="samples-list">
        <li>
          <Link to="/sorting-visualizer">Sorting Visualizer</Link> - Visualize sorting algorithms in action.
        </li>
        <li>
          <Link to="/pathfinding-algorithms">Pathfinding Algorithms</Link> - Explore how pathfinding algorithms like A* and Dijkstra work.
        </li>
        <li>
          <Link to="/fractal-generator">Fractal Generator</Link> - Generate complex fractals with WebAssembly performance.
        </li>
        <li>
          <Link to="/DASHJS360-video-player">Web-Based VR Capable DASHJS360 Player</Link> - A sample VR 360 player that uses WebXR and AFrame.
        </li>
        <li>
          <Link to="/matrix-multiplication">Matrix Multiplication</Link> - Learn how WebAssembly handles intensive computations like matrix multiplication.
        </li>
      </ul>

      {/* Featured Sample Groups */}
      <h3 className="dropdown-title">All Online Samples</h3>
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown(num)}>
            Group {num} {openDropdown === num ? "▲" : "▼"}
          </button>
          <div className={`dropdown-content ${openDropdown === num ? "show" : ""}`}>
            <p>Details about Sample Group {num} go here.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineSamples;
