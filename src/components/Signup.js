import React, { useEffect, useState, useRef } from 'react';
import './Signup.css';

const Signup = () => {

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="signup-container">
        <h1 className="signup-title">Sign Up</h1>
        <form className="signup-form">
            <label className="signup-label" htmlFor="email">Email:</label>
            <input className="signup-input" type="email" id="email" name="email" required />
            <label className="signup-label" htmlFor="username">Username:</label>
            <input className="signup-input" type="text" id="username" name="username" required />
            <label className="signup-label" htmlFor="password">Password:</label>
            <input className="signup-input" type="password" id="password" name="password" required />
            <label className="signup-label" htmlFor="confirm-password">Confirm Password:</label>
            <input className="signup-input" type="password" id="confirm-password" name="confirm-password" required />
            <div className="remember-me-container">
              <input 
                className="signup-checkbox" 
                type='checkbox' 
                id="remember-me" 
                name="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> 
              <label className="remember-me-label" htmlFor="remember-me">Remember Me</label>
            </div>
            <input className="signup-button" type="submit" value="Sign Up" />
        </form>
    </div>
  );
};

export default Signup;