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


    <section className="w-screen h-screen bg-zinc-100 overflow-hidden">

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
         <SwiperSlide><div className="w-full h-full  "><img className="w-full h-full object-cover object-center	" src="img/rings/ring9.jpg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="img/bracelet/bracelet9.jpg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="img/necklace/necklace13.jpg" alt=""  /></div></SwiperSlide>
      <SwiperSlide><div className="w-full h-full "><img className="w-full h-full object-cover object-center	" src="./img/rings/portR.jpg" alt=""  /></div></SwiperSlide>
      
      </Swiper>

    
    </section>


<section className="bg-zinc-100 w-full h-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center h-4/6	">

<div className="w-full flex justify-between mb-5 md:w-10/12">

<span className="text-lg"> SIGNATURE RINGS</span>


<a  className="text-lg" href="">View All</a>

</div>

<div className="w-full overflow-hidden md:w-9/12	 ">

<Carousel/>

</div>



</article>



</section>



<section className="w-full h-72 flex flex-col items-center md:h-96">

<div className="aboutImg w-full h-full  md:w-3/4 ">

<h3 className="text-2xl text-zinc-100">We are just jewerly</h3>

<p className="text-xl text-zinc-100 w-full text-center">our pieces a merge of luxury vintage pieces for everyday wear </p>


<button className="p-2 bg-yellow-600 w-28 rounded-lg">About</button>



</div>

</section>




<section className="bg-zinc-100 w-full p-3 ">

<article className="w-full flex  flex-col items-center justify-center">

<div className="w-full flex justify-between mb-5">

<span className="text-lg w-10/12 md:w-96">Shop Collection</span>



</div>

<div className="w-full overflow-hidden md:w-9/12	 ">

<ul className="w-full flex">

<CollectionCarousel/>


</ul>
</div>



</article>



</section>




<section className="w-full h-72 flex flex-col items-center h-96 md:w-3/4">

    <h5 className="w-2/4 text-center pb-3 border-b-4 border-gray-300 border-solid  text-2xl mb-5 ">TESTIMONIALS</h5>

<div className="w-full h-96 overflow-hidden p-5">

<Testimonial/>

</div>

</section>




<section className="w-10/12 h-96 flex flex-col gap-5 md:flex-row">

<div className=" w-full h-3/4 ">

<img className="w-full h-full object-cover object-center
" src="img/rings/ring3.jpg" alt="" />

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