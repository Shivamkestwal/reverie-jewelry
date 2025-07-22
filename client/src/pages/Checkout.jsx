import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = () => {
    alert('🎉 Order placed successfully!');
    // You can later route to a "Thank You" page or clear the cart
  };

  return (
    <div className="checkout-page p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Checkout</h2>
      
      {/* Shipping Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <div className="grid gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 border rounded-lg"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Shipping Address"
            className="p-3 border rounded-lg"
            rows={3}
            value={formData.address}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 border rounded-lg"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Product 1 (Qty 1)</span>
          <span>₹799</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Product 2 (Qty 2)</span>
          <span>₹1,398</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹2,197</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
