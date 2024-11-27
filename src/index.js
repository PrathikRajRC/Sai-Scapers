import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Correct import
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root container for React
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Only one Router should be here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
