import React, { useState, useEffect } from 'react';
import { Fish, Leaf, Droplets, TreePine, CloudRain, Bird, Waves, ChevronRight, X, ArrowRight } from 'lucide-react';
import placeholderImg from '../assets/images/acq.jpg';

// Services data
const services = [
  {
    name: 'Aquascaping',
    icon: Fish,
    category: 'aquatic',
    description: 'Breathtaking underwater worlds with custom aquariums showcasing vibrant aquatic plants and natural hardscapes.',
    details: 'Our aquascaping service transforms your aquarium into a living work of art. We carefully select and arrange aquatic plants, rocks, and driftwood to create stunning underwater landscapes. Our expert team ensures that your aquascape is not only beautiful but also sustainable and easy to maintain.',
    features: ['Custom aquarium design', 'Plant selection and arrangement', 'Hardscape installation', 'Lighting and filtration setup', 'Ongoing maintenance plans']
  },
  {
    name: 'Terrariums',
    icon: Leaf,
    category: 'terrestrial',
    description: 'Low-maintenance, beautifully crafted miniature ecosystems for your home or office.',
    details: 'Bring a piece of nature indoors with our custom terrariums. These self-contained ecosystems are perfect for homes and offices, requiring minimal care while providing maximum beauty. We create terrariums in various styles, from lush tropical forests to arid desert landscapes.',
    features: ['Custom terrarium design', 'Plant and substrate selection', 'Decorative elements', 'Care instructions', 'Maintenance kits available']
  },
  {
    name: 'Live Ponds',
    icon: Droplets,
    category: 'aquatic',
    description: 'Custom outdoor water features designed to enhance the ambiance of any outdoor space.',
    details: 'Add tranquility and natural beauty with our custom water features to your outdoor space. We design and install ponds that seamlessly integrate with your existing landscape, creating a peaceful oasis for you to enjoy.',
    features: ['Custom pond design', 'Filtration and circulation systems', 'Aquatic plant selection', 'Fish stocking options', 'Waterfall and stream features']
  },
  {
    name: 'Live Gardens',
    icon: TreePine,
    category: 'terrestrial',
    description: 'Professional landscaping services to make your greenery dreams come alive.',
    details: 'Whether you want to create an indoor jungle or transform your outdoor space, our live garden services cater to all your needs. We work with you to design and implement gardens that reflect your style and thrive in your specific environment.',
    features: ['Custom garden design', 'Plant sourcing', 'Irrigation system installation', 'Hardscaping elements', 'Seasonal maintenance plans']
  },
  {
    name: 'Paludariums',
    icon: CloudRain,
    category: 'mixed',
    description: 'Unique, mixed environments combining land and water for stunning displays.',
    details: 'Paludariums offer the best of both worlds, combining aquatic and terrestrial elements in one captivating display. Our expert designers create these complex ecosystems to showcase a diverse range of plants and animals in a harmonious, naturalistic setting.',
    features: ['Custom design', 'Plant selection', 'Water feature integration', 'Animal habitat creation', 'Specialized lighting and climate control']
  },
  {
    name: 'Aviaries',
    icon: Bird,
    category: 'terrestrial',
    description: 'Custom-designed bird habitats that ensure the wellbeing of your birds while offering functionality and charm.',
    details: 'Our custom aviaries provide a safe and enriching environment for your feathered friends while adding a unique architectural element to your space. We design aviaries that cater to the specific needs of your birds while complementing your existing decor or outdoor landscape.',
    features: ['Custom aviary design', 'Bird-safe plant selection', 'Perch and nest box installation', 'Feeding and watering systems', 'Easy-clean features']
  },
  {
    name: 'Marine Aquascapes',
    icon: Waves,
    category: 'aquatic',
    description: 'Bring the magic of the ocean into your space.',
    details: 'Experience the vibrant colors and diverse life of coral reefs in your own home or office. Our marine aquascapes are carefully designed to recreate the beauty of ocean ecosystems while ensuring a stable and thriving environment for delicate marine life.',
    features: ['Coral selection', 'Marine fish selection', 'Advanced filtration systems', 'Specialized lighting', 'Water chemistry management']
  }
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Services' },
  { id: 'aquatic', name: 'Aquatic' },
  { id: 'terrestrial', name: 'Terrestrial' },
  { id: 'mixed', name: 'Mixed Environments' }
];

// Enhanced Service Card Component with improved animations
const ServiceCard = ({ service, onClick, index }) => (
  <div
    className="group bg-gradient-to-br from-white to-green-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer relative border border-green-50/50 hover:border-green-200 animate-fadeInUp"
    onClick={() => onClick(service)}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Enhanced image treatment with hover effects */}
    <div className="relative h-60 overflow-hidden">
      <img
        src={service.image || placeholderImg}
        alt={service.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
      
      {/* Enhanced icon overlay with subtle pulse animation */}
      <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm p-2.5 rounded-full transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/25 border border-white/10 group-hover:border-white/30 shadow-lg">
        <service.icon size={22} className="text-white drop-shadow-lg group-hover:rotate-3 transition-all duration-500" />
      </div>
      
      {/* Enhanced service title overlay with improved animation */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-2xl font-semibold drop-shadow-lg font-serif mb-2 group-hover:scale-105 transition-transform origin-left duration-500">{service.name}</h3>
        <div className="w-16 h-0.5 bg-gradient-to-r from-green-400 to-green-300 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-700 delay-100"></div>
      </div>
    </div>

    {/* Redesigned content area with improved typography */}
    <div className="p-6">      
      <p className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3 mt-1 group-hover:text-gray-800 transition-colors duration-300">
        {service.description}
      </p>
      
      <div className="mt-6 flex items-center justify-end">
        <button className="flex items-center text-green-700 font-medium text-sm tracking-wide transform group-hover:-translate-y-0.5 transition-all duration-300 ease-out group-hover:text-green-800">
          <span className="relative overflow-hidden inline-block">
            <span className="relative z-10">Explore</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300" />
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
              </div>
              
              <div className="md:mb-8">
                <span className="text-green-300 text-xs font-medium tracking-widest uppercase mb-2 inline-block">7T Scapers</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-serif leading-tight">{service.name}</h2>
              </div>
            </div>
          </div>
          
          {/* Right content column with improved vertical spacing */}
          <div className="md:w-3/5 p-6 md:p-10 flex flex-col md:h-full overflow-y-auto">
            {/* Service content with better vertical rhythm */}
            <div className="mb-8 md:mb-10">
              <div className="flex items-center mb-5">
                <div className="w-1.5 h-7 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></div>
                <h3 className="text-xl text-green-800 font-serif font-medium">About This Service</h3>
              </div>
              <p className="text-gray-700 leading-relaxed md:text-lg">{service.details}</p>
            </div>
            
            {/* Premium features section with consistent spacing */}
            <div className="mb-8 md:mb-auto bg-green-50/50 p-5 md:p-6 rounded-xl border border-green-100/50">
              <div className="flex items-center mb-5">
                <div className="w-1.5 h-7 bg-gradient-to-b from-green-400 to-green-600 rounded-full mr-3"></div>
                <h3 className="text-xl text-green-800 font-serif font-medium">What We Offer</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3 text-green-600 bg-green-100/70 rounded-full p-1 group-hover:bg-green-200 transition-colors duration-300">
                      <ChevronRight size={12} />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action buttons aligned at bottom with proper spacing */}
            <div className="mt-5 md:mt-8 pt-5 border-t border-gray-100 flex flex-wrap md:flex-nowrap justify-between items-center">
              <span className="text-gray-500 text-sm font-medium mb-3 md:mb-0">Interested in this service?</span>
              <div className="flex gap-3 w-full md:w-auto justify-end">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:text-gray-800 hover:border-gray-300 font-medium text-sm"
                >
                  Close
                </button>
                <a 
                  href="#contact"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg flex items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 transform font-medium text-sm group"
                >
                  Contact Us <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
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
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Section Title with improved typography */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-tight relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-600 font-serif">Our Services</span>
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-green-400/20 via-green-500 to-green-400/20 rounded-full"></span>
          </h2>
          
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide font-light">
              We specialize in creating and maintaining breathtaking living environments tailored to your vision. 
              Our services go beyond design—we provide regular maintenance to give you a completely hassle-free experience.
            </p>
            <p className="text-green-700 font-medium italic mt-6 text-lg md:text-xl font-serif">
              Your only job? Relax and enjoy the beauty we bring to your space.
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
            <a 
              href="#contact" 
              className="relative z-10 bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-500 inline-flex items-center group-hover:-translate-y-1 transform"
            >
              Begin Your Journey 
              <ArrowRight size={20} className="ml-3 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
          
          <p className="text-green-700 mt-6 text-sm md:text-base font-medium tracking-wide font-serif">
            Transform Your Space Into A Natural Sanctuary
          </p>
        </div>
      </div>
    </section>
  );
}

// CSS keyframes for animations
// @keyframes fadeIn {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// 
// @keyframes scaleIn {
//   from { transform: scale(0.95); opacity: 0; }
//   to { transform: scale(1); opacity: 1; }
// }
// 
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }
// 
// .animate-fadeIn {
//   animation: fadeIn 0.4s forwards;
// }
// 
// .animate-scaleIn {
//   animation: scaleIn 0.4s forwards;
// }
// 
// .animate-fadeInUp {
//   animation: fadeInUp 0.5s forwards;
// }
// 
// .scrollbar-hide {
//   -ms-overflow-style: none;
//   scrollbar-width: none;
// }
// 
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }