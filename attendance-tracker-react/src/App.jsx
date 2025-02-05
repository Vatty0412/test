// src/App.jsx
import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Courses from './Courses.jsx';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
      <Courses />
    </div>
  );
};

export default App;