import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  // Placeholder product data (replace with real product fetch later)
  const product = {
    id,
    name: 'Elegant Earrings',
    image: 'https://via.placeholder.com/500x300?text=Elegant+Earrings',
    price: 1499,
    description: 'These elegant earrings are perfect for special occasions, handmade with love.',
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-xl" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-pink-700 mb-2">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">₹{product.price}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
