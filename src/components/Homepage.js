import "./Homepage.css"
import React, { useEffect, useState, useRef } from 'react';

const Homepage = () => {

  return (
    <div className="homepage-container">
      <div className="homepage-banner">
        <h1 className="homepage-title">Welcome to WorkoutNYou</h1>
        <p className="homepage-subtitle">Your personalized workout generator</p>
      </div>
      <div className="homepage-features">
        <div className="feature-card">
          <h2 className="feature-title">Custom Workouts</h2>
          <p className="feature-description">Generate workouts tailored to your goals and preferences.</p>
        </div>
        <div className="feature-card">
          <h2 className="feature-title">Track Progress</h2>
          <p className="feature-description">Monitor your improvements and stay motivated.</p>
        </div>
        <div className="feature-card">
          <h2 className="feature-title">Expert Tips</h2>
          <p className="feature-description">Get advice from fitness professionals to enhance your routine.</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
