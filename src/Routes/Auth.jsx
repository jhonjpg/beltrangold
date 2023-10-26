import React, { useReducer, useRef, useState } from 'react';
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

  const [itemsAdded, setItemsAdded] = useState(0); // Initialize the count of items added


  const addToCart = (product) => {
    // Ensure the product object includes the 'price' property
      dispatch({ type: TYPES.ADD_TO_CART, payload: product });
      console.log("Item added to the cart");
  
      // Increment the count of items added
      setItemsAdded(itemsAdded + 1);
   
  };
  
  const removeFromCart = (product) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART, payload: product });
    console.log("Item removed from the cart");
  
    // Decrement the count of items added
    setItemsAdded(itemsAdded - 1);
  };
  
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
    console.log("Cart cleared");
  
    // Reset the count of items added to 0
    setItemsAdded(0);
  };
  
  


  

  return (
    <BrowserRouter>
      <ScrollTop />
      <Navbar
  cartItems={state.cartItems} // Pasar la lista de productos en el carrito desde el estado
  CLEAR_CART={clearCart}
        removeFromCart={removeFromCart}
        itemsAdded={itemsAdded}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/BeltranJewelry/" element={<Home />} />
        <Route path="/BeltranJewelry/about" element={<About />} />
        <Route path="/BeltranJewelry/ring" element={<Ring />} />
        <Route
          path="/BeltranJewelry/ring/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.BeltranCo.ring}
              route="ring"
              addToCart={addToCart}
            />
          }
        />
        <Route path="/BeltranJewelry/pendant" element={<Pendant />} />
        <Route
          path="/BeltranJewelry/pendant/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.BeltranCo.pendant}
              route="Pendant"
              addToCart={addToCart}
            />
          }
        />
        <Route path="/BeltranJewelry/chain" element={<Chain />} />
        <Route
          path="/BeltranJewelry/chain/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.BeltranCo.chain}
              route="chain"
              addToCart={addToCart}
            />
          }
        />


        <Route path="/BeltranJewelry/bracelet" element={<Bracelet />} />
        <Route
          path="/BeltranJewelry/bracelet/:productName"
          element={
            <ProductDetail
              jewerlrys={pruduct.BeltranCo.bracelet}
              route="bracelet"
              addToCart={addToCart}
            />
          }
        />
        <Route path="/BeltranJewelry/contact" element={<Contact />} />

        <Route path="/BeltranJewelry/checkout"     element={<CartPaypal cartItems={state.cartItems}/>}></Route> 


        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Auth;
