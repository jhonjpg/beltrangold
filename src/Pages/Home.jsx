import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Carousel } from '../components/Carousel';
import { CollectionCarousel } from '../components/CollectionCarousel';
import Testimonial from '../components/Testimonial';

const Home = () => {

  const { t } = useTranslation(); // Obtiene la función de traducción
  const scrollTargetRef = useRef(null);

  const scrollDown = () => {
    // Obtén el elemento al que deseas desplazarte usando el ref
    const scrollTarget = scrollTargetRef.current;

    if (scrollTarget) {
      // Calcula la posición de desplazamiento
      let scrollPosition = scrollTarget.offsetTop;

      // Verifica si es un dispositivo móvil (ajusta este ancho según tus necesidades)
      const isMobile = window.innerWidth <= 768; // Puedes ajustar el valor de 768 según lo que consideres como dispositivo móvil.

      if (isMobile) {
        scrollPosition += 150;
      } else {
        scrollPosition += 300;
      }

      // Realiza el desplazamiento suave
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  };
  return (

    <>

    <main className="w-full flex flex-col items-center justify-center gap-10">


    <section className="w-screen h-screen overflow-hidden flex justify-center items-center">
    
    <div className=" w-screen h-5/6	 md:w-3/4 md:h-5/6 	">
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={false}
        pagination={{
          clickable: false,
        }}
        modules={[ Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-full overflow-hidden"
      >
         <SwiperSlide><div className="w-full h-full  "><img className="w-full h-full object-cover object-center	" src="./img/rings/heartRing3.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="./img/pendant/soldier1.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="./img/chain/minium1.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="./img/set/IMG_4615.jpeg" alt=""  /></div></SwiperSlide>
      
      </Swiper>

      </div>
    
      <div className="absolute z-30   flex justify-center items-center bg-opacity-25 bg-black w-screen	 h-5/6	  md:w-3/4 md:h-5/6 ">
    <div className="h-full text-white text-center flex justify-center items-center gap-4 flex-col ">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('exploreElegance')}</h1>
            <p className="text-lg md:text-xl">{t('exclusiveJewelryCollection')}</p>
            <p className="text-lg md:text-xl">{t('forCouplesAndLuxuryLovers')}</p>
            <button className="bg-white w-40 text-black font-bold py-2 px-4 mt-4" onClick={scrollDown} ref={scrollTargetRef} >
              {t('discoverMore')}
            </button>
    </div>
  </div>

    </section>


<section className=" w-full h-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center h-4/6	">

<div className="w-full flex justify-between mb-5 md:w-3/4">

<span className="text-lg text-black">{t('jewelrycollection')}</span>
              <a className="text-lg" href="#">
                {t('viewAll')}
              </a>

</div>

<div className="w-full overflow-hidden md:w-9/12	 ">

<Carousel/>

</div>



</article>



</section>


<section className="w-full h-72 flex flex-col items-center md:h-96">
          <div className="aboutImg w-full h-full md:w-3/4">
            <h3 className="text-2xl text-amber-500 font-bold">{t('discoverMore')}</h3>
            <p className="text-xl text-zinc-300 w-full text-center">{t('elevateYourStyle')}</p>
            <button className="p-2 bg-yellow-600 w-28 rounded-lg text-white font-semibold hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105">
              {t('explore')}
            </button>
          </div>
        </section>



<section className=" w-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center">

<div className="w-full flex justify-center mb-5">

<span className="text-lg w-10/12 md:w-3/4">{t('OurPieces')}</span>



</div>

<div className="w-full overflow-hidden md:w-9/12	 ">

<ul className="w-full flex">

<CollectionCarousel/>


</ul>
</div>



</article>



</section>




<section className="w-full h-72 flex flex-col items-center h-96 md:w-3/4">

    <h5 className="w-2/4 text-center pb-3 border-b-4 border-yellow-50 border-solid  text-2xl mb-5 ">{t('testimonial')}</h5>

<div className="w-full h-96 overflow-hidden p-7">

<Testimonial/>

</div>

</section>




<section className="w-10/12 h-screen flex flex-col-reverse  gap-5 md:flex-row">

<div className=" w-full h-3/4 ">

<img className="w-full h-full object-cover object-center
" src="./img/pendant/dominicanrepublic1.jpeg" alt="" />

</div>

<div className="w-full h-auto md:flex flex-col items-center justify-center gap-3 md:items-center justify-center h-auto gap-5">
      <h5 className="text-3xl text-yellow-500 text-center md:text-left">
        {t('trendingTitle')}
      </h5>
      <p className="text-lg text-center md:text-left">
        {t('trendingDescription')}
      </p>
      <button className="bg-yellow-500 p-2 mx-auto md:ml-50">
        {t('shopNowTrend')}
      </button>
    </div>
</section>



<section className="w-full h-72 md:flex justify-center ">
      <div className="all w-full h-full md:w-3/4 shadow-xl" >
        <h3 className="text-4xl text-amber-500 font-extrabold">
          {t('Sectiontext')}
        </h3>
        <p className="text-xl text-zinc-300 w-full text-center">
          {t('Sectiondescription')}
        </p>
        <button className="p-3 bg-yellow-600 w-40 rounded-full text-white font-semibold hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105">
          {t('Sectionbutton')}
        </button>
      </div>
    </section>
</main>

</>
  )
}

export default Home