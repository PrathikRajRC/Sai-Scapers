import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiMenu, FiX} from 'react-icons/fi';
import { FaFish } from 'react-icons/fa';
import './styles/main.css';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [products, setProducts] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data));

    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#home" className="logo">
              <div className="logo-icon">
                <FaFish className="h-6 w-6 text-white" />
              </div>
              <span className="logo-text">7t Scapers</span>
            </a>
            <nav className="nav desktop-nav">
              <ul className="nav-list">
                {['home', 'about', 'projects', 'products', 'contact'].map((section) => (
                  <li key={section}>
                    <a 
                      href={`#${section}`} 
                      className={`nav-link ${activeSection === section ? 'active' : ''}`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                      <span className="nav-link-indicator"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <button 
            onClick={toggleMobileMenu}
            className="mobile-menu-back"
            aria-label="Close menu"
          >
            <FiX className="h-6 w-6" />
          </button>
          <ul>
            {['home', 'about', 'projects', 'products', 'contact'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  onClick={toggleMobileMenu}
                  className={activeSection === section ? 'active' : ''}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <section id="products" className="min-h-screen flex items-center py-16">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Our Products</h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                  </div>
                  <button className="add-to-cart-btn">
                    <FiShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="section-title">Contact Us</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" rows="4" className="form-input" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="footer-title">7t Scapers</h3>
              <p>Bringing nature's beauty underwater</p>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#products">Shop</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3 className="footer-title">Connect With Us</h3>
              <div className="social-links">
                <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
                <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
                <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} 7t Scapers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}