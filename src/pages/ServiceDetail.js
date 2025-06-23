import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ChevronDown, Package, Leaf, Sun, Zap, Lightbulb, Filter, Mountain, Wrench } from 'lucide-react';
import { getServiceById } from '../data/services';
import placeholderImg from '../assets/images/acq.jpg';
import plantPlaceholder from '../assets/images/placeholder.jpg';

// Item Card Component for non-plant items
const ItemCard = ({ item, category }) => {
  const getCategoryIcon = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case 'lighting': return Lightbulb;
      case 'filtration': return Filter;
      case 'hardscape': return Mountain;
      case 'maintenance': return Wrench;
      default: return Package;
    }
  };

  const getCategoryColor = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case 'lighting': return 'from-yellow-100 to-amber-100';
      case 'filtration': return 'from-blue-100 to-cyan-100';
      case 'hardscape': return 'from-gray-100 to-gray-200';
      case 'maintenance': return 'from-purple-100 to-indigo-100';
      default: return 'from-gray-100 to-gray-200';
    }
  };

  const getIconColor = (categoryName) => {
    switch (categoryName.toLowerCase()) {
      case 'lighting': return 'text-yellow-600';
      case 'filtration': return 'text-blue-600';
      case 'hardscape': return 'text-gray-600';
      case 'maintenance': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };  const IconComponent = getCategoryIcon(category);
  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
      <div className={`relative w-full h-24 bg-gradient-to-br ${getCategoryColor(category)} rounded-lg mb-2 overflow-hidden`}>
        <img 
          src={item.image || plantPlaceholder} 
          alt={item.name || item}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-1 right-1">
          <IconComponent className={`w-3 h-3 ${getIconColor(category)}`} />
        </div>
      </div>
      
      <h4 className="font-semibold text-gray-900 mb-1 text-xs">
        {item.name || item}
      </h4>
      <div className="text-xs text-gray-500 capitalize">
        {category} Equipment
      </div>
    </div>
  );
};

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
  };  return (
    <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
      <div className="relative w-full h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-2 overflow-hidden">
        <img 
          src={plant.image || placeholderImg} 
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1 right-1">
          <Leaf className="w-3 h-3 text-green-600" />
        </div>
      </div>
      
      <h4 className="font-semibold text-gray-900 mb-2 text-xs">
        {plant.name}
      </h4>
      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-500 text-xs">Origin:</span>
          <span className="font-medium text-gray-700 text-xs truncate ml-1">{plant.origin}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sun className="w-2 h-2 text-yellow-500 mr-1" />
            <span className="text-gray-500 text-xs">Light:</span>
          </div>
          <span className="font-medium text-gray-700 text-xs">{plant.light}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Zap className="w-2 h-2 text-purple-500 mr-1" />
            <span className="text-gray-500 text-xs">Difficulty:</span>
          </div>
          <span className={`px-1 py-0.5 rounded text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
            {plant.difficulty}
          </span>
        </div>
      </div>
    </div>  );
};

// Plant Subcategory Component
const PlantSubcategory = ({ subcategory, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-4 py-3 bg-green-50 text-left"
    >
      <span className="font-semibold text-green-800">{subcategory.type}</span>
      <div className="flex items-center justify-between">
        <span className="text-xs text-green-600 mr-2">
          {subcategory.plants.length} species
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-green-600 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>
    </button>
    {isOpen && (
      <div className="px-4 py-4 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subcategory.plants.map((plant, plantIndex) => (
            <PlantCard key={plantIndex} plant={plant} />
          ))}
        </div>
      </div>
    )}
  </div>
);

// Required Items Dropdown Component
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

  return (    <div className="space-y-3">
      {requiredItems.map((category, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleCategory(index)}
            className="w-full px-4 py-3 bg-gray-50 flex items-center justify-between text-left"
          >
            <span className="font-semibold text-gray-900">{category.category}</span>
            <ChevronDown 
              className={`w-5 h-5 text-gray-500 ${openCategories[index] ? 'rotate-180' : ''}`} 
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
                /* Handle regular items with ItemCard */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.items?.map((item, itemIndex) => (
                    <ItemCard key={itemIndex} item={item} category={category.category} />
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
  const service = getServiceById(id);  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-emerald-50 pt-16">
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

  const IconComponent = service.icon;  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 pt-16 relative">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-teal-200 rounded-full blur-2xl"></div>
      </div>{/* Minimalist Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={() => navigate('/services')}
            className="inline-flex items-center text-emerald-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-lg mr-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-emerald-200 font-medium text-sm uppercase tracking-wide">
                  {service.category}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                {service.name}
              </h1>
              
              <p className="text-emerald-100 mb-6 text-lg">
                {service.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-emerald-200 text-sm">Duration</span>
                  <p className="text-white font-semibold">{service.duration}</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <span className="text-emerald-200 text-sm">Maintenance</span>
                  <p className="text-white font-semibold">{service.maintenance}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Get Quote
                </Link>
                <Link 
                  to="/contact"
                  className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
              {/* Image */}
            <div>
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  // Fallback to placeholder if service image fails to load
                  e.target.src = placeholderImg;
                }}
              />
            </div>
          </div>
        </div>
      </div>{/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">            {/* Service Details */}
            <div className="bg-white rounded-lg shadow border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Service</h2>
              <p className="text-gray-700 text-lg mb-8">
                {service.details}
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>            {/* Required Items */}
            {service.requiredItems && service.requiredItems.length > 0 && (
              <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Items & Materials</h3>
                <p className="text-gray-600 mb-4">
                  Here's a comprehensive list of items and materials needed for your {service.name.toLowerCase()} project:
                </p>
                <RequiredItemsDropdown requiredItems={service.requiredItems} />
              </div>
            )}
          </div>          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow border border-gray-200 p-8 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Details</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-gray-900 capitalize">{service.category}</span>
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
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-center block mb-4"
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
