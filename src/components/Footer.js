import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sai Scaper</h3>
            <p className="mb-4">Bringing nature's beauty to your space</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={() => {
                  setTimeout(() => {
                    const element = document.getElementById('about');
                    if (element) {
                      window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                      });
                    }
                  }, 100);
                }} className="hover:text-green-300 transition-colors duration-300">
                  About
                </Link>
              </li>              <li>
                <Link to="/services" className="hover:text-green-300 transition-colors duration-300">
                  Services
                </Link>
              </li>
            </ul>
          </div><div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Aquascaping', 'Terrariums', 'Live Ponds', 'Garden Design', 'Maintenance'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="hover:text-green-300 transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Nature Street, Green City, 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="flex items-center text-white">
              <FiMail className="mr-3 text-emerald-600" />
              <a href="mailto:saiscaper.harshith@gmail.com" className="hover:text-emerald-600 transition-colors duration-300">saiscaper.harshith@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {currentYear} Sai Scaper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
