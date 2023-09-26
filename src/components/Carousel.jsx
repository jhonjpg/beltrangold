import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export const Carousel = () => {


    let slidesPerView = 2;



  // Check if the screen width is greater than or equal to 768px (standard for tablets and desktops)
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
        <SwiperSlide><div className="w-full h-72	  "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2849742/pexels-photo-2849742.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/7992686/pexels-photo-7992686.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/15204302/pexels-photo-15204302/free-photo-of-fotografia-de-joyeria-elegante-es-lo-que-hacemos-en-the-glorious-studio.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/15856345/pexels-photo-15856345/free-photo-of-lujo-joyeria-collar-precioso.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9428776/pexels-photo-9428776.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9953655/pexels-photo-9953655.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      

      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/12359142/pexels-photo-12359142.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-72 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      
      </Swiper>
      
      )
}
