import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
  return (

    <>

    <main className="w-full flex flex-col items-center justify-center gap-10">


    <section className="w-screen h-screen overflow-hidden flex justify-center items-center">
    
    <div className="  w-11/12	 h-10/12 md:w-3/4 h-5/6 	">
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-full overflow-hidden"
      >
         <SwiperSlide><div className="w-full h-full  "><img className="w-full h-full object-cover object-center	" src="/img/rings/heartRing3.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="/img/pendant/soldier1.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="/img/chain/minium1.jpeg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="/img/set/IMG_4615.jpeg" alt=""  /></div></SwiperSlide>
      
      </Swiper>

      </div>
    
      <div className="absolute z-30   flex justify-center items-center bg-opacity-50 bg-black w-11/12	 h-10/12 md:w-3/4 h-5/6 ">
    <div className="h-full text-white text-center flex justify-center items-center gap-4 flex-col ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Explora la Elegancia Única</h1>
      <p className="text-lg md:text-xl">Colección Exclusiva de Joyería de Diamantes</p>
      <p className="text-lg md:text-xl">Para Parejas y Amantes del Lujo.</p>
      <button className="bg-white w-40 text-black font-bold py-2 px-4 mt-4">Descubre Más</button>
    </div>
  </div>

    </section>


<section className=" w-full h-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center h-4/6	">

<div className="w-full flex justify-between mb-5 md:w-3/4">

<span className="text-lg text-black"> SIGNATURE RINGS</span>


<a  className="text-lg" href="">View All</a>

</div>

<div className="w-full overflow-hidden md:w-9/12	 ">

<Carousel/>

</div>



</article>



</section>



<section className="w-full h-72 flex flex-col items-center md:h-96">

<div className="aboutImg w-full h-full  md:w-3/4 ">

<h3 className="text-2xl text-amber-100">We are just jewerly</h3>

<p className="text-xl text-zinc-100 w-full text-center">our pieces a merge of luxury vintage pieces for everyday wear </p>


<button className="p-2 bg-yellow-600 w-28 rounded-lg">About</button>



</div>

</section>




<section className=" w-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center">

<div className="w-full flex justify-center mb-5">

<span className="text-lg w-10/12 md:w-3/4">Shop Collection</span>



</div>

<div className="w-full overflow-hidden md:w-9/12	 ">

<ul className="w-full flex">

<CollectionCarousel/>


</ul>
</div>



</article>



</section>




<section className="w-full h-72 flex flex-col items-center h-96 md:w-3/4">

    <h5 className="w-2/4 text-center pb-3 border-b-4 border-amber-100 border-solid  text-2xl mb-5 ">TESTIMONIALS</h5>

<div className="w-full h-96 overflow-hidden p-7">

<Testimonial/>

</div>

</section>




<section className="w-10/12 h-96 flex flex-col gap-5 md:flex-row">

<div className=" w-full h-3/4 ">

<img className="w-full h-full object-cover object-center
" src="/img/pendant/dominicanrepublic1.jpeg" alt="" />

</div>


<div className="w-full h-2/4 flex flex-col items-center justify-center gap-3 md:items-start justify-center h-3/4 gap-5">

<h5 className="w-full text-3xl text-yellow-600">TRENDING IN SS '21</h5>

<p className="w-60 text-lg">Gold croissan Hoops to elevate your Summer Looks</p>


<button className="bg-yellow-500 p-2 ml-10">Shop now</button>



</div>

</section>




<section className="w-full h-72">

<div className="all">

<h3 className="text-2xl text-zinc-100">We are just jewerly</h3>

<p className="text-xl text-zinc-100 w-4/5">our pieces a merge of luxury vintage pieces for everyday wear </p>


<button className="p-2 bg-yellow-600 w-32 rounded-lg">Comprar todo</button>



</div>

</section>



</main>

</>
  )
}

export default Home