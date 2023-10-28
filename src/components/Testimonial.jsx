import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';


const Testimonial = () => {

  const { t } = useTranslation(); // Obtiene la función de traducción

    let slidesPerView = 1;



    // Check if the screen width is greater than or equal to 768px (standard for tablets and desktops)
    if (window.innerWidth >= 768) {
      slidesPerView = 3;
    }


  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={slidesPerView}
    loop={true}
    autoplay={{
      delay: 5000, // Ajusta el retraso deseado
      disableOnInteraction: false,
    }}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={false}
    modules={[Autoplay, EffectCoverflow, Pagination]}
    className="mySwiper  h-full overflow-hidden"
  >
   {t('testimonials', { returnObjects: true }).map((testimonial, index) => (
        <SwiperSlide key={index} className="bg-yellow-50 h-full flex flex-col gap-3 p-2">
          <img className="w-full giro h-16 object-contain" src="diamon.png" alt="" />
          <span className="w-full text-black text-xl text-center">{testimonial.name}</span>
          <p className="text-sm">{testimonial.testimonial}</p>
          <pre className="w-full text-center text-gray-400">Client</pre>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default Testimonial;
