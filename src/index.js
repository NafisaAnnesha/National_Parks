import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* Setting the router here instead of the app component. */}
    <Router>
      <App />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
