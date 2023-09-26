import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { Autoplay, Pagination } from 'swiper/modules';

export const CollectionCarousel = () => {



    let slidesPerView = 2;
    
    if (window.innerWidth >= 768) {
      slidesPerView = 3;
    }
  
  return (

    
        <Swiper
      grabCursor={true}
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      pagination={false} // Establecer la propiedad pagination en false
      modules={[Pagination, Navigation]}
      autoplay={{
        delay: 1000, // Ajusta el retraso deseado
        disableOnInteraction: false,
      }}
      loopedSlides={4}
      slidesPerView={slidesPerView}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
           
            <SwiperSlide className="flex flex-col gap-3"><div className="w-full h-60"><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/735252/pexels-photo-735252.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div>  <span className="border-b-4 border-solid border-black w-16">Necklace</span></SwiperSlide>
         
          <SwiperSlide className="flex flex-col gap-3" ><div className="w-full h-60 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/7992686/pexels-photo-7992686.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /></div>  <span className="border-b-4 border-solid border-black w-16  ">Ring</span> </SwiperSlide>
         
          <SwiperSlide className="flex flex-col gap-3" ><div className="w-full h-60 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/15856345/pexels-photo-15856345/free-photo-of-lujo-joyeria-collar-precioso.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /><span className=" w-16 border-b-4 border-solid border-black p-1 ">Ring</span></div></SwiperSlide>
          
          <SwiperSlide className="flex flex-col gap-3" ><div className="w-full h-60 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/15856345/pexels-photo-15856345/free-photo-of-lujo-joyeria-collar-precioso.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /><span className="w-16  border-b-4 border-solid border-black ">Bracelet</span></div></SwiperSlide>
         
          <SwiperSlide className="flex flex-col gap-3" ><div className="w-full h-60 "><img className="w-full h-full object-cover" src="https://images.pexels.com/photos/9953654/pexels-photo-9953654.jpeg?auto=compress&cs=tinysrgb&w=800" alt=""  /><span className="border-b-4 border-solid border-black w-16 ">Ring</span></div></SwiperSlide>
         
          </Swiper>
          
          )
    
        
}
