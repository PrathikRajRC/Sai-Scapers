import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaFish } from 'react-icons/fa';
import './styles/main.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modal component to display the product details
const ProductModal = ({ isOpen, product, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600">X</button>
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
      </div>
    </div>
  );
};

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-green-200 z-50">
      <div 
        className="h-full bg-green-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Example products
  const products = [
    { title: 'Starter Package', description: 'Perfect for beginners. Includes basic equipment and plants to get you started on your aquascaping journey.', price: '99.99', image: 'https://via.placeholder.com/250' },
    { title: 'Advanced Setup', description: 'For enthusiasts looking to create more complex aquascapes. Includes premium equipment and a wider variety of plants.', price: '249.99', image: 'https://via.placeholder.com/250' },
    { title: 'Professional Kit', description: 'Our top-tier offering for serious aquascapers. Includes high-end equipment, rare plants, and personalized design consultation.', price: '499.99', image: 'https://via.placeholder.com/250' },
  ];

  // Handle opening the modal
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  React.useEffect(() => {
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
      <ScrollIndicator />
      <header className="header fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#home" className="flex items-center space-x-2">
              <div className="bg-green-600 rounded-full p-2">
                <FaFish className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">7t Scapers</span>
            </a>
            <nav className="hidden md:flex space-x-6">
              {['home', 'about', 'services', 'products', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className={`text-gray-600 hover:text-green-600 transition-colors duration-300 ${activeSection === section ? 'text-green-600' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </nav>
            <button
              className="md:hidden text-gray-600 hover:text-green-600 transition-colors duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 bg-green-800 bg-opacity-90 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          {['home', 'about', 'services', 'products', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              className="text-white text-2xl mb-6 hover:text-green-300 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection products={products} onProductClick={handleProductClick} />
        <ContactSection />
      </main>

      {/* Product Modal */}
      <ProductModal 
        isOpen={isModalOpen} 
        product={selectedProduct} 
        onClose={closeModal} 
      />
      
      <Footer />
    </div>
  );
}
