// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;