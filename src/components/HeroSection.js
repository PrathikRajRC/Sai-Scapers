import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/main.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Discover the Art of Landscaping</h1>
        <p className="hero-subtitle">Transform your space with stunning aquascapes</p>
        <div className="hero-cta">
          <a href="#services" className="btn btn-primary">Explore Our Projects</a>
          <a href="#contact" className="btn btn-secondary">Get Started</a>
        </div>
      </div>
      <div className="hero-image over">
        <img src="https://sinkoraquarium.com/wp-content/uploads/2018/04/test.jpg" alt="Beautiful aquascape" />
      </div>
      <a href="#about" className="scroll-indicator">
        <FiChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;