import React, { useState } from 'react';
import { FiShoppingCart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: 'AquaScape Pro Substrate',
    description: 'Premium aquarium substrate for lush plant growth',
    price: 29.99,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 2,
    name: 'LED Aquarium Light',
    description: 'Full spectrum LED light for optimal plant growth',
    price: 89.99,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 3,
    name: 'CO2 Diffuser Set',
    description: 'Complete CO2 system for enhanced plant growth',
    price: 129.99,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 4,
    name: 'Driftwood Centerpiece',
    description: 'Natural driftwood for aquascaping',
    price: 49.99,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 5,
    name: 'Aquascaping Tool Set',
    description: 'Professional-grade tools for precise aquascaping',
    price: 79.99,
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 6,
    name: 'Nano Aquarium Kit',
    description: 'Complete setup for a small aquascape',
    price: 149.99,
    image: '/placeholder.svg?height=300&width=300'
  }
];

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-green-200">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-800">{product.name}</h3>
    <p className="text-gray-600 mb-4 text-sm sm:text-base">{product.description}</p>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
      <span className="text-xl sm:text-2xl font-bold text-green-700">${product.price.toFixed(2)}</span>
      <button className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
        <FiShoppingCart className="mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const productsPerPage = 3;

  const nextProducts = () => {
    setStartIndex((prevIndex) => 
      (prevIndex + productsPerPage) % products.length
    );
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) => 
      (prevIndex - productsPerPage + products.length) % products.length
    );
  };

  const toggleShowAllProducts = () => {
    setShowAllProducts(!showAllProducts);
  };

  const visibleProducts = showAllProducts 
    ? products 
    : products.concat(products.slice(0, productsPerPage)).slice(startIndex, startIndex + productsPerPage);

  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-green-200 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-green-800">
          Our Products
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
          Discover our curated selection of high-quality aquascaping products to bring your underwater vision to life.
        </p>
        <div className="relative px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="transition-all duration-500 ease-in-out transform">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {!showAllProducts && (
            <>
              <button 
                onClick={prevProducts}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                aria-label="Previous products"
              >
                <FiChevronLeft size={24} />
              </button>
              <button 
                onClick={nextProducts}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors duration-300"
                aria-label="Next products"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <button 
            onClick={toggleShowAllProducts}
            className="bg-green-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center"
          >
            {showAllProducts ? 'Show Less' : 'View All Products'} <FiChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;