import React, { useReducer, useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import ScrollTop from '../helpers/ScrollTop';
import Navbar from '../components/Navbar';
import PageNotFound from '../Pages/PageNotFound';
import Ring from '../Pages/Ring';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Footer from '../Pages/Footer';
import ProductDetail from '../components/ProductDetails';
import es from '../18next/es.json';
import { TYPES } from '../cart/ShoppingAction';
import shoppingReducer, { shoppingInitial } from '../cart/ShoppingReducer'; // Assuming you have your reducer defined properly
import { loadCartFromLocalStorage } from '../cart/ShoppingReducer'; // Ajusta la ruta según la ubicación real

import Pendant from '../Pages/Pendant';
import CartPaypal from '../cart/CartPaypal';
import Chain from '../Pages/Chain';
import Bracelet from '../Pages/Bracelet';
import AllProducts from '../Pages/AllProducts';
import { useTranslation } from 'react-i18next';
import StripeContain from '../Payment/StripeContain';
import axios from 'axios';
import ProductList from '../helpers/ProductList';
import Success from '../Payment/Success';
import Cart from '../cart/Cart';
import StripeCartPay from '../Payment/StripeCartPay';


const Auth = () => {

  const { t } = useTranslation();

 
  const [state, dispatch] = useReducer(shoppingReducer, {
    ...shoppingInitial,
    cartItems: loadCartFromLocalStorage(), // Inicializa cartItems con los datos del localStorage
});

  const{cartItems} = state

  console.log(cartItems,"raro e")

// Ejemplo de cómo usar cartItems en una función
const handleSomething = () => {
  if (Array.isArray(cartItems)) {
    // Hacer algo con cartItems aquí
  } else {
    console.error("cartItems is not defined or not an array");
  }
};


  const [pendantData, setPendantData] = useState({});
  const [chainData, setChainData] = useState({});
  const [ringnData, setRingData] = useState({});
  const [braceletnData, setbraceletData] = useState({});

  const [itemsAdded, setItemsAdded] = useState(0);

  useEffect(() => {
    fetchInitialState();
    const savedItemsAdded = localStorage.getItem('itemsAdded');
    if (savedItemsAdded) {
      setItemsAdded(parseInt(savedItemsAdded));
    }
  }, []);



  const fetchInitialState = async () => {
    try {
      const [pendantResponse, chainResponse, ringResponse, braceletResponse] = await Promise.all([
        axios.get('http://localhost:3002/pendant'),
        axios.get('http://localhost:3002/chain'),
        axios.get('http://localhost:3002/ring'),
        axios.get('http://localhost:3002/bracelet')
      ]);

      if (pendantResponse.data) {
        setPendantData(pendantResponse.data);
      }

      if (chainResponse.data) {
        setChainData(chainResponse.data);
      }

      if (ringResponse.data) {
        setRingData(ringResponse.data);
      }

      if (braceletResponse.data) {
        setbraceletData(braceletResponse.data);
      }

      // Dispatch action to update initial state in reducer
      dispatch({
        type: TYPES.UPDATE_INITIAL,
        payload: {
          ring: ringResponse.data,
          pendant: pendantResponse.data,
          chain: chainResponse.data,
          bracelet: braceletResponse.data,
          cartItems:[]
        },
      });
    } catch (error) {
      console.error('Error fetching initial state:', error);
    }
  };


  useEffect(() => {
    fetchInitialState();
  }, []);


  console.log(itemsAdded, "tu malditasa mader")



  const pruduct = t('BeltranCo', { returnObjects: true });


 

  const addToCart = async (product) => {
    const isProductExist = cartItems.some(item => item.id === product.id);
    if (!isProductExist) {
      dispatch({ type: TYPES.ADD_TO_CART, payload: product });
      const updatedItemsAdded = itemsAdded + 1;
      setItemsAdded(updatedItemsAdded); // Incrementa itemsAdded solo si el producto no existe en el carrito
      saveItemsAddedToLocalStorage(updatedItemsAdded); // Guarda itemsAdded en el almacenamiento local
    } else {
      console.log('Product already exists in the cart'); // Opcional: mostrar un mensaje de que el producto ya existe
    }
  };

  useEffect(() => {
  
    fetchInitialState();
    const savedItemsAdded = localStorage.getItem('itemsAdded');
    if (savedItemsAdded) {
      setItemsAdded(parseInt(savedItemsAdded));
    }
  
    return () => clearTimeout(timeoutId); // Limpiar el timeout al desmontar el componente
  }, []);
  
  
  
  const saveItemsAddedToLocalStorage = (itemsAdded) => {
    localStorage.setItem('itemsAdded', itemsAdded);
  };
  
  
  const removeFromCart = async (product) => {
    dispatch({ type: TYPES.REMOVE_FROM_CART, payload: product });

    // Actualiza productCount solo si el producto existía en el carrito antes de ser eliminado
    const isProductExist = cartItems.some(item => item.id === product.id);
    if (isProductExist) {
      const updatedItemsAdded = itemsAdded - 1;
      setItemsAdded(updatedItemsAdded); // Incrementa itemsAdded solo si el producto no existe en el carrito
      saveItemsAddedToLocalStorage(updatedItemsAdded)
    }
};

  const saveProductCountToLocalStorage = (productCount) => {
    localStorage.setItem('productCount', productCount);
  };
  

  const clearCart = async () => {
    dispatch({ type: TYPES.CLEAR_CART });
    setItemsAdded(0);
    saveItemsAddedToLocalStorage(0); // Guarda explícitamente 0 en itemsAdded en el almacenamiento local
};






  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>


      <Route
  index
  element={
    <Home
      cartItems={cartItems}
      addToCart={addToCart}
      clearCart={clearCart}
      removeFromCart={removeFromCart}
      itemsAdded={itemsAdded}
      jewerlrys={pruduct}
    />
  }
/>



        <Route path="/beltrangold/" element={<Home 

        cartItems={cartItems}
           addToCart={addToCart}
           clearCart={clearCart}
           removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} 
          jewerlrys={pruduct} />} />


        <Route path="/beltrangold/about" element={<About cartItems={cartItems}
             addToCart={addToCart}
             clearCart={clearCart}
             removeFromCart={removeFromCart}
             itemsAdded={itemsAdded}  
             />} />




        <Route path="/beltrangold/ring" element={<Ring cartItems={cartItems}
           addToCart={addToCart}
           clearCart={clearCart}
           removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} />} />



        <Route
          path="/beltrangold/ring/:productName"
          element={
            <ProductDetail
              jewerlrys={ringnData}
              route="ring"
              addToCart={addToCart}
              clearCart={clearCart}
              removeFromCart={removeFromCart} 
              cartItems={cartItems} 
              itemsAdded={itemsAdded}  
            />
          }
        />



        <Route path="/beltrangold/jewelrys" element={<AllProducts cartItems={cartItems}
            addToCart={addToCart}
            clearCart={clearCart}
            removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} />} />


        <Route path="/beltrangold/pendant" element={<Pendant cartItems={cartItems}
            addToCart={addToCart}
            clearCart={clearCart}
            removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} />} />
        <Route
          path="/beltrangold/pendant/:productName"
          element={
            <ProductDetail
              jewerlrys={pendantData}
              route="Pendant"
              addToCart={addToCart}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}  
              itemsAdded={itemsAdded}  
            />
          }
        />



        <Route path="/beltrangold/chain" element={<Chain
         cartItems={cartItems}
             addToCart={addToCart}
             clearCart={clearCart}
             removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} />} 
          />



        <Route
          path="/beltrangold/chain/:productName"
          element={
            <ProductDetail
              jewerlrys={chainData}
              route="chain"
              addToCart={addToCart}
              clearCart={clearCart}
              removeFromCart={removeFromCart} 
              cartItems={cartItems} 
              itemsAdded={itemsAdded}           />
          }
        />


        <Route path="/beltrangold/bracelet" element={<Bracelet cartItems={cartItems}
          addToCart={addToCart}
          clearCart={clearCart}
          removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} />} />



        <Route
          path="/beltrangold/bracelet/:productName"
          element={
            <ProductDetail
      jewerlrys={braceletnData}
      route="bracelet"
      addToCart={addToCart}
      clearCart={clearCart}
      removeFromCart={removeFromCart}     
       cartItems={cartItems} 
       itemsAdded={itemsAdded}  // Add this line to pass cartItems prop
    

            />
          }
        />



        <Route path="/beltrangold/contact" element={<Contact cartItems={cartItems}
           addToCart={addToCart}
           clearCart={clearCart}
           removeFromCart={removeFromCart}
          itemsAdded={itemsAdded} />} />


        
   <Route path="/beltrangold/checkout"     element={<StripeCartPay cartItems={cartItems}   removeFromCart={removeFromCart}
/>}></Route> 






        {/* 
<Route path="/beltrangold/checkout"     element={<StripeContain cartItems={cartItems}  clearCart={clearCart}
/>}></Route>  */}


        <Route path="/beltrangold/success" element={<Success cartItems={cartItems} />}></Route>


        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Auth;
