import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Sumit Ghugare</h1>
          <h2 className="hero-title">Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional and accessible digital experiences for the web.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/p2.png" alt="Sumit Ghugare" className="hero-profile-image" />
          </div>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
