import React, { useReducer, useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import ScrollTop from '../helpers/ScrollTop';
import Navbar from '../components/Navbar';
import PageNotFound from '../Pages/PageNotFound';
import Ring from '../Pages/Ring';
import Necklace from '../Pages/Necklace';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Footer from '../Pages/Footer';
import ProductDetail from '../components/ProductDetails';
import es from '../18next/es.json';
import { shoppingInitial, shoppingReducer } from '../cart/ShoppingReducer';
import { TYPES } from '../cart/ShoppingAction';
import Pendant from '../Pages/Pendant';
import CartPaypal from '../cart/CartPaypal';
import Chain from '../Pages/Chain';
import Bracelet from '../Pages/Bracelet';


const Auth = () => {
  const pruduct = es

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitial);
  const productCount = state.productCount;
  const [itemsAdded, setItemsAdded] = useState(0);

  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cartItems');
    if (cartData) {
      return JSON.parse(cartData);
    }
    return [];
  };

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  

  useEffect(() => {
    // Cargar el carrito desde el almacenamiento local al montar el componente
    const cartData = loadCartFromLocalStorage();
    if (cartData) {
      dispatch({ type: TYPES.SET_CART, payload: cartData });
      setItemsAdded(cartData.length);
    }
  }, []);

  const addToCart = (product) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: product });
    setItemsAdded(itemsAdded + 1);
    // Guardar el carrito actualizado en el almacenamiento local
    saveCartToLocalStorage([...state.cartItems, product]);
  };
  
  const removeFromCart = (product) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART, payload: product });
    setItemsAdded(itemsAdded - 1);
    // Guardar el carrito actualizado en el almacenamiento local
    saveCartToLocalStorage(state.cartItems.filter(item => item.id !== product.id));
  };
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    setItemsAdded(0);
  };


  

  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar
        cartItems={state.cartItems}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        itemsAdded={itemsAdded}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/beltranco/" element={<Home />} />
        <Route path="/beltranco/about" element={<About />} />
        <Route path="/beltranco/ring" element={<Ring />} />
        <Route
          path="/beltranco/ring/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.beltranco.ring}
              route="ring"
              addToCart={addToCart}
            />
          }
        />
        <Route path="/beltranco/pendant" element={<Pendant />} />
        <Route
          path="/beltranco/pendant/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.beltranco.pendant}
              route="Pendant"
              addToCart={addToCart}
            />
          }
        />
        <Route path="/beltranco/chain" element={<Chain />} />
        <Route
          path="/beltranco/chain/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.beltranco.chain}
              route="chain"
              addToCart={addToCart}
            />
          }
        />


        <Route path="/beltranco/bracelet" element={<Bracelet />} />
        <Route
          path="/beltranco/bracelet/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.beltranco.bracelet}
              route="bracelet"
              addToCart={addToCart}
              itemsAdded={itemsAdded}

            />
          }
        />
        <Route path="/beltranco/contact" element={<Contact />} />

        <Route path="/beltranco/checkout"     element={<CartPaypal cartItems={state.cartItems}/>}></Route> 


        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Auth;
