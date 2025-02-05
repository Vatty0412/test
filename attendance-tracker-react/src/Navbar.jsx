// src/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">Attendance Tracker</div>
      <div className="navbar-user">
        
        <div className="user-info">
          <div className="email">name.regno@mnnit.ac.in</div>
          <div className="branch">Branch : </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><img src="pp.webp" alt="Profile" className="profile-pic" /></button>
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;