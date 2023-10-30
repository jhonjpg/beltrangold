

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

function ProductDetail({ jewerlrys, route, addToCart }) {



  const { t } = useTranslation('translation');
  const { productName } = useParams();
  const product = jewerlrys.find((jewerlry) => jewerlry.name === productName);



console.log(product)



  let slidesPerView = 2;

  if (window.innerWidth >= 768) {
    slidesPerView = 4;
  }

  const [swiperRef, setSwiperRef] = useState(null);

  if (!product) {
    return <div className="w-full h-screen flex flex-wrap justify-center items-center"><p className="text-4xl w-full text-center">Producto no encontrado</p> <Link to="/beltrangold/" className="text-2xl p-3 rounded-lg block text-center">Back</Link>  </div> ;
  }

  return (
    <>
    <div className="min-h-screen p-4 pt-20 md:p-8 oro">
      <div className=" shadow-lg flex flex-col md:flex-row max-w-screen-xl mx-auto space-y-4 md:space-x-8 p-4 md:p-8 justify-center items-center md:mt-20">
        {/* Product Image */}
        <div className="w-full md:w-1/2"    onClick={() => {
        setLightboxOpen(true);
        setLightboxImage(product.img);
      }}
      style={{ cursor: 'pointer' }}
    >
          <img
            className="w-full h-auto md:h-96 object-cover"
            src={'../' + product.img}
            alt={product.name}
          />
        </div>

        {/* Additional Images */}
        <div className="w-1/2 md:w-1/2">
          <div className=" flex  flex-wrap flex gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={'../' + image}
                alt={`Imagen ${index}`}
                className="w-full h-auto md:w-32 md:h-40 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full flex flex-col space-y-4 md:space-y-0 md:space-x-4 gap-5">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl text-green-600 font-semibold">
          {t('Precio')}: {product.prices} USD
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full md:w-28"
            >
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
    className="w-10 text-black" role="img" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512">
    <path  fill="white"
      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
    </path>
  </svg>            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full md:w-28"
              onClick={() => addToCart(product)}
            >
<Link to="/beltrangold/checkout" className="text-white p-3 rounded-lg block text-center">
{t('buy')}
      </Link>            </button>
          </div>
        </div>
      </div>

      <div className="oro p-4 md:p-8 mt-8">
        <h2 className="text-2xl md:text-3xl">Productos Similares</h2>
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
          className="mySwiper w-full h-72"
        >
          {jewerlrys.map((jewerlry) => (
            <SwiperSlide
              key={jewerlry.id}
              className="w-full md:w-2/4 h-72 md:h-52 flex flex-col justify-between p-4 md:p-2"
            >
              <Link
                to={`/beltrangold/${route}/${jewerlry.name}`}
                className="w-full h-44 md:h-72 overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover"
                  src={'../' + jewerlry.img}
                  alt=""
                />
              </Link>
              <div className="h-16 w-full flex flex-col items-start">
                <span className="text-lg md:text-xl text-black">{jewerlry.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>



</>
  );
}

export default ProductDetail;
