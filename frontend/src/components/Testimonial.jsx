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
        <SwiperSlide key={index} className="bg-black rounded-lg h-full flex flex-col justify-center  items-center gap-3 p-6">

          <div className="w-20 h-20 p-1 rounded-lg  bg-yellow-400">
          <img className="w-full  h-full object-cover" src={testimonial.img} alt={testimonial.name} />
          </div>
          <span className="w-full  text-3xl text-center font-bold text-yellow-400 ">{testimonial.name}</span>
          <p className="text-lg ">{testimonial.testimonial}</p>
          <pre className="w-full text-center text-yellow-400 text-lg">Client</pre>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default Testimonial;
