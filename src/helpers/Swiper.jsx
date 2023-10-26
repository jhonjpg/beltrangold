import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
const Swiper = () => {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      

      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/177332/pexels-photo-177332.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4735888/pexels-photo-4735888.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div></SwiperSlide>
      
      </Swiper>  )
}

export default Swiper