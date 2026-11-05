import React, { useEffect, useState, useRef } from 'react';
import './About.css';

const About = () => {

  return (
    <div className="about-container">
      <div className="hero-content">
        <h1 className="about-title">About</h1>
        <h2 className="about-subtitle">Your Ultimate Workout Companion</h2>
      </div>
      <div className="about-description">
        <p>
          Welcome to WorkoutGen, your ultimate workout companion! We are dedicated to helping you achieve your fitness goals by providing personalized workout plans tailored to your needs and preferences. Whether you're a beginner looking to get started or an experienced athlete aiming to take your training to the next level, WorkoutGen has got you covered.
        </p>
        <p>
          Our mission is to empower individuals to lead healthier and more active lives through effective and enjoyable workouts. With our user-friendly interface and advanced algorithms, we create customized workout routines that fit your schedule, fitness level, and specific goals. Say goodbye to generic workout plans and hello to a personalized fitness journey with WorkoutGen!
        </p>
      </div>
    </div>
  );
};

export default About;