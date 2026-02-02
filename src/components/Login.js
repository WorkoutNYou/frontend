import React, { useEffect, useState, useRef } from 'react';
import './Login.css';

const Login = () => {

  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form">
            <label className="login-label" htmlFor="username">Username:</label>
            <input className="login-input" type="text" id="username" name="username" required />
            <label className="login-label" htmlFor="password">Password:</label>
            <input className="login-input" type="password" id="password" name="password" required />
            <div className="remember-me-container">
              <input 
                className="login-checkbox" 
                type='checkbox' 
                id="remember-me" 
                name="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> 
              <label className="remember-me-label" htmlFor="remember-me">Remember Me</label>
            </div>
            <input className="login-button" type="submit" value="Login" />
        </form>
    </div>
  );
};

export default Login;