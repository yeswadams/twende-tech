import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './index.css';
    import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <Router> {/* Wrap your App component with Router */}
          <App />
        </Router>
      </React.StrictMode>,
    );
