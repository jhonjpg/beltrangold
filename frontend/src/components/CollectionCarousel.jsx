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
      slidesPerView = 4;
    }
  
  return (

    
        <Swiper
      grabCursor={true}
      loop={false}
      slidesPerView={4}
      centeredSlides={false}
      spaceBetween={20}
      pagination={false} // Establecer la propiedad pagination en false
      modules={[Pagination, Navigation]}
      autoplay={{
        delay: 3000, // Ajusta el retraso deseado
        disableOnInteraction: false,
      }}
      loopedSlides={4}
      slidesPerView={slidesPerView}
      modules={[Autoplay, Pagination]}
      className="mySwiper "
    >
           
            <SwiperSlide className="flex flex-col hover:text-yellow-50 gap-3">
  <Link to="/beltrangold/chain">
    <div className="w-full h-60 relative">
      <div className="jewelryHover absolute w-full h-full   flex justify-center items-center  ">
      <h4 className="webkittext text-5xl  md:text-6xl" >
          {t('chain')}
        </h4>
      </div>

      
      <img className="w-full h-full object-cover" src="img/chaingrand1.jpeg" alt="" />
    </div>
    <span className="border-b-4 border-solid border-black w-16 text-xl pt-2"></span>
  </Link>
</SwiperSlide>

          <SwiperSlide className="flex flex-col hover:text-yellow-50 gap-3" ><Link to="/beltrangold/pendant">
            
          <div className="w-full h-60 relative">
          <div className="jewelryHover absolute w-full h-full   flex justify-center items-center  ">
      <h4 className="webkittext text-5xl  md:text-6xl" >
          {t('pendant')}
        </h4>
      </div>

      
      <img className="w-full h-full object-cover" src="img/bear1.jpeg" alt="" />
    </div>
            
            
             </Link></SwiperSlide>
         
          <SwiperSlide className="flex flex-col hover:text-yellow-50 gap-3" ><Link to="/beltrangold/chain">
          <div className="w-full h-60 relative">
   
   
          <div className="jewelryHover absolute w-full h-full   flex justify-center items-center  ">
          <h4 className="webkittext text-5xl  md:text-6xl" >
          {t('bracelet')}
        </h4>
      </div>

      
      <img className="w-full h-full object-cover" src="img/14kbracelet1.JPG" alt="" />
    </div>
            
            
            </Link></SwiperSlide>
          
          <SwiperSlide className="flex hover:text-yellow-50 flex-col gap-3" ><Link to="/beltrangold/bracelet">
            
            
          <div className="w-full h-60 relative">
      <div className="jewelryHover absolute w-full h-full bg-black/50  flex justify-center items-center  ">
      <h4 className="webkittext text-5xl  md:text-6xl" >
          {t('Ring')}
        </h4>
      </div>

      
      <img className="w-full h-full object-cover" src="img/heartRing3.jpeg" alt="" />
    </div>
            
            
            </Link></SwiperSlide>
         
         
          </Swiper>
          
          )
    
        
}




