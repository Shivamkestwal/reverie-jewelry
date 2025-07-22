import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#f8e1e7', textAlign: 'center' }}>
      <h1>Reverie Jewelry</h1>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/products" style={{ margin: '0 10px' }}>Products</Link>
        <Link to="/checkout" style={{ margin: '0 10px' }}>Checkout</Link>
        <Link to="/reviews" style={{ margin: '0 10px' }}>Reviews</Link>
	<Link to="/cart" className="hover:text-pink-500">Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
