// src/pages/Products.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: '1',
    name: 'Golden Hoop Earrings',
    image: 'https://via.placeholder.com/300x200?text=Earrings',
    price: 999,
  },
  {
    id: '2',
    name: 'Rose Gold Necklace',
    image: 'https://via.placeholder.com/300x200?text=Necklace',
    price: 1299,
  },
  {
    id: '3',
    name: 'Diamond Ring',
    image: 'https://via.placeholder.com/300x200?text=Ring',
    price: 2499,
  },
];

function Products() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-pink-700 text-center mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
