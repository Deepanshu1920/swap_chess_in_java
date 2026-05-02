import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Swap_chess';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);


reportWebVitals();
