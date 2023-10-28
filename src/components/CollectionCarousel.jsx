import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




import { Autoplay, Pagination } from 'swiper/modules';

export const CollectionCarousel = () => {


  
  const { t } = useTranslation(); // Obtiene la función de traducción


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
           
            <SwiperSlide className="flex flex-col hover:text-yellow-50 gap-3"><Link to="/beltrangold/chain"><div className="w-full h-60"><img className="w-full h-full object-cover" src="./img/chain/chaingrand1.jpeg" alt=""  /></div>  <span className="border-b-4 border-solid border-black w-16 text-xl pt-2 ">{t('chain')}</span></Link></SwiperSlide>
         
          <SwiperSlide className="flex flex-col hover:text-yellow-50 gap-3" ><Link to="/beltrangold/pendant"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/pendant/bear1.jpeg" alt=""  /></div>  <span className="border-b-4 border-solid border-black w-16 text-xl pt-2  ">{t('pendant')}</span> </Link></SwiperSlide>
         
          <SwiperSlide className="flex flex-col hover:text-yellow-50 gap-3" ><Link to="/beltrangold/set"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/set/IMG_4615.jpeg" alt=""  /><span className=" w-16 border-b-4 border-solid border-black p-1 text-xl pt-2 ">{t('JEWELRY SET')}</span></div></Link></SwiperSlide>
          
          <SwiperSlide className="flex hover:text-yellow-50 flex-col gap-3" ><Link to="/beltrangold/bracelet"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/bracelet/14kbracelet1.JPG" alt=""  /><span className="w-16  border-b-4 border-solid border-black text-xl pt-2 ">{t('bracelet')}</span></div></Link></SwiperSlide>
         
          <SwiperSlide className="flex hover:text-yellow-50 flex-col gap-3" ><Link to="/beltrangold/ring"><div className="w-full h-60 "><img className="w-full h-full object-cover" src="./img/rings/heartRing3.jpeg" alt=""  /><span className="border-b-4 border-solid border-black w-16 text-xl pt-2 ">{t('rings')}</span></div></Link></SwiperSlide>
         
          </Swiper>
          
          )
    
        
}
