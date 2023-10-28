import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


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
        <SwiperSlide><Link to="/beltrangold/ring/14k%20Gold%20Iced-Out%20'R'%20RING"> <div className="w-full h-72	  "><img className="w-full h-full object-cover" src="../img/rings/bearring1.jpeg" alt=""  /></div></Link></SwiperSlide>
      <SwiperSlide><Link to="/beltrangold/pendant/14k%20Gold%20Classic%20Cross%20Pendant"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/boy1.jpeg" alt=""  /></div></Link></SwiperSlide>
      <SwiperSlide><Link to="/beltrangold/pendant/14k%20Gold%20Classic%20Jesus%20Pendant"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/men1.JPG" alt=""  /></div></Link></SwiperSlide>
      <SwiperSlide><Link to="/beltrangold/pendant/14k%20Gold%20Quincea%C3%B1era%20Bracelet"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/quinse1.jpeg" alt=""  /></div></Link></SwiperSlide>
      
      <SwiperSlide><Link to="/beltrangold/bracelet/14k%20Gold%20Multi%20Golds%20Flower%20Bracelet"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/bracelet/flowbracelet1.jpeg" alt=""  /></div></Link></SwiperSlide>
      <SwiperSlide><Link to="/beltrangold/chain/14k%20Gold%20Minion%20Character%20Chain"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/chain/minium1.jpeg" alt=""  /></div></Link></SwiperSlide>
      <SwiperSlide><Link to="/beltrangold/bracelet/Classic%2014k%20Gold%208-inch%20Cuban%20Bracelet"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/bracelet/14kbracelet1.JPG" alt=""  /></div></Link></SwiperSlide>
      <SwiperSlide><Link to="/beltrangold/pendant/14k%20Gold%20Dominican%20Republic%20Pendant"> <div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/dominicanrepublic1.jpeg" alt=""  /></div></Link></SwiperSlide>
      

      <SwiperSlide>  <Link to="/beltrangold/pendant/14k%20Gold%20Blue%20Jade%20Buddha%20Pendant"><div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/bluefat1.jpeg" alt=""  /></div>  </Link></SwiperSlide>
      <SwiperSlide>  <Link to="/beltrangold/pendant/14k%20Gold%20Colombia%20Pendant%20X2"><div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/colombia1.jpeg" alt=""  /></div>  </Link></SwiperSlide>
      <SwiperSlide>  <Link to="/beltrangold/chain/14k%20Gold%2015-inch%20Unique%20Texture%20Link%20Chain"><div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/chain/chain14k1.jpeg" alt=""  /></div>  </Link></SwiperSlide>
      <SwiperSlide>  <Link to="/beltrangold/pendant/14k%20Gold%20Iced-Out%20'F'%20Pendant"><div className="w-full h-72 "><img className="w-full h-full object-cover" src="../img/pendant/f1.JPG" alt=""  /></div>  </Link></SwiperSlide>
      
      </Swiper>
      
      )
}
