import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';



import { Autoplay, Pagination } from 'swiper/modules';

export const CollectionCarousel = () => {



    let slidesPerView = 2;
    
    if (window.innerWidth >= 768) {
      slidesPerView = 3;
    }
  
  return (

    
        <Swiper
      grabCursor={true}
      loop={true}
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      pagination={false} // Establecer la propiedad pagination en false
      modules={[Pagination, Navigation]}
      autoplay={{
        delay: 3000, // Ajusta el retraso deseado
        disableOnInteraction: false,
      }}
      loopedSlides={3}
      slidesPerView={slidesPerView}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
           
            <SwiperSlide className="flex flex-col gap-3"><Link to="/BeltranCo/chain"><div className="w-full h-60"><img className="w-full h-full object-cover" src="./img/chain/chaingrand1.jpeg" alt=""  /></div>  <span className="border-b-4 border-solid border-black w-16">Chain</span></Link></SwiperSlide>
         
          <SwiperSlide className="flex flex-col gap-3" ><Link to="/BeltranCo/pendant"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/pendant/bear1.jpeg" alt=""  /></div>  <span className="border-b-4 border-solid border-black w-16  ">Pendant</span> </Link></SwiperSlide>
         
          <SwiperSlide className="flex flex-col gap-3" ><Link to="/BeltranCo/set"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/set/IMG_4615.jpeg" alt=""  /><span className=" w-16 border-b-4 border-solid border-black p-1 ">JEWELRY SET</span></div></Link></SwiperSlide>
          
          <SwiperSlide className="flex flex-col gap-3" ><Link to="/BeltranCo/bracelet"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/bracelet/14kbracelet1.JPG" alt=""  /><span className="w-16  border-b-4 border-solid border-black ">Bracelet</span></div></Link></SwiperSlide>
         
          <SwiperSlide className="flex flex-col gap-3" ><Link to="/BeltranCo/ring"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/rings/heartRing3.jpeg" alt=""  /><span className="border-b-4 border-solid border-black w-16 ">Ring</span></div></Link></SwiperSlide>
         
          </Swiper>
          
          )
    
        
}
