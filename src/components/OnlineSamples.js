import React from 'react';
import { Link } from 'react-router-dom';

const OnlineSamples = () => {
  return (
    <div>
      <h1>Online Samples</h1>
      <p>Explore fun and interesting problems & algorithms implemented with WebAssembly:</p>
      <ul>
        <li><Link to="/sorting-visualizer">Sorting Visualizer</Link> - Visualize sorting algorithms in action.</li>
        <li><Link to="/pathfinding-algorithms">Pathfinding Algorithms</Link> - Explore how pathfinding algorithms like A* and Dijkstra work.</li>
        <li><Link to="/fractal-generator">Fractal Generator</Link> - Generate complex fractals with WebAssembly performance.</li>
        <li><Link to="/game-of-life">Game of Life</Link> - Simulate Conway's Game of Life efficiently.</li>
        <li><Link to="/matrix-multiplication">Matrix Multiplication</Link> - Learn how WebAssembly handles intensive computations like matrix multiplication.</li>
      </ul>
    </div>
  );
};

export default OnlineSamples;