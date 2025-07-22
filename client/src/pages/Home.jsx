import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg'; // ✅ Correct path and syntax

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero bg-pink-100 p-10 text-center rounded-2xl shadow-md m-4">
        <img src={heroImage} alt="Hero" className="w-full max-h-[400px] object-cover rounded-xl mb-6" />
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Welcome to Reverie Jewelry</h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover elegant, handmade jewelry crafted with love and style.
        </p>
        <Link to="/products" className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
          Shop Now
        </Link>
      </section>

      {/* Featured Section */}
      <section className="featured-products grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white shadow rounded-xl p-4">
          <img src="https://via.placeholder.com/300x200?text=Earrings" alt="Earrings" className="w-full rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-pink-700">Elegant Earrings</h3>
          <p className="text-gray-500 text-sm">Perfect sparkle for every occasion.</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <img src="https://via.placeholder.com/300x200?text=Necklaces" alt="Necklaces" className="w-full rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-pink-700">Chic Necklaces</h3>
          <p className="text-gray-500 text-sm">Handmade with love and luxury.</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <img src="https://via.placeholder.com/300x200?text=Rings" alt="Rings" className="w-full rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-pink-700">Beautiful Rings</h3>
          <p className="text-gray-500 text-sm">Timeless pieces that speak elegance.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
