import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Info, Settings, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaFish, FaLeaf } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Compact NavLink with modern design
const NavLink = ({ to, children, className = "", onClick = null, isActive = false }) => (
  <Link
    to={to}
    className={`relative px-3 py-2 hover:text-emerald-600 transition-all duration-500 group rounded-lg ${
      isActive ? 'text-emerald-600 bg-emerald-50/70' : ''
    } ${className}`}
    onClick={onClick}
  >
    {/* Text content */}
    {children}
    
    {/* Compact bottom bar animation */}
    <span className={`absolute left-1/2 bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 transform -translate-x-1/2 transition-all duration-500 rounded-full ${
      isActive ? 'w-2/3' : 'group-hover:w-2/3'
    }`}></span>
    
    {/* Subtle background hover effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/60 group-hover:via-emerald-50/40 group-hover:to-emerald-50/60 rounded-lg -z-10 transition-all duration-500"></span>
  </Link>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled when we're more than 50px down - for compact mode
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (window.scrollY < 100) {
        setActiveSection('hero');
      } else {
        // You can add more logic here to detect other sections
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page is loaded at a specific scroll position
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated nav links with icons and home scroll to hero
  const navLinks = [
    { to: '/', label: 'Home', icon: <Home size={14} className="mr-1.5" />, scrollTo: 'hero' },
    { to: '/', label: 'About', icon: <Info size={14} className="mr-1.5" />, scrollTo: 'about' },
    { to: '/services', label: 'Services', icon: <Settings size={14} className="mr-1.5" /> },
  ];

  // Handle smooth scrolling for anchor links within the same page
  const handleNavClick = (scrollTo) => {
    if (scrollTo && location.pathname === '/') {
      setTimeout(() => {
        if (scrollTo === 'hero') {
          // Scroll to top for hero section
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          const element = document.getElementById(scrollTo);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
    setIsOpen(false);
  };

  // Get current page for active state
  const getCurrentPage = () => {
    if (location.pathname === '/') {
      return activeSection;
    }
    if (location.pathname === '/services') return 'services';
    if (location.pathname === '/contact') return 'contact';
    return '';
  };

  return (
    <>
      {/* Compact glass-morphism navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-lg bg-white/80 shadow-lg border-b border-emerald-100/50 ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="container mx-auto px-4 md:px-5 box-border">
          <div className="flex justify-between items-center w-full">
            {/* Compact modern logo */}
            <Link 
              to="/" 
              className="logo flex items-center gap-3 group"
            >
              <div className="logo-icon w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 shadow-lg shadow-emerald-500/25 transition-all duration-500 overflow-hidden group-hover:shadow-xl group-hover:shadow-emerald-500/30 group-hover:scale-105">
                <FaFish className="text-white text-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
              </div>          
              <div className="flex flex-col">
                <span className="logo-text text-lg md:text-xl font-bold text-emerald-800 transition-all duration-300 leading-tight group-hover:text-emerald-700">
                  Sai Scapers
                </span>
                <span className="text-xs text-emerald-600/80 font-medium tracking-wide">
                  Aquascaping Specialists
                </span>
              </div>
            </Link>
            
            {/* Compact Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map(({ to, label, icon, scrollTo }) => (
                <NavLink 
                  key={to + (scrollTo || '')} 
                  to={to}
                  onClick={() => handleNavClick(scrollTo)}
                  isActive={getCurrentPage() === (scrollTo || label.toLowerCase())}
                  className="mx-0.5"
                >
                  <span className="flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-emerald-50/70">
                    {React.cloneElement(icon, { size: 14, className: "mr-1.5" })}
                    {label}
                  </span>
                </NavLink>
              ))}
              
              {/* Compact CTA Button */}
              <Link 
                to="/contact"
                className="ml-4 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white text-sm font-medium transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5 flex items-center shadow-md shadow-emerald-500/15 hover:from-emerald-600 hover:to-green-700 group"
              >
                <Mail size={14} className="mr-1.5 group-hover:rotate-12 transition-transform duration-300" /> 
                Get in Touch
              </Link>
            </div>

            {/* Compact Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/80 text-emerald-700 hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-200/80 hover:text-emerald-800 transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl py-5 px-5 overflow-y-auto border-l border-emerald-100/50"
              onClick={e => e.stopPropagation()}
            >
              {/* Compact Mobile Menu Header */}
              <div className="flex justify-between items-center pb-3 mb-5 border-b border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                    <FaFish className="text-white text-lg" />
                  </div>          
                  <div className="flex flex-col">
                    <span className="text-emerald-800 font-bold text-xl">
                      Sai Scapers
                    </span>
                    <span className="text-xs text-emerald-600/80 font-medium">Aquascaping Specialists</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/80 text-emerald-700 hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-200/80 transition-all duration-300 active:scale-95 shadow-sm"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Compact Mobile Menu Links */}
              <div className="space-y-1.5 py-3">
                {navLinks.map(({ to, label, icon, scrollTo }, index) => (
                  <motion.div
                    key={to + (scrollTo || '')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link 
                      to={to} 
                      onClick={() => handleNavClick(scrollTo)}
                      className={`block py-3 px-4 rounded-xl transition-all duration-300 flex items-center ${
                        getCurrentPage() === (scrollTo || label.toLowerCase())
                          ? "bg-gradient-to-r from-emerald-100/90 to-green-100/80 text-emerald-800 font-semibold shadow-md shadow-emerald-500/10"
                          : "text-gray-700 hover:bg-emerald-50/90 hover:shadow-sm"
                      }`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
                        getCurrentPage() === (scrollTo || label.toLowerCase())
                          ? "bg-gradient-to-r from-emerald-500 to-green-600 shadow-md shadow-emerald-500/25"
                          : "bg-emerald-100 hover:bg-emerald-200"
                      }`}>
                        {React.cloneElement(icon, {
                          size: 16,
                          className: getCurrentPage() === (scrollTo || label.toLowerCase()) ? "text-white" : "text-emerald-700"
                        })}
                      </span>
                      <span className="font-medium text-sm">{label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Compact CTA in mobile menu */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                  className="mt-6"
                >
                  <Link 
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-3 px-5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 text-white rounded-xl text-center font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:-translate-y-0.5 transition-all duration-500 flex items-center justify-center group"
                  >
                    <Mail size={16} className="mr-1.5 group-hover:rotate-12 transition-transform duration-300" />
                    Get in Touch
                  </Link>
                </motion.div>
              </div>

              {/* Compact Mobile Menu Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-auto pt-4 border-t border-emerald-100/50"
              >
                <p className="text-xs text-emerald-800 font-medium mb-3">Connect with us</p>
                <div className="flex space-x-2.5 mb-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white shadow-md text-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-50" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white shadow-md text-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-50" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white shadow-md text-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:bg-gradient-to-br hover:from-emerald-100 hover:to-emerald-50" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                </div>
                <div className="flex items-center gap-2.5 py-3 px-4 bg-gradient-to-r from-emerald-50/90 to-green-50/70 rounded-xl shadow-md border border-emerald-100/50">
                  <FaLeaf className="text-emerald-600 text-lg" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-800">Eco-friendly practices</p>
                    <p className="text-xs text-gray-600">Sustainable aquascaping solutions</p>
                  </div>
                </div>
                <p className="text-center text-xs text-gray-500 mt-4 font-medium">© 2024 Sai Scapers. All rights reserved.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
