// Cart.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {

  const [cart, setCart] = useState([]);

  console.log(cart)
  const calculateTotalPrice = (cartItems) => {

    useEffect(() => {
      // Cargar los datos del carrito desde el almacenamiento local al montar el componente
      const cartData = localStorage.getItem('cartItems');
      if (cartData) {
        const parsedCartData = JSON.parse(cartData);
        // Actualizar el estado del carrito con los datos del almacenamiento local
        setCart(parsedCartData);
      }
    }, []);
  
    
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.prices * item.quantity;
    }
    return totalPrice;
  };
  
  
  
  
  return (
    <>
      {/* Iterate over cartItems and display each product */}
      {cart.map((item) => (
        <div key={item.id} className="flex p-2 bg-gray-400 cursor-pointer w-full hover:bg-gray-300 hover:scale-105">
          {/* Display product details from item */}
          <div className="flex w-full">
            <div id="cart-image">
              <div className="w-24 h-full overflow-hidden" data-mdb-ripple="true">
              <img className="object-cover w-full h-50" src={item.img} alt={item.name} />
              </div>
            </div>
            <div className="flex flex-col justify-between w-3/4 p-2">
              <h2 className="w-full text-center text-2xl">{item.name}</h2>
              <div className="flex mt-3 justify-around w-full">
                <button className="p-1 bg-blue-600 text-white rounded-lg text-center">comprar</button>
                <button onClick={() => removeFromCart()} className="p-1 bg-blue-600 text-white rounded-lg text-center">eliminar</button>
              </div>
            </div>
            <div className="flex flex-col p-2 w-1/4">
              <p className="w-full text-center">X{item.quantity}</p>
              <h3 className="flex items-end w-full text-center">Total: {item.prices * item.quantity}</h3>
            </div>
          </div>
        </div>
      ))}

<button className="flex justify-center m-auto bg-blue-500 text-white w-1/2 rounded-lg p-3">
  <Link to="/BeltranJewelry/checkout">
    Comprar Todo Total: ${calculateTotalPrice(cartItems)} USD
  </Link>
</button>
    </>
  );
}

export default Cart;
