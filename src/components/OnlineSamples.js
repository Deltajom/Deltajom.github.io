import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OnlineSamples.css';

// Object to store unique descriptions for each category
const onlineSampleDescriptions = { "AR/VR": "Projects that are based on webXR and best experienced with an XR headset.",
  "Algorithms": "Implementations and visualizations of certian algorithms to show off what I've learned.",
  "WebAssembly": "Projects that show off the utility of webassembly, may be cross catogorized with other areas.",
  "Video Streaming": "Projects that focus on video streaming (Live and On-Demand).",
  "Tools": "Small or large useful programs, calculators, or other tools.",
  "Games": "A little bit of fun never hurt!"
};

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

      {[
        "AR/VR",
        "Algorithms",
        "WebAssembly",
        "Video Streaming",
        "Tools",
        "Games"
      ].map((category) => (
        <div key={category} className="dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown(category)}>
            {category} Projects {openDropdown === category ? "▲" : "▼"}
          </button>
          <div className={`dropdown-content ${openDropdown === category ? "show" : ""}`}>
            <p>{onlineSampleDescriptions[category]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OnlineSamples;
