import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="hero-content">
        <h1 className="contact-title">Contact</h1>
        <h2 className="contact-subtitle">Get in contact with us!</h2>
      </div>
      <div className="contact-description">
        <p>
          Welcome to WorkoutGen, your ultimate workout companion! We are dedicated to helping you achieve your fitness goals by providing personalized workout plans tailored to your needs and preferences. Whether you're a beginner looking to get started or an experienced athlete aiming to take your training to the next level, WorkoutGen has got you covered.
        </p>
        <div className="contact-links">
        <a href="https://www.instagram.com/shawny_media"id="instagram"className="contact-link"target="_blank"rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/instagram.svg`}
            alt="Instagram"
            className="contact-icon"
            height="50px"/>
        </a>
        <a href="https://www.youtube.com/@Shawny-Media"id="youtube"className="contact-link"target="_blank"rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/youtube.svg`}
            alt="Youtube"
            className="contact-icon"
            height="50px"/>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;