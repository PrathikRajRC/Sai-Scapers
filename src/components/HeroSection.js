import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/main.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero w-full box-border">
      <div className="hero-content px-4 w-full box-border">
        <h1 className="hero-title">Discover the Art of Live Scaping</h1>
        <p className="hero-subtitle">Transform your space with stunning aquascapes</p>        <div className="hero-cta">
          <Link to="/services" className="btn btn-primary">Explore Our Projects</Link>
          <Link to="/contact" className="btn btn-secondary">Get Started</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://sinkoraquarium.com/wp-content/uploads/2018/04/test.jpg" alt="Beautiful aquascape" />
      </div>
      <a href="#about" className="scroll-indicator">
        <FiChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
};

export default HeroSection;
