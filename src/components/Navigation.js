import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Settings, Package, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFish } from 'react-icons/fa';

const NavLink = ({ to, children, className = "", onClick = null }) => (
  <Link
    to={to}
    className={`relative hover:text-green-600 transition-colors duration-300 group ${className}`}
    onClick={onClick}
  >
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={13} className="mr-1" /> },
    { to: '/about', label: 'About', icon: <Info size={13} className="mr-1" /> },
    { to: '/services', label: 'Services', icon: <Settings size={13} className="mr-1" /> },
    { to: '/products', label: 'Products', icon: <Package size={13} className="mr-1" /> },
    { to: '/contact', label: 'Contact', icon: <Mail size={13} className="mr-1" /> },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-3">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <div className="logo flex items-center gap-1">
            <div className={`logo-icon w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-green-600 shadow-md' : 'bg-white/20 backdrop-blur-sm'
            }`}>
              <FaFish className={`${isScrolled ? 'text-white' : 'text-green-600'} text-xs`} />
            </div>          
            <span className={`logo-text text-sm font-bold transition-colors duration-300 ${
              isScrolled ? 'text-green-800' : 'text-white'
            }`}>Sai Scaper</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-3">
            {navLinks.map(({ to, label, icon }) => (
              <NavLink key={to} to={to}>
                <span className={`flex items-center text-xs ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  {icon}
                  {label}
                </span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-1 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/90 text-gray-700 hover:bg-gray-100 hover:text-green-600' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu-overlay md:hidden" onClick={() => setIsOpen(false)}>
          <div 
            className="mobile-menu-content" 
            onClick={e => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="mobile-menu-header">
              <div className="mobile-logo">
                <div className="logo-icon">
                  <FaFish className="text-white text-lg" />
                </div>          
                <span className="logo-text">Sai Scaper</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mobile-menu-close"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="mobile-menu-links">
              {navLinks.map(({ to, label, icon }) => (
                <NavLink 
                  key={to} 
                  to={to} 
                  onClick={() => setIsOpen(false)}
                  className="mobile-menu-link"
                >
                  <span className="flex items-center">
                    {icon}
                    {label}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="mobile-menu-footer">
              <div className="mobile-social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Twitter size={18} />
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
