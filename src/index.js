import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add this BEFORE React mounts so the Router sees the corrected path
(function fixGhPagesDeepLink() {
  try {
    const params = new URLSearchParams(window.location.search);
    const p = params.get('p');
    if (p) {
      const newUrl = p; // p already contains path + search + hash
      window.history.replaceState(null, '', newUrl);
    }
  } catch (e) {
    // noop
  }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
