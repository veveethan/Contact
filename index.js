import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from ReactDOM
import App from './App'; // Main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
