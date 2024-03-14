import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';



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
import Navbar from '../components/Navbar';

const Home = (  {cartItems, clearCart, removeFromCart, itemsAdded, jewerlrys}) => {


  

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
        scrollPosition += 700;
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



<main className="w-full flex flex-col justify-center items-center text-white gap-4 " >   
<div className="w-screen absolute top-2/3 z-50 "> 
<Navbar cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} itemsAdded={itemsAdded}/>    
 
         </div>


<div className="w-60 h-auto rounded-full 	 overflow-hidden pt-36">
<img className="w-full h-full object-cover rounded-full" src="./logo.png" alt="" />
</div>


    <section  id="mainSection" className="   w-screen flex flex-col items-center justify-center gap-10 md:w-10/12 ">

    <section id="mainPhoto" className="w-screen overflow-hidden flex flex-col  justify-center items-center relative mt-10 md:w-full ">


    <div className=" w-full h-5/6 	 md:w-full md:h-full 	">

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


        
         <SwiperSlide><div className="w-full h-full  "><img className="w-full h-full object-cover object-center	" src="img/heartRing3.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="img/soldier1.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="img/minium1.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="img/IMG_4615.jpeg" alt=""  /></div></SwiperSlide>
      
      </Swiper>

      </div>
    
      <div className="absolute z-30   flex justify-center items-center bg-opacity-50 bg-black w-full	 h-full	    ">

    <div className="w-full h-full text-white text-center flex justify-center items-center gap-4 flex-col ">

    <div className="w-full h-full text-white text-center flex justify-center items-center gap-4 flex-col ">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('exploreElegance')}</h1>
            <p className="text-lg md:text-xl">{t('exclusiveJewelryCollection')}</p>
            <p className="text-lg md:text-xl">{t('forCouplesAndLuxuryLovers')}</p>
      

            <button onClick={scrollDown} ref={scrollTargetRef}
 className="btn2 "><span className="spn2">  {t('discoverMore')}
</span>
</button>

    </div>

  
    </div>
  </div>

    </section>



    <section className="w-full h-96 flex gap-5 justify-between overflow-hidden">


    <InView triggerOnce="false">
    {({ inView, ref, entry }) => (


<article ref={ref} className={inView ? 'fade w-full md:w-4/12 bg-black relative ' : 'opacity-0'}>


  <img src="img/emoji1.jpeg" alt="Descripción de la imagen" className="absolute inset-0 w-full h-full object-cover" />
  
  <div className="absolute w-full bg-black/25 hover:bg-black/25  h-full"></div>

  
  <div className="absolute inset-0 flex items-center justify-center flex flex-col justify-around">

  <h4 className="w-4/5 text-2xl inset-0 uppercase">Discover the brilliance she deserves


</h4>


<button className="w-36 rounded-full full border-2 border-solid border-amber-300">Shop Now</button>

</div>





</article>

)}
</InView>


<InView triggerOnce="false">
    {({ inView, ref, entry }) => (

<aside ref={ref} className={inView ? 'animationLeft w-full md:w-7/12		relative'  : 'opacity-0'}>  <img src="img/ramdomPic.png" alt="" className="absolute inset-0 w-full h-full object-cover"/>

<div className="absolute inset-0 flex items-center justify-center flex flex-col justify-around">

<h4 className="w-4/5 text-2xl inset-0 uppercase">Indulge in luxury, embrace her radiance
</h4>

<button className="w-36 rounded-full full border-2 border-solid border-amber-300">Shop Now</button>

</div>
</aside>
)}
</InView>


    </section>
    <InView triggerOnce="false">
    {({ inView, ref, entry }) => (

    <section ref={ref} className={inView ? 'animationUp w-full h-96 flex flex-row-reverse gap-5 justify-between' : 'opacity-0'}>


  
<article className="w-full md:w-4/12  relative	">  <img src="img/peace2.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover 	"/>

<div className="absolute w-full bg-black/25  h-full"></div>

<div className="absolute inset-0 flex items-center justify-center flex flex-col justify-around">
 


<h4 className="w-4/5 text-2xl inset-0">GIVE HER THE BEST THING SHE DESERVES
</h4>

<button className="w-36 rounded-full full border-2 border-solid border-amber-300">Shop Now</button>

</div>

</article>

<aside className="w-full md:w-7/12 relative	"><img src="img/bra.jpg" alt="" className="absolute inset-0 w-full h-full object-cover 	"/>
<div className="absolute w-full bg-black/25 hover:bg-black/25  h-full"></div>

<div className="absolute inset-0 flex items-center    justify-center flex flex-col justify-around">



<h4 className="w-4/5 text-2xl inset-0">GIVE HIM THE BEST THING HE DESERVES
</h4>


<button className="w-36 rounded-full full border-2 border-solid border-amber-300">Shop Now</button>

</div>

</aside>

    </section>


)}
</InView>



<section className=" w-full h-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center h-4/6	">

<div className="w-full flex justify-between mb-5 md:w-full">

<span className="text-lg  ">{t('jewelrycollection')}</span>
                     <Link  to="/beltrangold/jewelrys" className="hover:text-slate-100 hover:text-yellow-400" >  {t('viewAll')}      </Link>   


</div>

<div className="w-full overflow-hidden 	 ">

<Carousel jewerlrys={jewerlrys}/>

</div>



</article>



</section>



<section className="w-full h-72 flex flex-col items-center md:h-96">
          <div className="aboutImg w-full h-full md:full">
          <div className="bg-black/25 w-full h-full md:full flex flex-col justify-center items-center gap-5 ">

            <h3 className="text-3xl text-yellow-300 font-bold  md:text-5xl">{t('discoverMore')}</h3>
            <p className="text-2xl text-zinc-300 w-full text-center">{t('elevateYourStyle')}</p>
            <button className="p-2 bg-yellow-400 w-28 rounded-lg text-black font-semibold hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105">
            <Link  to="/beltrangold/pendant" > {t('explore')}</Link>   
            </button>
          </div>
          </div>

        </section>



<section className=" w-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center">

<div className="w-full flex justify-center mb-5">

<span className="text-lg w-full">{t('OurPieces')}</span>



</div>

<div className="w-full overflow-hidden 	 ">

<ul className="w-full flex">

<CollectionCarousel/>


</ul>
</div>



</article>



</section>




<section className="w-full h-auto flex flex-col items-center h-96 ">

    <h5 className="testim w-10/12 text-center pb-3 border-b-4 border-yellow-300 border-solid  text-6xl mb-5 md:w-2/4 "> <span className="text-yellow-300">T</span>{t('testimonial')}</h5>

<div className="w-full h-auto  overflow-hidden p-7">

<Testimonial/>

</div>

</section>




<section className="w-full h-50 flex flex-col-reverse  gap-5 md:flex-row md:h-96">

<div className=" w-full h-1/3 md:h-3/4 p-5 ">

<img className="w-full h-full object-cover object-center
" src="img/dominicanrepublic1.jpeg" alt="" />

</div>

<div className="w-full h-auto flex flex-col items-center justify-center md:flex flex-col items-center justify-center gap-3 p-5 md:h-auto gap-5">
      <h5 className="text-3xl text-yellow-500 text-start md:text-left">
        {t('trendingTitle')}
      </h5>
      <p className="text-lg text-start md:text-left">
        {t('trendingDescription')}
      </p>
      <button className="bg-yellow-500 p-2 mx-auto md:ml-50">

      <Link  className="text-black" to="/beltrangold/pendant/14k Gold Dominican Republic Pendant
" >{t('shopNowTrend')}</Link>   

      </button>
    </div>
</section>



<section className="w-full h-96 md:h-72  mb-10 md:flex  ">
   
      <div className=" all  flex flex-col justify-evenly items-center w-full h-full  shadow-xl md:flex-row" >
  
   <h3 className="w-full text-4xl text-yellow-400 font-extrabold upper text-center md:w-1/3">
          {t('indulgeInGlamour')}
        </h3>
     
        <p className="w-full text-2xl bold  w-full text-center md:w-72">
          {t('fusionOfEleganceAndChic')}
        </p>

        <button className="w-10/12 p-3 bg-yellow-400  rounded-full text-black font-semibold mr-2hover:bg-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 md:w-52">
         <Link  to="/beltrangold/jewelrys" > {t('Sectionbutton')}    </Link>   

        </button>
      </div>


    </section>




</section>

</main>
</>
  )
}

export default Home