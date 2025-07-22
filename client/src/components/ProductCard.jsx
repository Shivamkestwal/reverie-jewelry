// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 text-center">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold text-pink-700">{product.name}</h3>
      <p className="text-gray-600">₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="inline-block mt-3 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        View
      </Link>
    </div>
  );
}

export default ProductCard;
