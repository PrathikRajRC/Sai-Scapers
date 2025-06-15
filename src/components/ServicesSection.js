import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Fish, Leaf, Droplets, TreePine, CloudRain, Bird, Waves, ChevronRight, X, ArrowRight, Award, Star } from 'lucide-react';
import placeholderImg from '../assets/images/acq.jpg';

// Services data with enhanced professional descriptions
const services = [
  {
    name: 'Professional Aquascaping',
    icon: Fish,
    category: 'aquatic',
    price: 'Starting from ₹15,000',
    duration: '2-4 weeks',
    maintenance: 'Monthly service available',
    description: 'Award-winning aquascaping design and installation services featuring premium aquatic plants and sustainable ecosystem management.',
    details: 'Our certified aquascaping specialists create breathtaking underwater landscapes using advanced design principles and premium materials. Each aquascape is meticulously planned and executed with attention to plant compatibility, lighting requirements, and long-term sustainability. We use only the finest aquatic plants, carefully selected hardscape materials, and state-of-the-art filtration systems.',
    features: ['Professional design consultation', 'Premium plant selection & sourcing', 'Custom hardscape installation', 'Advanced lighting & filtration setup', 'Comprehensive maintenance plans', 'Water chemistry optimization', '6-month warranty included']
  },
  {
    name: 'Designer Terrariums',
    icon: Leaf,
    category: 'terrestrial',
    price: 'Starting from ₹3,500',
    duration: '1-2 weeks',
    maintenance: 'Quarterly check-ups',
    description: 'Bespoke terrarium designs crafted with precision using premium materials and sustainable practices for lasting beauty.',
    details: 'Our designer terrariums are more than decorative pieces—they are living ecosystems engineered for optimal plant health and minimal maintenance. Using scientifically-selected plant combinations and premium substrates, we create self-sustaining environments that thrive for years with minimal intervention.',
    features: ['Custom design consultation', 'Premium plant & substrate selection', 'Artistic arrangement & styling', 'Care & maintenance guides', 'Replacement guarantee', 'Seasonal refresh service', 'Corporate installation available']
  },
  {
    name: 'Luxury Water Features',
    icon: Droplets,
    category: 'aquatic',
    price: 'Starting from ₹45,000',
    duration: '3-6 weeks',
    maintenance: 'Bi-weekly service',
    description: 'High-end outdoor water installations designed to transform your landscape into a tranquil sanctuary with professional-grade systems.',
    details: 'Our luxury water features combine engineering excellence with artistic vision to create stunning focal points for your outdoor space. From koi ponds to cascading waterfalls, each installation is designed with advanced filtration, circulation, and lighting systems to ensure crystal-clear water and optimal aquatic life health.',
    features: ['Site assessment & custom design', 'Professional excavation & installation', 'Advanced filtration systems', 'LED lighting integration', 'Aquatic plant establishment', 'Fish stocking consultation', 'Comprehensive warranty & support']
  },
  {
    name: 'Landscape Architecture',
    icon: TreePine,
    category: 'terrestrial',
    price: 'Starting from ₹25,000',
    duration: '4-8 weeks',
    maintenance: 'Seasonal maintenance',
    description: 'Professional landscape design and installation services creating sustainable, beautiful outdoor environments tailored to your climate.',
    details: 'Our landscape architecture service transforms outdoor spaces into stunning, sustainable environments. We specialize in native plant selection, water-efficient irrigation, and creating gardens that thrive in local climate conditions while providing year-round visual interest and ecological benefits.',
    features: ['Professional landscape design', 'Native plant specialization', 'Irrigation system design', 'Hardscape integration', 'Soil analysis & preparation', 'Seasonal planting schedules', 'Ongoing horticultural support']
  },
  {
    name: 'Paludarium Systems',
    icon: CloudRain,
    category: 'hybrid',
    price: 'Starting from ₹35,000',
    duration: '3-5 weeks',
    maintenance: 'Monthly specialized care',
    description: 'Complex ecosystem installations combining aquatic and terrestrial elements with precision climate control and specialized lighting.',
    details: 'Paludariums represent the pinnacle of ecosystem design, combining water and land environments in perfect harmony. Our systems feature advanced climate control, specialized lighting, and carefully balanced plant and animal communities that create stunning, naturalistic displays.',
    features: ['Ecosystem design & planning', 'Climate control integration', 'Specialized lighting systems', 'Plant & animal habitat creation', 'Water feature engineering', 'Automated monitoring systems', 'Expert ecosystem management']
  },
  {
    name: 'Custom Aviaries',
    icon: Bird,
    category: 'terrestrial',
    price: 'Starting from ₹55,000',
    duration: '4-6 weeks',
    maintenance: 'Monthly health checks',
    description: 'Professional aviary design and construction with emphasis on bird welfare, safety, and aesthetic integration with your environment.',
    details: 'Our custom aviaries are designed with bird welfare as the top priority, featuring species-appropriate sizing, enrichment elements, and safety features. Each aviary is constructed using premium materials and designed to complement your outdoor space while providing an optimal environment for your feathered companions.',
    features: ['Species-specific design', 'Premium construction materials', 'Safety & enrichment features', 'Feeding & watering systems', 'Easy maintenance access', 'Weather protection systems', 'Veterinary consultation included']
  },
  {
    name: 'Marine Reef Systems',
    icon: Waves,
    category: 'aquatic',
    price: 'Starting from ₹75,000',
    duration: '4-8 weeks',
    maintenance: 'Bi-weekly expert care',
    description: 'Professional marine aquarium installations featuring live coral reefs with advanced life support systems and expert marine biology consultation.',
    details: 'Our marine reef systems bring the beauty of tropical coral reefs into your space with professional-grade life support systems, carefully selected marine life, and ongoing expert care. Each system is designed for long-term success with advanced filtration, lighting, and monitoring technology.',
    features: ['Marine biology consultation', 'Live coral selection & placement', 'Advanced life support systems', 'Specialized marine lighting', 'Water chemistry management', 'Marine livestock consultation', 'Emergency support services']
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'aquatic', name: 'Aquatic Systems' },
  { id: 'terrestrial', name: 'Terrestrial Design' },
  { id: 'hybrid', name: 'Hybrid Ecosystems' }
];

// Enhanced Service Card Component
const ServiceCard = ({ service, onClick, index }) => (
  <div
    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative border border-emerald-100/50 hover:border-emerald-200 animate-fadeInUp hover:-translate-y-1 transform"
    onClick={() => onClick(service)}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Enhanced image treatment with hover effects */}
    <div className="relative h-64 overflow-hidden">
      <img
        src={service.image || placeholderImg}
        alt={service.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
      
      {/* Enhanced icon overlay */}
      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/30 border border-white/20 shadow-lg">
        <service.icon size={24} className="text-white drop-shadow-lg" />
      </div>
      
      {/* Service title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-2xl font-bold drop-shadow-lg mb-2 group-hover:text-green-100 transition-colors duration-300">{service.name}</h3>
      </div>
    </div>

    {/* Professional content area */}
    <div className="p-6">      
      <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">
        {service.description}
      </p>
      
      {/* Service highlights */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <span className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
          <Star size={14} className="text-yellow-500" />
          <span className="text-yellow-700 font-medium">Premium Quality</span>
        </span>
        <span className="flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-full">
          <Award size={14} className="text-emerald-600" />
          <span className="text-emerald-700 font-medium">Certified</span>
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          <span className="font-medium text-gray-600">Maintenance:</span> {service.maintenance}
        </div>
        <button className="flex items-center text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors bg-emerald-50 px-3 py-1 rounded-full hover:bg-emerald-100">
          View Details
          <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </div>
);

// Enhanced Service Modal Component with premium styling and animations
const ServiceModal = ({ service, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl overflow-hidden w-full max-w-6xl max-h-[90vh] md:h-[650px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] border border-white/10 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Left image column with improved height alignment */}
          <div className="md:w-2/5 relative h-48 md:h-full overflow-hidden">
            <img
              src={service.image || placeholderImg}
              alt={service.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
            
            {/* Service branding with better vertical spacing */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
              <div className="flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-xl hover:bg-white/15 transition-colors duration-300 group">
                  <service.icon size={26} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <button
                  onClick={onClose}
                  className="bg-white/10 backdrop-blur-md p-2.5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:border-white/40 hover:rotate-90"
                  aria-label="Close modal"
                >
                  <X size={16} className="text-white" />
                </button>
              </div>                <div className="md:mb-8">
                <span className="text-emerald-300 text-xs font-medium tracking-widest uppercase mb-2 inline-block">Sai Scapers</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight">{service.name}</h2>
              </div>
            </div>
          </div>
          
          {/* Right content column with improved vertical spacing */}
          <div className="md:w-3/5 p-6 md:p-10 flex flex-col md:h-full overflow-y-auto">            {/* Service content with professional details */}            <div className="mb-8 md:mb-10">
              <div className="flex items-center mb-5">
                <div className="w-1.5 h-7 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full mr-3"></div>
                <h3 className="text-xl text-emerald-800 font-serif font-medium">Service Details</h3>
              </div>
              <p className="text-gray-700 leading-relaxed md:text-lg mb-6">{service.details}</p>
            </div>
              {/* Premium features section */}
            <div className="mb-8 md:mb-auto bg-emerald-50/50 p-5 md:p-6 rounded-xl border border-emerald-100/50">
              <div className="flex items-center mb-5">
                <div className="w-1.5 h-7 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full mr-3"></div>
                <h3 className="text-xl text-emerald-800 font-serif font-medium">Service Inclusions</h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3 text-emerald-600 bg-emerald-100/70 rounded-full p-1 group-hover:bg-emerald-200 transition-colors duration-300">
                      <ChevronRight size={12} />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
              {/* Action buttons aligned at bottom with proper spacing */}
            <div className="mt-5 md:mt-8 pt-5 border-t border-gray-100 flex flex-wrap md:flex-nowrap justify-between items-center">
              <div className="text-gray-500 text-sm font-medium mb-3 md:mb-0">
                <p>Ready to transform your space?</p>
                <p className="text-xs text-gray-400 mt-1">Free consultation • Professional installation • Ongoing support</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:text-gray-800 hover:border-gray-300 font-medium text-sm"
                >
                  Close
                </button>
                <Link 
                  to="/contact"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg flex items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 transform font-medium text-sm group hover:from-green-800 hover:to-green-700"
                >
                  Get Quote <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Services Section Component with filtering and animations
export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState('all');
  const [filteredServices, setFilteredServices] = useState(services);

  // Filter services when filter changes
  useEffect(() => {
    if (filter === 'all') {
      setFilteredServices(services);
    } else {
      setFilteredServices(services.filter(service => service.category === filter));
    }
  }, [filter]);

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-green-50 via-white to-white relative overflow-hidden">
      {/* Enhanced Background Elements with more subtle animations */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-green-100/60 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '15s'}}></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 -left-10 w-60 h-60 bg-emerald-50/50 rounded-full blur-3xl opacity-50 animate-pulse" style={{animationDuration: '12s'}}></div>
      <div className="absolute right-10 bottom-1/4 w-72 h-72 bg-green-50/40 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDuration: '20s', animationDelay: '2s'}}></div>
      
      {/* Refined Decorative Elements */}
      <div className="absolute top-20 left-40 w-24 h-24 border-4 border-green-200/20 rounded-full opacity-70"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 border-8 border-green-100/10 rounded-full opacity-60 animate-pulse" style={{animationDuration: '15s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full opacity-50 animate-ping" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">        {/* Premium Section Title with improved typography */}
        <div className="text-center mb-16 relative">          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-tight relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600 font-serif">Our Services</span>
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-green-400/20 via-green-500 to-green-400/20 rounded-full"></span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide font-light">
              We specialize in creating and maintaining breathtaking living environments tailored to your vision. 
              Our comprehensive services include expert design, premium installation, and ongoing maintenance for a completely hassle-free experience.
            </p>
            <p className="text-green-700 font-medium italic mt-6 text-lg md:text-xl font-serif">
              "Your only responsibility? Relax and enjoy the natural beauty we bring to your space."
            </p>
          </div>
        </div>

        {/* Elegant Offerings Title with refined styling */}
        <div className="text-center mb-10 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-green-300"></span>
            <span className="text-green-600 bg-green-50/70 p-2 rounded-full shadow-sm">
              <Leaf size={18} strokeWidth={2} />
            </span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-green-300"></span>
          </div>
          
          <h3 className="text-3xl font-serif font-semibold mb-3 text-center text-green-900">
            Our Offerings
          </h3>
        </div>
        
        {/* Category Filter Section - New */}
        <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide">
          <div className="inline-flex bg-green-50/80 backdrop-blur-md p-1.5 rounded-xl shadow-sm border border-green-100/50 gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  filter === category.id 
                    ? 'bg-white text-green-800 shadow-sm' 
                    : 'text-green-700 hover:bg-white/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Enhanced Card Grid with improved animations and responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full">
          {filteredServices.map((service, index) => (
            <div key={index}>
              <ServiceCard service={service} onClick={setSelectedService} index={index} />
            </div>
          ))}
        </div>

        {/* Modal rendering */}
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}

        {/* Enhanced CTA Section with more refined styling */}
        <div className="mt-28 text-center relative">
          <div className="relative inline-block group">
            {/* Improved Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-300/70 blur-2xl opacity-60 group-hover:opacity-80 transform scale-120 group-hover:scale-150 transition-all duration-1000 rounded-full"></div>
              {/* Enhanced Button with better animations */}
            <Link 
              to="/contact" 
              className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-500 inline-flex items-center group-hover:-translate-y-1 transform"
            >
              Begin Your Journey 
              <ArrowRight size={20} className="ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>
          
          <p className="text-green-700 mt-6 text-sm md:text-base font-medium tracking-wide font-serif">
            Transform Your Space Into A Natural Sanctuary
          </p>
        </div>      </div>
    </section>
  );
}