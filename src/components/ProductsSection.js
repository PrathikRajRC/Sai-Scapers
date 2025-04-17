import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; // Correct close icon import from react-icons/io5
import { FaBox, FaTools, FaCrown } from 'react-icons/fa';

// Modal component to display the product details
const ProductModal = ({ product, onClose }) => {
  if (!product) return null; // Don't render if there's no product

  return (
    <div className="product-modal-overlay">
      <div className="product-modal-content">
        {/* Close Button */}

        <button onClick={onClose} className="product-modal-close" aria-label="Close modal">
          <IoClose size={30} />
        </button>

        {/* Product Title and Icon */}

        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

        {/* Product Image */}
        <img src={product.image} alt={product.title} className="product-modal-image" />

        {/* Product Description */}
        <p className="text-gray-700 mb-6">{product.description}</p>

        {/* Key Features */}
        <h4 className="text-xl font-semibold mb-4 text-center">✨ Key Features</h4>
        <ul className="features space-y-2">
          {product.features && product.features.length > 0 ? (
            product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                {feature}
              </li>
            ))
          ) : (
            <li>No features available</li> // Fallback if no features exist
          )}
        </ul>

        {/* Product Price */}
        <p className="price text-2xl font-bold mt-6">₹{product.price}</p>
      </div>
    </div>
  );
};

// Product Card for displaying product info
const ProductCard = ({ id, title, description, price, image, features, onClick }) => (
  <div className="product-card">
    <div className="product-image-placeholder">
      <img src={image} alt={title} />
      <div className="product-icon-placeholder">
        {id === 1 && <FaBox />}
        {id === 2 && <FaTools />}
        {id === 3 && <FaCrown />}
      </div>
    </div>
    <div className="product-content">
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">₹{price}</p>
      <button 
        onClick={() => onClick({ id, title, description, price, image, features })} 
        className="btn btn-primary w-full"
      >
        Explore More
      </button>
    </div>
  </div>
);

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: '🌱 Starter Package',
      description: 'Perfect for beginners who want to start their aquascaping journey. Includes essential equipment and beginner-friendly plants to create your first underwater masterpiece.',
      price: '999',
      image: 'https://cdn.pixabay.com/photo/2024/06/26/23/36/package-8856091_640.png',
      features: [
        '🎯 Beginner-friendly setup',
        '💰 Budget-friendly investment',
        '⚡ Quick and easy installation',
        '🌿 Basic plant collection',
        '📚 Starter guide included'
      ],
    },
    {
      id: 2,
      title: '✨ Advanced Setup',
      description: 'For enthusiasts ready to take their aquascaping to the next level. Includes premium equipment and a diverse selection of plants to create stunning underwater landscapes.',
      price: '2999',
      image: 'https://cdn.pixabay.com/photo/2024/06/26/23/36/package-8856091_640.png',
      features: [
        '💎 High-quality equipment',
        '🌺 Diverse plant collection',
        '🎨 Complex design capabilities',
        '🔧 Advanced maintenance tools',
        '📖 Expert guide included'
      ],
    },
    {
      id: 3,
      title: '👑 Professional Kit',
      description: 'Our premium offering for serious aquascapers. Includes top-tier equipment, rare plants, and personalized design consultation to create your dream underwater world.',
      price: '5999',
      image: 'https://cdn.pixabay.com/photo/2024/06/26/23/36/package-8856091_640.png',
      features: [
        '💎 Premium equipment',
        '🌿 Rare plant collection',
        '👨‍🎨 Personalized consultation',
        '⚙️ Professional maintenance tools',
        '📚 Comprehensive guide included'
      ],
    },
    // {
    //   id: 4,
    //   title: 'Professional Kit',
    //   description: 'Our top-tier offering for serious aquascaper. Includes high-end equipment, rare plants, and personalized design consultation.',
    //   price: '499.99',
    //   image: 'https://via.placeholder.com/250', // Placeholder image
    //   icon: 'https://via.placeholder.com/60', // Example icon image URL
    //   features: ['Top-tier equipment', 'Rare plant collection', 'Personalized consultation'],
    // },
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

  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-green-800">
          Our Products
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Discover our range of aquascaping products and services designed to transform your space into a thriving underwater ecosystem. We offer three tiers to suit different needs and budgets.
        </p>
        <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-12 w-full box-border">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={handleProductClick} // Open modal on click
            />
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        product={selectedProduct}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProductsSection;
