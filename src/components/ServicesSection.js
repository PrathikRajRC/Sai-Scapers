import React, { useState } from 'react';
import { Fish, Leaf, Droplets, TreePine, CloudRain, Bird, Waves, ChevronRight, X } from 'lucide-react';

const services = [
  { 
    name: 'Aquascaping', 
    icon: Fish, 
    description: 'Breathtaking underwater worlds with custom aquariums showcasing vibrant aquatic plants and natural hardscapes.',
    details: 'Our aquascaping service transforms your aquarium into a living work of art. We carefully select and arrange aquatic plants, rocks, and driftwood to create stunning underwater landscapes. Our expert team ensures that your aquascape is not only beautiful but also sustainable and easy to maintain.',
    features: ['Custom aquarium design', 'Plant selection and arrangement', 'Hardscape installation', 'Lighting and filtration setup', 'Ongoing maintenance plans']
  },
  { 
    name: 'Terrariums', 
    icon: Leaf, 
    description: 'Low-maintenance, beautifully crafted miniature ecosystems for your home or office.',
    details: 'Bring a piece of nature indoors with our custom terrariums. These self-contained ecosystems are perfect for homes and offices, requiring minimal care while providing maximum beauty. We create terrariums in various styles, from lush tropical forests to arid desert landscapes.',
    features: ['Custom terrarium design', 'Plant and substrate selection', 'Decorative elements', 'Care instructions', 'Maintenance kits available']
  },
  { 
    name: 'Live Ponds', 
    icon: Droplets, 
    description: 'Tranquil water features designed to enhance the ambiance of any outdoor space.',
    details: "Our live ponds bring the soothing sounds and beauty of natural water features to your outdoor space. We design and install ponds that seamlessly integrate with your existing landscape, creating a peaceful oasis for you to enjoy.",
    features: ['Custom pond design', 'Filtration and circulation systems', 'Aquatic plant selection', 'Fish stocking options', 'Waterfall and stream features']
  },
  { 
    name: 'Live Gardens', 
    icon: TreePine, 
    description: 'From lush indoor greens to expansive outdoor setups, we make your greenery dreams come alive.',
    details: "Whether you're looking to create an indoor jungle or transform your outdoor space, our live garden services cater to all your needs. We work with you to design and implement gardens that reflect your style and thrive in your specific environment.",
    features: ['Custom garden design', 'Plant selection and sourcing', 'Irrigation system installation', 'Hardscaping elements', 'Seasonal maintenance plans']
  },
  { 
    name: 'Paludariums', 
    icon: CloudRain, 
    description: 'Unique, mixed environments combining land and water for stunning displays.',
    details: 'Paludariums offer the best of both worlds, combining aquatic and terrestrial elements in one captivating display. Our expert designers create these complex ecosystems to showcase a diverse range of plants and animals in a harmonious, naturalistic setting.',
    features: ['Custom paludarium design', 'Aquatic and terrestrial plant selection', 'Water feature integration', 'Animal habitat creation', 'Specialized lighting and climate control']
  },
  { 
    name: 'Aviaries', 
    icon: Bird, 
    description: 'Custom bird habitats harmonize with their surroundings while offering functionality and charm.',
    details: 'Our custom aviaries provide a safe and enriching environment for your feathered friends while adding a unique architectural element to your space. We design aviaries that cater to the specific needs of your birds while complementing your existing decor or outdoor landscape.',
    features: ['Custom aviary design', 'Bird-safe plant selection', 'Perch and nest box installation', 'Feeding and watering systems', 'Easy-clean features']
  },
  { 
    name: 'Marine Aquascapes', 
    icon: Waves, 
    description: 'Stunning saltwater environments that bring the ocean\'s wonders to your space.',
    details: 'Experience the vibrant colors and diverse life of coral reefs in your own home or office. Our marine aquascapes are carefully designed to recreate the beauty of ocean ecosystems while ensuring a stable and thriving environment for delicate marine life.',
    features: ['Custom reef design', 'Coral and fish selection', 'Advanced filtration systems', 'Specialized lighting', 'Water chemistry management']
  },
];

const ServiceCard = ({ service, onClick }) => (
  <div 
    className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-green-100 cursor-pointer"
    onClick={() => onClick(service)}
  >
    <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-600 rounded-full text-white mx-auto">
      <service.icon size={32} />
    </div>
    <h3 className="text-2xl font-semibold mb-3 text-center text-green-700">{service.name}</h3>
    <p className="text-gray-600 text-center line-clamp-3">{service.description}</p>
    <div className="mt-4 text-center">
      <span className="text-green-600 font-semibold inline-flex items-center">
        Learn More <ChevronRight size={20} className="ml-1" />
      </span>
    </div>
  </div>
);

const ServiceModal = ({ service, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      <div className="flex items-center mb-6">
        <div className="bg-green-600 rounded-full p-3 text-white mr-4">
          <service.icon size={32} />
        </div>
        <h3 className="text-3xl font-semibold text-green-700">{service.name}</h3>
      </div>
      <p className="text-gray-600 mb-6">{service.details}</p>
      <h4 className="text-xl font-semibold mb-4 text-green-700">Key Features:</h4>
      <ul className="list-disc pl-5 mb-6">
        {service.features.map((feature, index) => (
          <li key={index} className="text-gray-600 mb-2">{feature}</li>
        ))}
      </ul>
      <button 
        onClick={onClose}
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
      >
        Close
      </button>
    </div>
  </div>
);

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-green-200 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-green-800">
          Discover the World of Living Landscapes
        </h2>
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            At 7t Scapers, we specialize in creating and maintaining breathtaking living environments tailored to your vision. Our services go beyond design—we provide regular maintenance to give you a completely hassle-free experience.
          </p>
          <p className="text-2xl text-green-700 font-semibold">
            Your only job? Relax and enjoy the beauty we bring to your space.
          </p>
        </div>
        <h3 className="text-3xl font-semibold mb-12 text-center text-green-900">Our Offerings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} onClick={setSelectedService} />
          ))}
        </div>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center"
          >
            Get Started <ChevronRight size={24} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}