import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18n";
import Navbar from './components/navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>
);
