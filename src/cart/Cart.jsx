
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [cart, setCart] = useState([]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.prices * item.quantity;
    }
    return totalPrice;
  };

  useEffect(() => {
    const cartData = localStorage.getItem('cartItems');
    if (cartData) {
      const parsedCartData = JSON.parse(cartData);
      setCart(parsedCartData);
    }
  }, []);

  const saveCartToLocalStorage = (updatedCart) => {
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };


  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
    removeFromCart(product);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="cart-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="bg-white shadow-md mb-4 p-4 rounded-lg relative">
                <div className="flex items-center justify-between mb-2">
                  <img src={"." + item.img} alt={item.name} className="w-16 h-16" />
                  <button
                    onClick={() => handleRemoveFromCart(item)}
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Price: ${item.prices}</p>
                <p>Quantity: {item.quantity}</p>
                <p className="text-blue-600 w-full text-center font-semibold">Total: ${item.prices * item.quantity}</p>

              </div>
            ))}
          <div className="w-full flex gap-3 flex-wrap justify-center  items-center flex-col absolute bottom-0 sm:flex-row sm:items-center sm:justify-between md:justify-center  items-center">
  <p className="text-xl text-center font-semibold mb-2 sm:mb-0">Total Price: ${calculateTotalPrice()}</p>

  <div className="w-full flex  justify-around">
    <button
      onClick={() => clearCart()}
      className="w-1/3 sm:w-auto bg-red-500 text-white rounded-lg p-1 mb-2 sm:mb-0"
    >
      Eliminar Todo
    </button>

    <div className="w-1/3 sm:w-auto bg-blue-500 text-white rounded-lg p-1">
      <Link to="/beltrangold/checkout" className="text-white p-3 rounded-lg block text-center">
        Checkout
      </Link>
    </div>
  </div>
</div>

          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
