import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Clock, DollarSign, Calendar, Phone, Mail, ChevronDown, Package, Leaf, Droplets, Sun, Zap } from 'lucide-react';
import { getServiceById } from '../data/services';
import placeholderImg from '../assets/images/acq.jpg';

// Plant Details Component
const PlantCard = ({ plant }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'very easy': return 'text-green-600 bg-green-50';
      case 'easy': return 'text-emerald-600 bg-emerald-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'hard': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      {/* Plant Image */}
      <div className="relative w-full h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-3 overflow-hidden">
        <img 
          src={placeholderImg} 
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-2 right-2">
          <Leaf className="w-4 h-4 text-green-600 drop-shadow-sm" />
        </div>
      </div>
      
      <h4 className="font-semibold text-gray-900 mb-3 text-sm">
        {plant.name}
      </h4>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Origin:</span>
          <span className="font-medium text-gray-700">{plant.origin}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sun className="w-3 h-3 text-yellow-500 mr-1" />
            <span className="text-gray-500">Light:</span>
          </div>
          <span className="font-medium text-gray-700">{plant.light}</span>
        </div>
        {plant.co2 && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Droplets className="w-3 h-3 text-blue-500 mr-1" />
              <span className="text-gray-500">CO2:</span>
            </div>
            <span className="font-medium text-gray-700">{plant.co2}</span>
          </div>
        )}
        {plant.humidity && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Droplets className="w-3 h-3 text-cyan-500 mr-1" />
              <span className="text-gray-500">Humidity:</span>
            </div>
            <span className="font-medium text-gray-700">{plant.humidity}</span>
          </div>
        )}
        <div className="flex items-center justify-between pt-1 border-t border-gray-100">
          <div className="flex items-center">
            <Zap className="w-3 h-3 text-purple-500 mr-1" />
            <span className="text-gray-500">Difficulty:</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
            {plant.difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

// Plant Subcategory Component
const PlantSubcategory = ({ subcategory, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 bg-green-50 hover:bg-green-100 transition-colors flex items-center justify-between text-left"
    >
      <span className="font-semibold text-green-800">{subcategory.type}</span>
      <div className="flex items-center">
        <span className="text-xs text-green-600 mr-2">
          {subcategory.plants.length} species
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-green-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </div>
    </button>
    {isOpen && (
      <div className="px-4 py-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subcategory.plants.map((plant, plantIndex) => (
            <PlantCard key={plantIndex} plant={plant} />
          ))}
        </div>
      </div>
    )}
  </div>
);

// Enhanced Required Items Dropdown Component
const RequiredItemsDropdown = ({ requiredItems }) => {
  const [openCategories, setOpenCategories] = useState({});
  const [openPlantSubcategories, setOpenPlantSubcategories] = useState({});

  const toggleCategory = (categoryIndex) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  const togglePlantSubcategory = (categoryIndex, subcategoryIndex) => {
    const key = `${categoryIndex}-${subcategoryIndex}`;
    setOpenPlantSubcategories(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-3">
      {requiredItems.map((category, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleCategory(index)}
            className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between text-left"
          >
            <span className="font-semibold text-gray-900">{category.category}</span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openCategories[index] ? 'rotate-180' : ''
              }`} 
            />
          </button>
          {openCategories[index] && (
            <div className="px-4 py-3 bg-white">
              {/* Handle Plants with subcategories */}
              {category.subcategories ? (
                <div className="space-y-3">
                  {category.subcategories.map((subcategory, subcategoryIndex) => (
                    <PlantSubcategory
                      key={subcategoryIndex}
                      subcategory={subcategory}
                      isOpen={openPlantSubcategories[`${index}-${subcategoryIndex}`]}
                      onToggle={() => togglePlantSubcategory(index, subcategoryIndex)}
                    />
                  ))}
                </div>
              ) : (
                /* Handle regular items */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {category.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm">
                      <Package className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center text-emerald-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-4 rounded-2xl mr-4">
                  <IconComponent className="w-8 h-8 text-emerald-300" />
                </div>
                <span className="text-emerald-300 font-medium capitalize">{service.category}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {service.name}
              </h1>
              
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-emerald-800/50 rounded-lg p-4">
                  <div className="flex items-center text-emerald-300 mb-2">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span className="font-medium">Pricing</span>
                  </div>
                  <p className="text-white font-semibold">{service.price}</p>
                </div>
                
                <div className="bg-emerald-800/50 rounded-lg p-4">
                  <div className="flex items-center text-emerald-300 mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="font-medium">Duration</span>
                  </div>
                  <p className="text-white font-semibold">{service.duration}</p>
                </div>
                
                <div className="bg-emerald-800/50 rounded-lg p-4">
                  <div className="flex items-center text-emerald-300 mb-2">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-medium">Maintenance</span>
                  </div>
                  <p className="text-white font-semibold">{service.maintenance}</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-300 text-emerald-300 rounded-lg hover:bg-emerald-300 hover:text-emerald-900 transition-colors font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={placeholderImg} 
                  alt={service.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {service.details}
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {service.gallery?.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg">
                    <img 
                      src={placeholderImg} 
                      alt={`${service.name} example ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Required Items */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Items & Materials</h3>
              <p className="text-gray-600 mb-4">
                Here's a comprehensive list of items and materials needed for your {service.name.toLowerCase()} project:
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-emerald-800 font-medium">All Required Items Included</p>
                    <p className="text-emerald-700 text-sm">
                      These materials are sourced and provided by our team as part of the service package. 
                      Premium quality guaranteed with full warranty coverage.
                    </p>
                  </div>
                </div>
              </div>
              <RequiredItemsDropdown requiredItems={service.requiredItems || []} />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Details</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-gray-900 capitalize">{service.category}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Starting Price</span>
                  <span className="font-semibold text-emerald-600">{service.price}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Project Duration</span>
                  <span className="font-semibold text-gray-900">{service.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Maintenance</span>
                  <span className="font-semibold text-gray-900">{service.maintenance}</span>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold text-center block mb-4"
              >
                Request Consultation
              </Link>
              
              <p className="text-sm text-gray-500 text-center">
                Free consultation available. Contact us for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
