import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PayButton from '../Payment/PayButton';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {


useEffect(() => {
  console.log(cartItems, "ladron")
  
}, [cartItems])


const [cart, setCart] = useState([]);

useEffect(() => {
  // Cargar los elementos del carrito desde el almacenamiento local
  const cartData = localStorage.getItem('cartItems');
  if (cartData) {
    const parsedCartData = JSON.parse(cartData);
    setCart(parsedCartData);
  }
}, []); 
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.price.unit_amount / 100;
    }
    return totalPrice;
  };




  const handleRemoveFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart); // Guardar el nuevo 'cart' actualizado
    removeFromCart(product);
  };

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div className="container mx-auto p-4 ">
              <p className="text-2xl text-center font-semibold mb-2 ">Total Price: ${calculateTotalPrice()}</p>
      <div className="cart-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="bg-zinc-800 shadow-md mb-4 p-4 rounded-lg relative">
                <div className="flex items-center gap-2 justify-between mb-2">
                  <img src={ item.images} alt={item.name} className="w-16 h-16" />
                  <h3 className="text-lg w-1/2 font-semibold">{item.name}</h3>


                  <button
                    onClick={() => handleRemoveFromCart(item)} // Utiliza la función handleRemoveFromCart
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-gray-400 w-full text-center font-semibold">Total: ${item.price.unit_amount / 100}</p>
              </div>
            ))}
            <div className="w-full flex gap-3 p-4 m-2 flex-wrap justify-center  items-center flex-col absolute bottom-0 sm:flex-row sm:items-center sm:justify-between md:justify-center  items-center">
              <div className="w-full flex  justify-around">
                <button
                  onClick={() => clearCart()}
                  className="w-1/3 sm:w-auto border-2 border-red-400  hover:bg-red-400 border-solid text-white rounded-lg p-3 mb-2 sm:mb-0"
                >
                  Eliminar Todo
                </button>
                <div 
                  className="w-1/3 sm:w-auto border-2 border-yellow-400  hover:bg-yellow-400 hover:text-black border-solid text-white rounded-lg p-3 mb-2 sm:mb-0">
                  <PayButton cartItems={cartItems}/>
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
