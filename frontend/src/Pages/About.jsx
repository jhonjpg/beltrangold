import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { InView } from 'react-intersection-observer';


const About = ( {cartItems, clearCart, removeFromCart, itemsAdded}) => {
  const { t } = useTranslation(); // Obtiene la función de traducción


  console.log(itemsAdded)
  return (


<>
<section className="w-full flex flex-col justify-center items-center text-white gap-4 " >   

<div className="w-screen absolute top-2/3 z-50 "> 
 <Navbar cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} itemsAdded={itemsAdded}/>           </div>



<div className="w-60 h-auto rounded-full 	 overflow-hidden pt-36">
<img className="w-full h-full object-cover rounded-full" src="./logo.png" alt="" />
</div>


    <section  id="mainSection" className="   w-screen flex flex-col items-center justify-center gap-10 md:w-10/12 ">

    <section id="mainPhoto" className="w-screen overflow-hidden mt-10 flex flex-col  justify-center items-center relative md:w-full ">
   

    <div className=" w-full h-5/6	 md:w-full md:h-full 	">

    <div className="absolute z-10   flex justify-center items-center bg-opacity-50 bg-black w-full	 h-full	    ">
      </div>

<div className="w-full h-full absolute">
  <img src="goldbuild.png" className="w-full h-full object-cover grayscale" alt="" />
</div>

      </div>
    
      <div className="absolute z-30   flex justify-center items-center bg-opacity-25 bg-black w-full	 h-full	    ">

    <div className="w-full h-full text-white text-center flex justify-center items-center gap-4 flex-col ">

    <article className="w-full flex flex-wrap   justify-end items-center pt-10  md:h-full gap-3">

    

          <div className="flex flex-col w-full h-full mt-20 items-center justify-center md:w-1/2 gap-6">


          <h2 className="w-full text-black uppercase  bg-yellow-400 text-5xl">{t('aboutUs')}</h2>

          <h1 className="text-2xl w-full  md:text-5xl text-start md:w-7/12">
            {t('transformingMoments')}
          </h1>


            <div className="w-11/12 flex gap-2 items-start justify-start">
              <span className="text-white w-10 text-5xl h-12">W</span>
              <p className="text-white w-full text-2xl text-start">
                {t('welcomeText')}
              </p>
            </div>
       
         
           
            <button className="p-2 w-40 text-white border-2 border-yellow-400 mt-10 border-solid hover:bg-yellow-400 hover:text-black ease-linear duration-75">
<Link to="/beltrangold/contact"> {t('contactUs')}</Link></button>

          </div>

         
        </article>

  
    </div>
  </div>

    </section>
    </section>

    </section>


    <section className="w-full flex flex-col justify-center items-center text-white gap-4 " >   




    <section  id="mainSection" className="   w-screen flex flex-col items-center justify-center gap-10 md:w-10/12 ">

    <section id="mainPhoto" className="w-screen overflow-hidden flex flex-col  justify-center items-center relative md:w-full ">
   

    <div className=" w-full h-5/6	 md:w-full md:h-full 	">

<div className="w-full h-full absolute">
  <img src="https://cdn.pixabay.com/photo/2017/09/06/21/43/crystal-2723145_1280.jpg" className="w-full h-full object-cover " alt="" />
</div>

      </div>
    
      <div className="absolute z-30   flex justify-center items-center bg-opacity-25 bg-black w-full	 h-full	    ">

    <div className="w-full h-full text-white text-center flex justify-center items-center gap-4 flex-col ">

    <article className="w-full flex  flex-col  justify-center items-center pt-10   md:h-full md:flex-row gap-3 md:justify-end ">
  

    <InView triggerOnce="false">
    {({ inView, ref, entry }) => (
  <div ref={ref} className={ inView ? 'fade flex flex-col h-1/3   w-full md:w-1/2 md:h-72' : 'opacity-0'}>
    <h2 className="w-full text-white uppercase  text-lg md:text-3xl">History</h2>
    <h3 className="w-full text-white uppercase  text-3xl md:text-5xl">ESTABLISHED 35 years
</h3>

</div>


    )}

    </InView>
          <div className="flex flex-col w-full h-1/2  items-center justify-center md:w-1/2 md:h-full gap-3">
          <p className="text-white text-start text-sm w-10/12 md:text-lg">
              {t('aboutUsPage')}
            </p>
          <p className="text-white text-start text-sm  w-10/12 md:text-lg">
              {t('skilledArtisans')}
            </p>
          </div>

         
        </article>

  
    </div>
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



  
    </section>



</>

  );
}

export default About;


{/* <main className="w-screen h-screen flex justify-center items-center">
    <section  id="mainSection" className="   w-screen h-5/6	 relative flex flex-col items-center justify-center gap-10 md:w-9/12 ">
      <div className="absolute z-10   flex justify-center items-center bg-opacity-75 bg-black w-full	 h-full	    ">
      </div>

<div className="w-full h-full absolute">
  <img src="goldbuild.png" className="w=full h-full object-cover grayscale" alt="" />
</div>


<div className="about z-30 w-screen h-max flex flex-col md:h-max flex-row md:p-10">
      <div className="w-screen pt-5 flex flex-col justify-center items-center md:flex-row md:p-10">
        <article className="w-full flex flex-col justify-center items-center  mb-10 md:w-2/4 md:h-full gap-3">
          <h2 className="text-gray-400">{t('aboutUs')}</h2>
          <h1 className="text-2xl w-72 md:text-4xl text-center w-9/12">
            {t('transformingMoments')}
          </h1>
          <div className="flex flex-col w-full items-center md:w-3/4 gap-3">
            <div className="w-11/12 flex gap-2 items-start justify-start">
              <span className="text-black w-10 text-5xl h-12">W</span>
              <p className="text-black-300 w-full text-xl text-start">
                {t('welcomeText')}
              </p>
            </div>
            <p className="text-gray-500 w-10/12 text-sm">
              {t('aboutUsPage')}
            </p>
            <p className="text-gray-500 w-10/12 text-sm">
              {t('skilledArtisans')}
            </p>
           
            <button className="p-2 w-40 text-gray-400 border-2 border-gray-400 border-solid hover:bg-gray-300 hover:text-white ease-linear duration-75">
<Link to="/beltrangold/contact"> {t('contactUs')}</Link></button>

          </div>
        </article>
     
      </div>
    </div>


</section>
</main>  */}