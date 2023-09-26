import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from '../Pages/Home';
import ScrollTop from '../helpers/ScrollTop';
import Navbar from '../components/Navbar';
import PageNotFound from '../Pages/PageNotFound';
import Rings from '../Pages/Rings';
import Bracelet from '../Pages/Bracelet';
import Necklace from '../Pages/Necklace';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Footer from '../Pages/Footer';
import ProductDetail from '../components/ProductDetails';
import es from '../18next/es.json';



const Auth = () => {

  const pruduct = es


  
  return (
    <>


    <BrowserRouter>

    <ScrollTop/>

    <Navbar/>

      <Routes>

      <Route index element={<Home />}></Route>
      <Route path="/beltranJewerly/" element={<Home />}></Route>
      <Route path="/beltranJewerly/about" element={<About />}></Route>
      <Route path="/beltranJewerly/rings" element={<Rings />}></Route>
      <Route path="/beltranJewerly/rings/:productName" element={< ProductDetail jewerlrys={pruduct.rings}   route="rings"/>}></Route>
      <Route path="/beltranJewerly/bracelet" element={<Bracelet />}></Route>
      <Route path="/beltranJewerly/bracelet/:productName" element={< ProductDetail jewerlrys={pruduct.bracelet} route="bracelet"/>}></Route>
      <Route path="/beltranJewerly/charms" element={<Bracelet />}></Route>
      <Route path="/beltranJewerly/necklace" element={<Necklace />}></Route>
      <Route path="/beltranJewerly/necklace/:productName" element={< ProductDetail jewerlrys={pruduct.necklace} route="necklace"/>}></Route>
      <Route path="/beltranJewerly/contact" element={<Contact />}></Route>


        
        <Route path="*" element={<PageNotFound />}></Route>


      </Routes>

<Footer/>


    </BrowserRouter>



  </>
)
}

export default Auth