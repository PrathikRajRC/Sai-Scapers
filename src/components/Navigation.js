import React, { useState } from 'react';
import { Menu, X, Home, Info, Settings, Package, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFish } from 'react-icons/fa';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative text-gray-700 hover:text-green-600 transition-colors duration-300 group"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="logo flex items-center gap-2">
            <div className="logo-icon transition-transform duration-300 ease-in-out">
                <FaFish className="text-white" />
            </div>          
            <span className="logo-text text-xl font-bold text-green-800">Sai Scaper</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to}>
                {label}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <div className="logo-icon">
                  <FaFish className="text-white" />
                </div>          
                <span className="logo-text">Sai Scaper</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mobile-menu-close"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mobile-menu-links">
              {navLinks.map(({ to, label }) => (
                <NavLink 
                  key={to} 
                  to={to} 
                  onClick={() => setIsOpen(false)}
                  className="mobile-menu-link"
                >
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-social-links">
                <a href="#" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link">
                  <Twitter size={20} />
                </a>
              </div>
              <p className="mobile-copyright">© 2024 Sai Scaper</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
