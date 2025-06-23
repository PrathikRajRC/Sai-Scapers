import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award } from 'lucide-react';
import placeholderImg from '../assets/images/acq.jpg'; // Fallback only if service image fails to load
import { services, categories } from '../data/services';

// Simple Service Card Component
const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  
  return (
    <Link
      to={`/services/${service.id}`}
      className="bg-white rounded-lg shadow border border-gray-200 block hover:shadow-lg transition-shadow"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to placeholder if service image fails to load
            e.target.src = placeholderImg;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center mb-3">
          <IconComponent size={20} className="text-emerald-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>
        
        <div className="mb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Duration:</span>
            <span className="font-medium text-gray-700">{service.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-emerald-600 font-semibold">
            Learn More
          </span>
          <ArrowRight size={16} className="text-emerald-600" />
        </div>
      </div>
    </Link>
  );
};

// Filter Component
const CategoryFilter = ({ categories, activeCategory, onFilterChange }) => (
  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => onFilterChange(category.id)}
        className={`px-4 py-2 rounded-lg font-medium ${
          activeCategory === category.id
            ? 'bg-emerald-600 text-white'
            : 'bg-white text-gray-600 border border-gray-300'
        }`}
      >
        {category.name}
      </button>
    ))}
  </div>
);

// Main Services Section Component
const ServicesSection = () => {
  const [filteredServices, setFilteredServices] = useState(services);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === activeCategory));
    }
  }, [activeCategory]);

  const handleFilterChange = (categoryId) => {
    setActiveCategory(categoryId);
  };  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50 relative">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-48 h-48 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-200 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full mb-4">
            <Award className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming spaces through expert design, professional installation, and ongoing care.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onFilterChange={handleFilterChange}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
            />
          ))}
        </div>        {/* Call to Action */}
        <div className="text-center bg-emerald-600 rounded-lg p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
          <p className="text-lg mb-6 text-emerald-100">
            Get a free consultation and personalized quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
