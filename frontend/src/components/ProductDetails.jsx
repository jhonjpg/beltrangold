

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import PayButton from '../Payment/PayButton';
import Navbar from './Navbar';

function ProductDetail({ cartItems, removeFromCart, clearCart, itemsAdded, jewerlrys, route, addToCart }) {


  console.log(route)

  const { t } = useTranslation('translation');
  const { productName } = useParams();
  const product = jewerlrys.find((jewerlry) => jewerlry.name === productName);


  let slidesPerView = 2;

  if (window.innerWidth >= 768) {
    slidesPerView = 4;
  }

  const [swiperRef, setSwiperRef] = useState(null);

  if (!product) {
    return <div className="w-full h-screen flex flex-wrap justify-center items-center"><p className="text-4xl w-full text-center">Producto no encontrado</p> <Link to="/beltrangold/" className="text-2xl p-3 rounded-lg block text-center">Back</Link>  </div>;
  }

  return (
    <>
      <section className="min-h-screen p-4  md:p-8 ">

      <div className="w-screen bg-red-400 fixed top-10"> 
      <Navbar cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} itemsAdded={itemsAdded}/>    
        
         </div>


<h3 className="text-white text-center w-full text-6xl pt-40">{productName}</h3>


        <div className=" shadow-lg flex flex-col md:flex-row max-w-screen-xl mx-auto space-y-4 md:space-x-8 p-4 md:p-8 justify-center items-center md:mt-20">
       
          <aside className="w-full md:w-11/12 " onClick={() => {
            setLightboxOpen(true);
            setLightboxImage(product.img);
          }}
            style={{ cursor: 'pointer' }}
          >
            <img
              className="w-full h-auto md:h-96 object-cover"
              src={product.images}
              alt={product.name}
            />
          </aside>

          {/* Additional Images */}
          <div className="w-1/2 md:w-1/2 ">
            <div className=" flex  flex-wrap flex gap-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagen ${index}`}
                  className="w-full h-auto md:w-32 md:h-40 object-cover"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <article className="w-full text-white flex flex-col space-y-4 md:space-y-0 md:space-x-4 gap-5">
            <h1 className="text-3xl md:text-4xl font-semibold mb-2">{product.name}</h1>
         
            <p className="text-xl text-start text-gray-200">{product.description}</p>
            <p className="text-2xl text-white font-bold">
             $ {product.price.unit_amount / 100} USD
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2">
            <button
  type="button"
  onClick={() => addToCart(product)}
  className="text-black p-3 bg-yellow-400  w-28 rounded-lg block text-center"
>
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="w-10 text-black" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path fill="black" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
  </svg>
</button>


<div
  className="text-black p-4 bg-yellow-400  w-28 rounded-lg block text-center"
  onClick={() => addToCart(product)}
>
  <PayButton cartItems={cartItems} />

</div>






            </div>


          </article>


        </div>

       

      </section>


      <section className="w-full z-10">

      <div className=" p-4 md:p-8 mt-8">
          <h2 className="text-2xl  text-white md:text-4xl font-bold">Productos Similares</h2>
          <Swiper
  onSwiper={setSwiperRef}
  slidesPerView={slidesPerView}
  centeredSlides={false}
  spaceBetween={30}
  pagination={{
    type: 'fraction',
  }}
  navigation={true}
  modules={[Navigation]}
  className="mySwiper w-full h-auto p-10"
>
  {jewerlrys.map((jewerlry) => (
   
      <SwiperSlide
        key={jewerlry.id} // Ensure each key is unique
        className="w-full h-96 md:overflow-hidden "
      >

<Link
      to={`/beltrangold/${route}/${jewerlry.name}`}
      className="w-2/5 h-80	 rounded-lg cursor-pointer overflow-hidden bg-white md:w-11/12 flex flex-col gap-3 mb-3"
    >
        <div className="w-full h-10/12 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={jewerlry.images}
            alt={jewerlry.name}
          />
        </div>
        <div className="h-14  w-full flex flex-col justify-evenly p-5">
          <span className="text-lg font-thin">{jewerlry.name}</span>
        </div>
        </Link>

      </SwiperSlide>
  ))}
</Swiper>
        </div>

      </section>



    </>
  );
}

export default ProductDetail;
