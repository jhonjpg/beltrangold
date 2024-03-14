// StripeContain.jsx
import React from 'react';

const StripeContain = ({ cartItems }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="bg-stone-800 shadow-md mb-4 p-4 rounded-lg relative">
          <div className="flex items-center justify-between mb-2">
            <img src={item.images} alt={item.name} className="w-16 h-16" />
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="text-red-500 font-semibold"
            >
              Remove
            </button>
          </div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-blue-600 w-full text-center font-semibold">Total: ${item.price.unit_amount / 100}</p>
        </div>
      ))}
    </div>
  );
};

export default StripeContain;
