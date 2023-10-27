import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React, { useReducer, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Cart from '../cart/Cart';
import { useTranslation } from 'react-i18next';



function ProductDetail({jewerlrys, route, addToCart }) {

  const { t } = useTranslation('translation'); // Specify the namespace 'translation'


  

  const { productName } = useParams();
  const product = jewerlrys.find((jewerlry) => jewerlry.name === productName);

 
  let slidesPerView = 2;

  if (window.innerWidth >= 768) {
    slidesPerView = 4;
  }

  const [swiperRef, setSwiperRef] = useState(null);

  // Verificar si el producto existe
  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <>
      <div className="h-screen  oro shadow-lg flex flex-col md:flex-row max-w-screen-xl mx-auto  space-y-4 md:space-x-8 justify-center items-center">
        {/* Imagen del producto */}
        <div className="md:w-1/2 h-96">
          <img
            className="w-full h-full object-cover"
            src={product.img}
            alt={product.name}
          />
        </div>

        {/* Detalles del producto */}
        <div className="w-full flex items-center gap-2 md:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-4xl font-semibold">{product.name}</h1>
          <p className="text-lg text-gray-500">
            {product.description}
          </p>
          <p className="text-2xl text-green-600 font-semibold">
            Precio: {product.prices}
          </p>

          {/* Botón de compra */}
          <div className="flex w-full gap-3 justify-center ">
          <button
          type="button"
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 w-20"
        >
          {t('Add to Cart')} {/* Translate this button label */}
        </button>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 w-24"
              onClick={() => alert('¡Producto comprado!')}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="similares  oro flex flex-col md:flex-row max-w-screen-xl mx-auto  space-y-4 md:space-x-8 justify-center items-center">
        <span className="text-3xl">Similares</span>
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
          className="mySwiper w-full h-full"
        >
          {jewerlrys.map((jewerlry) => (
            <SwiperSlide
              key={jewerlry.id}
              className="w-2/4 h-52 flex flex-col justify-between gap-3 p-2 mb-3 md:w-1/4 h-80"
            >
              <Link
                to={`/BeltranCo/${route}/${jewerlry.name}`}
                className="w-full h-72 overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={`/${jewerlry.img}`}
                  alt=""
                />
              </Link>
              <div className="h-12 w-full flex flex-col items-start">
                <span className="w-full text-black text-xl">{jewerlry.name}</span>
                <p className="text-gray-500">{jewerlry.prices}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </>
  );
}

export default ProductDetail;
