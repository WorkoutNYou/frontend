import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <Link to="/" className="navbar-logo">WorkoutNYou</Link>
            <Link to="/" className="navbar-link">Home</Link>{/*Link Dashboard*/}
        </div>
        <div className="navbar-right">
            <Link to="/about" className="navbar-link">About</Link>
            <Link to="/contact" className="navbar-link">Contact Us</Link>{/*Link Profile*/}
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Sign Up</Link>
        </div>
    </div>
  );
};

export default Navbar;
