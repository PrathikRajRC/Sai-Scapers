import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5'; // Correct close icon import from react-icons/io5

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

        <h2 >{product.title}</h2>

        {/* Product Image */}
        <img src={product.image} alt={product.title} className="product-modal-image" />

        {/* Product Description */}
        <p>{product.description}</p>

        {/* Key Features */}
        <h4 className="text-xl font-semibold text-center">Key Features</h4>
        <ul className="features">
          {product.features && product.features.length > 0 ? (
            product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))
          ) : (
            <li>No features available</li> // Fallback if no features exist
          )}
        </ul>

        {/* Product Price */}
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
};

// Product Card for displaying product info
const ProductCard = ({ id, title, description, price, image, icon, features, onClick }) => (
  <div className="product-card">
    <img src={image} alt={title} className="product-image" />
    <div className="product-info">
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      {/* Trigger the modal with product data */}
      <button onClick={() => onClick({ id, title, description, price, image, icon, features })} className="btn btn-primary">
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
      title: 'Starter Package',
      description: 'Perfect for beginners. Includes basic equipment and plants to get you started on your aquascaping journey.',
      price: '99.99',
      image: 'https://via.placeholder.com/250', // Placeholder image
      icon: 'https://via.placeholder.com/60', // Example icon image URL
      features: ['Beginner-friendly', 'Affordable', 'Easy to set up'],
    },
    {
      id: 2,
      title: 'Advanced Setup',
      description: 'For enthusiasts looking to create more complex aquascapes. Includes premium equipment and a wider variety of plants.',
      price: '249.99',
      image: 'https://via.placeholder.com/250', // Placeholder image
      icon: 'https://via.placeholder.com/60', // Example icon image URL
      features: ['High-quality equipment', 'Diverse plant collection', 'Suitable for complex designs'],
    },
    {
      id: 3,
      title: 'Professional Kit',
      description: 'Our top-tier offering for serious aquascapers. Includes high-end equipment, rare plants, and personalized design consultation.',
      price: '499.99',
      image: 'https://via.placeholder.com/250', // Placeholder image
      icon: 'https://via.placeholder.com/60', // Example icon image URL
      features: ['Top-tier equipment', 'Rare plant collection', 'Personalized consultation'],
    },
    // {
    //   id: 4,
    //   title: 'Professional Kit',
    //   description: 'Our top-tier offering for serious aquascapers. Includes high-end equipment, rare plants, and personalized design consultation.',
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
        <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
