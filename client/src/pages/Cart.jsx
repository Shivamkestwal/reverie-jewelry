import React from 'react';
import { Link } from 'react-router-dom';

const dummyCart = [
  {
    id: 1,
    name: 'Elegant Earrings',
    price: 999,
    quantity: 2,
    image: 'https://via.placeholder.com/100x100?text=Earrings',
  },
  {
    id: 2,
    name: 'Chic Necklace',
    price: 1499,
    quantity: 1,
    image: 'https://via.placeholder.com/100x100?text=Necklace',
  },
];

function Cart() {
  const total = dummyCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {dummyCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {dummyCart.map(item => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <div className="space-x-2">
                <button className="px-2 py-1 bg-pink-300 rounded">-</button>
                <button className="px-2 py-1 bg-pink-300 rounded">+</button>
                <button className="px-2 py-1 bg-red-400 text-white rounded">Remove</button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
            <div className="mt-4 space-x-4">
              <Link to="/products" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Continue Shopping</Link>
              <Link to="/checkout" className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
