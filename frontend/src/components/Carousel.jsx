

import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Carousel = () => {
  const [products, setProducts] = useState([]);

  const url = import.meta.env.BELTRANGOLD_BACKEND_URL || "http://localhost:3002"

  useEffect(() => {
    // Realiza una solicitud Axios para obtener los productos desde el localhost (ajusta la URL según tu API)
    axios.get(`${url}/jewelrys`)
      .then((response) => {

console.log(response, "la semillasasass")

        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);


  let slidesPerView = 2;

  if (window.innerWidth >= 768) {
    slidesPerView = 5;
  }

  return (
    <Swiper
      grabCursor={true}
      loop={true}
      spaceBetween={30}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={slidesPerView}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper h-96"
    >
      {products.map((product) => {
        // Obtiene el nombre dividido por espacios y toma la última palabra como productType
        const nameWords = product.name.split(' ');
        const productType = nameWords[nameWords.length - 1];

        return (
          <SwiperSlide key={product.id}>
            <Link to={`/beltrangold/${productType}/${product.name}`}>
              <div className="w-full h-72">
                <img className="w-full h-full object-cover" src={product.images} alt={product.name} />
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
