// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import i18n from '../18n';
// import Cart from '../cart/Cart';
// import es from '../18next/es.json'; // Import your JSON data
// import CartPaypal from '../cart/CartPaypal';




// const Navbar = ({cartItems, clearCart, removeFromCart, itemsAdded}) => {
//   const [cart, setCart] = useState([]);
//   const [showMenu, setShowMenu] = useState(false);

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     for (const item of cart) {
//       totalPrice += item.prices * item.quantity;
//     }
//     return totalPrice;
//   };

//   const [shppingcart, setShppingcart] = useState(false);

//   function cartClick() {

//     setShppingcart(!shppingcart);

//    }



//   // const product = ('fff', { returnObjects: true });

// // console.log(product)


//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const [isNav, setIsNav] = useState(false);


//   const [isMenuOpen2, setIsMenuOpen2] = useState(false);


//   const handleclick = () => {
//     setIsNav(!isNav);
//   };

//   const handleMouseEnter = () => {
//     setIsMenuOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsMenuOpen(false);
//   };

//   const [menu, setmenu] = useState(true);

//   const [toggleOn, settoggleOn] = useState(true)

//     const [currentLanguage, setCurrentLanguage] = useState('es');

  

//   useEffect(() => {
//     settoggleOn(false); // Asegurarse de que el menú esté oculto al cargar la página

//     window.scrollTo({
//       top: 0,
//       behavior: 'auto', // Esto agrega el efecto suave al desplazamiento
//     });


//   }, []);



//   const change = (e) => {
//     if (window.scrollY >= 450) {
  
//     setmenu(false)
//   } else {
//     setmenu(true)
  
//   }
  
//   }
  
  


// const toggleMenu = () => {

//   settoggleOn(!toggleOn)

//   setIsMenuOpen2(!isMenuOpen2);


// }

// const { t } = useTranslation();

//    // Función para cambiar el idioma
//    const changeToEnglish = () => {
//     i18n.changeLanguage('en');
//     setCurrentLanguage('en');
//   };


//   const changeToSpanish = () => {
//     i18n.changeLanguage('es');
//     setCurrentLanguage('es');
//   };

 

//   const buttonImageEnglish = 'data:image/png;base64,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';
//   const buttonImageSpanish = 'data:image/png;base64,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';
  


//   const buttonImage = currentLanguage === 'es' ? buttonImageSpanish  : buttonImageEnglish;







// const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`

//   return (


//     <>

//     {/* phone Nav */}
//     <nav className={menu ? " navbar fixed z-50 flex flex-col-reverse w-full h-16  justify-between items-center " : "navbar fixed  z-50 flex w-full h-16  justify-between items-center oro"}  >

//        <div className="w-10 h-full flex items-center overflow-hidden" > 

//        <svg onClick={toggleMenu} className="scale-25 text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
//   <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" fill="black"></path>
// </svg>

//       {isMenuOpen2 && (

//         <div className="fixed  w-full h-screen flex flex-col justify-center items-center top-0 bottom-1 z-50">
//         <div className="w-full ">

//         <svg  onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
//   <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" fill="black"></path>
// </svg>
// </div>
//         <ul className=" w-full h-screen z-50  flex flex-col items-center  gap-5  z-50 list-none p-3   uppercase oro	z-50">


// <div className="w-full h-72 ">


//   <img  className="w-full h-full object-cover" src="/bc.jpg" alt="" />
// </div>

// <ul className="w-full flex flex-col gap-5 ">
//        <li className="w-full text-2xl text-center" > <NavLink  onClick={toggleMenu} exact="true" to="/beltrangold/"  >  {t('home')}</NavLink></li>
//          <li className="w-full text-2xl text-center"  > <NavLink  onClick={toggleMenu} to="/beltrangold/about"    >  {t('about')}</NavLink></li>
       
//       <li className=" w-full text-2xl text-center" onClick={handleclick}
//       >{t('jewelrys')}</li>
//       {isNav && (
//         <div className="relative npm, ">
//       <li className="text-xl  w-full text-center  hover:bg-stone-800"> <NavLink onClick={toggleMenu} to="/beltrangold/ring" >  {t('rings')}</NavLink></li>
//     <li className="text-xl w-full text-center  hover:bg-stone-800"> <NavLink onClick={toggleMenu} to="/beltrangold/pendant" >  {t('Pendant')}</NavLink></li>
//     <li className="text-xl  w-full text-center hover:bg-stone-800"> <NavLink onClick={toggleMenu} to="/beltrangold/chain" >  {t('chain')}</NavLink></li>
//     <li className="text-xl  w-full text-center hover:bg-stone-800"> <NavLink onClick={toggleMenu} to="/beltrangold/bracelet" >  {t('bracelet')}</NavLink></li>
//         </div>
//       )}
//             <li className="w-full text-2xl text-center "  > <NavLink onClick={toggleMenu} to="/beltrangold/contact"   >  {t('contact')}</NavLink></li>
//             </ul>




        
//         </ul>
//         </div>
//       )}


// </div>



// <div id="carrito" onClick={cartClick}  className=" flex cursor-pointer w-20 justify-center h-20 z-20	 ">

// <a
//   className="text-white text-black opacity-60  flex items-center"
//   aria-expanded="false"
// >
//   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
//     className="w-10 text-black" role="img" xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 576 512">
//     <path className={menu ? "path" : "path-active"} fill="white"
//       d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
//     </path>
//   </svg>
//   <span className="text-black bg-stone-8000 absolute rounded-full text-xs px-1.5 relative right-5 bottom-3">
//         {itemsAdded}
//       </span>


// </a>
// </div>




// <button className="w-16  p-2 h-full flex items-center justify-center hover:bg-stone-800" onClick={currentLanguage === 'es' ? changeToEnglish : changeToSpanish}>
//       <h2 className="text-yellow-50 flex justify-center items-center gap-3 overflow-hidden h-30"><div className="w-8 h-8"><img src={buttonImage} className="w-full h-full object-contain" alt="flags"/> </div>
//       </h2>
//     </button>

//     <NavLink to="/beltrangold/jewelrys" >  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" viewBox="0 0 16 16">
//   <path d="M10.646 9.646a5 5 0 1 1 1.414-1.414l3.852 3.853-1.414 1.414-3.852-3.853zm-.354-1.414a3 3 0 1 0-1.414 1.414 3 3 0 0 0 1.414-1.414z"/>
// </svg></NavLink>

// {shppingcart && (
//   <div  onClick={cartClick} className={`flex cursor-pointer fixed top-0 right-0 w-screen bg-stone-800/25	 h-screen justify-end items-center z-10	 ${shppingcart ? "visible" : "invisible"}`} >


// <div  className=" animated-element flex flex-col pt-2  w-2/3	 h-5/6	 oro	  gap-3 relative z-20	  " data-mdb-zoom-effect="true">


// <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}  /> {/* Pass the cart items as a prop */}


// </div>




// </div>


// )}




//      </nav>



// {/* other device */}

// <div className={menu ? "font-thin oro text-xl z-50 flex  w-9/12 h-24 justify-center text-white items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" : "device oro fixed top-6 ease-out	 duration-75	 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50 flex w-full h-28  justify-center items-center "}>


//   <ul className="w-9/12 h-full flex  justify-center items-center    text-lg text-white   gap-3 uppercase  z-20	">
//     <li className="p-2 hover:bg-stone-800"> <NavLink exact="true" to="/beltrangold/"   >  {t('home')}</NavLink></li>
//     <li className="p-2 hover:bg-stone-800"> <NavLink to="/beltrangold/about" > {t('about')}</NavLink></li>

//         <li className="p-2 hover:bg-stone-800">   <NavLink to="/beltrangold/ring">{t('rings')}</NavLink ></li>
//         <li className="p-2 hover:bg-stone-800">   <NavLink to="/beltrangold/pendant">{t('pendant')}</NavLink ></li>
        
//         <li className="p-2 hover:bg-stone-800">   <NavLink to="/beltrangold/chain">{t('chain')}</NavLink ></li>
//         <li className="p-2 hover:bg-stone-800">   <NavLink to="/beltrangold/bracelet">{t('bracelet')}</NavLink ></li>

//         <li className="p-2 hover:bg-stone-800"> <NavLink to="/beltrangold/contact" >  {t('contact')}</NavLink></li>


//   </ul>

//   <ul className="w-4/12  flex  text-lg text-white   justify-evenly uppercase items-center z-20	">
   
//   <NavLink to="/beltrangold/jewelrys" >  
    
//     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
// </svg>

// </NavLink>

// <div id="carrito" onClick={cartClick}  className=" flex justify-center items-center cursor-pointer    z-20	 ">

// <a
//   className=" text-black opacity-60  flex items-center"
//   aria-expanded="false"
// >
// <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
//   <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
// </svg>
//   <span className="text-black bg-stone-8000 absolute rounded-full text-xs px-1.5 relative right-5 bottom-3">
//         {itemsAdded}
//       </span>


// </a>






// </div>

// <button className="w-16  p-2 h-full flex items-center justify-center hover:bg-stone-800" onClick={currentLanguage === 'es' ? changeToEnglish : changeToSpanish}>
//       <h2 className="text-yellow-50 flex justify-center items-center gap-3 overflow-hidden h-30"> <div className="w-8 h-8"><img src={buttonImage} className="w-full h-full object-contain" alt="flags"/> </div>
//       </h2>
//     </button>

    

// <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
//   <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
// </svg>

// <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
//   <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
// </svg>

//   </ul>





// {shppingcart && (
// <div  onClick={cartClick} className={`flex cursor-pointer fixed top-0 right-0 w-screen bg-stone-800/25	 h-screen justify-end items-center z-10	 ${shppingcart ? "visible" : "invisible"}`} >


// <div  className=" animated-element flex flex-col pt-2  w-1/3	 h-5/6	 bg-stone-950		  gap-3 relative z-20	  " data-mdb-zoom-effect="true">


// <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}  /> {/* Pass the cart items as a prop */}


// </div>




// </div>

// )}

// </div>







//     {/* nuevo */}
// <nav className=" navbar fixed z-50 flex flex-col-reverse w-full h-16  justify-between items-center ">
//       <NavLink onClick={() => setShowMenu(false)} to="/">
//         <div className="w-28 h-full flex items-center justify-center text-white scale-105 md:scale-150 md:ml-20">
//           <img src="produktivo02.png" alt="" className="w-full h-full object-cover" />
//         </div>
//       </NavLink>

//       {windowWidth <= 768 ? (
//         <div className="w-16 flex justify-center items-center h-full">
//           <div onClick={() => toggleVisibility(setShowMenu)} className="w-1/2 flex justify-center items-center h-full">
//             {!showMenu && (
//               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
//                 <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
//             )}

//             {showMenu && (
//               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
//                 <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//               </svg>
//             )}
//           </div>
//         </div>

//       ) : (
       
       
//        <ul className="text-white text-lg flex  w-1/3  justify-evenly items-center ">



//           <li className=" flex group relative">
//   Services{showServices ? ' -' : ' +'}
//   <ul className={`text-base ml-5 flex flex-col gap-5 absolute top-full left-0 ${showServices ? 'block' : 'hidden'} group-hover:block bg-yellow-400 text-black  p-3 flex flex-col gap-20 w-60`}>
//     <NavLink className=" w-full hover:text-gray-200"onClick={() => setShowMenu(false)} to="produktivo/consultation">
//       <li>Consultation</li>
//     </NavLink>
//     <NavLink className="w-full  hover:text-gray-200"onClick={() => setShowMenu(false)} to="produktivo/virtual&business&support">
//       <li>Virtual Business Support</li>
//     </NavLink>
//     <NavLink className=" w-full hover:text-gray-200"onClick={() => setShowMenu(false)} to="produktivo/system&implementation">
//       <li>System Implementation</li>
//     </NavLink>

    
//     <li className="cursor-pointer hover:text-gray-200" onClick={() => toggleVisibility(setShowMarketing)}>
//       Marketing{showMarketing ? ' -' : ' +'}
//     </li>
//     {showMarketing && (
//   <ul className={`text-base ml-5 flex flex-col gap-5 absolute top-24 left-52 ${showMarketing ? 'block' : 'hidden'} group-hover:block spacegray  text-white marketing p-3 flex flex-col gap-10 w-60`}>
//   <NavLink className=" hover:text-gray-200"onClick={() => setShowMenu(false)} to="produktivo/content&marketing">
//           <li>Content Marketing</li>
//         </NavLink>
//         <NavLink  className=" hover:text-gray-200"onClick={() => setShowMenu(false)} to="produktivo/email&marketing">
//           <li>Email Marketing</li>
//         </NavLink>
//         <NavLink className=" hover:text-gray-200"  onClick={() => setShowMenu(false)} to="produktivo/digital&ads">
//           <li>Digital Ads</li>
//         </NavLink>
//         <NavLink className=" hover:text-gray-200" onClick={() => setShowMenu(false)} to="produktivo/lead&generation">
//           <li>Lead Generation</li>
//         </NavLink>
//       </ul>
//     )}
//     <NavLink className=" hover:text-gray-200" onClick={() => setShowMenu(false)} to="produktivo/social&media">
//       <li>Social Media</li>
//     </NavLink>
//   </ul>
// </li>




// <li className="group relative">
// Resorces{showServices ? ' -' : ' +'}
//   <ul className={`text-base ml-5 flex flex-col gap-1 absolute top-full left-0 ${showServices ? 'block' : 'hidden'} group-hover:block bg-yellow-400 text-black p-3 flex flex-col gap-10 w-60`}>
//     <NavLink className=" hover:text-gray-200" onClick={() => setShowMenu(false)} to="produktivo/blog">
//       <li>blog</li>
//     </NavLink>
//     <NavLink className=" hover:text-gray-200" onClick={() => setShowMenu(false)} to="produktivo/virtual&business&support">
//       <li>Suscribe to Newslette</li>
//     </NavLink>
    
//   </ul>
// </li>


       
//           <NavLink onClick={() => setShowMenu(false)} to="produktivo/contact"><li>Contact Us</li></NavLink>

//         </ul>

//       )}

// </nav>




// {showMenu && (

// <nav id="sideMenu" className={`sideMenu spacegray w-64 fixed h-screen flex flex-col items-center justify-center z-40 ${showMenu ? 'open' : ''}`}>


// <NavLink className="w-10/12	 h-28 mb-10 " onClick={() => setShowMenu(false)}  to="produktivo/">  <li>

// <div className="w-full	 h-28  "> <img src="produktivo02.png" alt=""  className="w-full h-full object-cover"/></div>
// </li></NavLink> 
// <ul className="text-white text-lg flex flex-col gap-5">

//              <li  onClick={() => toggleVisibility(setShowServices)}>
//             Services{showServices ? ' -' : ' +'}
//           </li>
//           {showServices && (
//             <ul className="text-base ml-5 flex flex-col gap-1 ">
//             <NavLink onClick={() => setShowMenu(false)}  to="produktivo/consultation">  <li>Consultation</li></NavLink> 
//             <NavLink onClick={() => setShowMenu(false)} to="produktivo/virtual&business&support">   <li>Virtual Business Support</li></NavLink> 
//             <NavLink onClick={() => setShowMenu(false)} to="produktivo/system&implementation">   <li>System Implementation</li></NavLink> 
//             <li onClick={() => toggleVisibility(setShowMarketing)}>
//               Marketing{showMarketing ? ' -' : ' +'}
//               </li>
//               {showMarketing && (
//                 <ul className="text-sm ml-2 flex flex-col gap-1">
//                   <NavLink onClick={() => setShowMenu(false)}  to="produktivo/content&marketing"><li>Content Marketing</li></NavLink>
                 
// <NavLink onClick={() => setShowMenu(false)}  to="produktivo/email&marketing">  <li>Email Marketing</li></NavLink>
// <NavLink onClick={() => setShowMenu(false)}  to="produktivo/digital&ads">   <li>Digital Ads</li></NavLink>
//                   <NavLink onClick={() => setShowMenu(false)}  to="produktivo/lead&generation">   <li>Lead Generation</li></NavLink>
//                 </ul>
//               )}
//                          <NavLink onClick={() => setShowMenu(false)}  to="produktivo/social&media">     <li>Social Media</li></NavLink>


  
//             </ul>
//           )}

//           <li onClick={() => toggleVisibility(setShowResorces)}>
//             Resorces{showResorces ? ' -' : ' +'}
//           </li>
//           {showResorces && (
//                 <ul className="text-base ml-5 flex flex-col gap-1">
//                  <NavLink onClick={() => setShowMenu(false)} to="produktivo/blog">  <li>Blog</li>    </NavLink>
//                   <li>Suscribe to Newsletter</li>
//                 </ul>
//                               )}

                
// <NavLink onClick={() => setShowMenu(false)}  to="produktivo/contact">  <li>Contact Us</li></NavLink>
//         </ul>



// <p className="mt-40 text-white text-xs w-52">© 2023 WEARREPRODUKTIVO Marketing | Marketing for a New Generation</p>

// </nav>
//               )}




//     </>

//     )
// }

// export default Navbar


// // chrams jewelyset


import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cart from '../cart/Cart';


const Navbar = ({cartItems, clearCart, removeFromCart, itemsAdded}) => {



  const [shppingcart, setShppingcart] = useState(false);

 

   function cartClick() {

    setShppingcart(!shppingcart);

   }
  const { t } = useTranslation();


     // State to manage the visibility of nested lists
     const [showMenu, setShowMenu] = useState(false);
  const [cart, setCart] = useState([]);
const [showServices, setShowServices] = useState(false);
    const [menu, setmenu] = useState(true);
  const [showMarketing, setShowMarketing] = useState(false);
  const [showDesign, setShowDesign] = useState(false);
  const [showResorces, setShowResorces] = useState(false);
  const [isMoonFill, setIsMoonFill] = useState(true);



  const [activeLink, setActiveLink] = useState('');




  const backgroundChange = showMenu ? "  phoneNav font-thin bg-black text-xl z-50  flex  w-full  h-24 justify-end text-white items-center fixed top-10 md:top-10	left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-9/12 	" : "  phoneNav font-thin oro text-xl z-50  flex  w-full  h-24 justify-end text-white items-center fixed top-10 md:top-10	left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:w-9/12  transition-2	"
  // Función para manejar el clic en un enlace
  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMoon = () => {
    setIsMoonFill(!isMoonFill);
  };

      const [currentLanguage, setCurrentLanguage] = useState('es');

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const change = (e) => {
    if (window.scrollY >= 400) {
  
    setmenu(false)
  } else {
    setmenu(true)
  
  }

}

  window.addEventListener("scroll", change)


   const changeToEnglish = () => {
    i18n.changeLanguage('en');
    setCurrentLanguage('en');
  };


  const changeToSpanish = () => {
    i18n.changeLanguage('es');
    setCurrentLanguage('es');
  };

 

  const buttonImageEnglish = 'data:image/png;base64,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';
  const buttonImageSpanish = 'data:image/png;base64,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';
  


  const buttonImage = currentLanguage === 'es' ? buttonImageSpanish  : buttonImageEnglish;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Puedes ajustar el umbral según tu diseño
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        // Additional logic if needed
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Function to toggle the visibility of the nested list
  const toggleVisibility = (setter) => {
    setter((prevState) => !prevState);
    // setter(!showMenu);

  };
  return (
<>

<nav className={menu ? " desktopNav font-thin  text-xl z-50 oro  flex  w-full  h-24 justify-end text-white items-center absolute top-10 md:top-10	left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-9/12 md:justify-center md:oro 	" : "desktopNav device oro fixed top-10 	 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50 flex w-full h-28  justify-center items-center "}>


        <div className=" w-full  flex min-w-80 ">
  <ul className="w-9/12 h-full flex flex-wrap  justify-center items-center    text-lg text-white   gap-3 uppercase  z-20	">
  <NavLink exact="true" to="/beltrangold/"  activeclassname="active" className="p-2 hover:bg-yellow-400 hover:text-black" ><li >   {t('home')}</li></NavLink>
  <NavLink  to="/beltrangold/about" activeclassname="active" className="p-2 hover:bg-yellow-400 hover:text-black"  > <li >  {t('about')}</li></NavLink>

  <NavLink  to="/beltrangold/ring" activeclassname="active" className="p-2 hover:bg-yellow-400 hover:text-black"  > <li >    {t('rings')}</li></NavLink>
  <NavLink  to="/beltrangold/pendant " activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >   {t('pendant')}</li></NavLink>
        
  <NavLink  to="/beltrangold/chain" activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >    {t('chain')}</li></NavLink>
  <NavLink  to="/beltrangold/bracelet" activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >    {t('bracelet')}</li></NavLink>

  <NavLink  to="/beltrangold/contact" activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >    {t('contact')}</li></NavLink>

   </ul>

<ul className="w-4/12  flex  text-lg text-white   justify-evenly uppercase items-center z-20	">
   


   <div className="flex gap-10">  
   <NavLink to="/beltrangold/jewelrys" >  
  
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

</NavLink>

<div id="carrito" onClick={cartClick}  className=" flex justify-center items-center cursor-pointer    z-20	 ">

<a
className=" text-black opacity-60  flex items-center"
aria-expanded="false"
>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
<span className="text-black bg-yellow-400 font-bold absolute rounded-full text-sm px-1.5 relative right-5 bottom-3">
{itemsAdded}
 </span>


</a>

</div>
   </div>




{/* FLAG */}
{/* <button className="w-16  p-2 h-full flex items-center justify-center hover:bg-stone-800" onClick={currentLanguage === 'es' ? changeToEnglish : changeToSpanish}>
    <h2 className="text-yellow-50 flex justify-center items-center gap-3 overflow-hidden h-30"> <div className="w-8 h-8"><img src={buttonImage} className="w-full h-full object-contain" alt="flags"/> </div>
    </h2>
  </button> */}


{/* MOON */}


{/* <div className="cursor-pointer ">
      {isMoonFill ? (

<svg xmlns="http://www.w3.org/2000/svg"           onClick={toggleMoon}
 width="25" height="25" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>
      
      ) : (
     
<svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMoon} width="25" height="25" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
</svg>
      )}
    </div> */}


</ul>


</div>


      


</nav>




<nav className={backgroundChange} >


        <div className="w-16 flex   justify-center items-center h-full">
          <div onClick={() => toggleVisibility(setShowMenu)} className="w-1/2 flex justify-center items-center h-full">
            {!showMenu && (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
            )}

            {showMenu && (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            )}
          </div>
        </div>

      </nav>


{shppingcart && (
  
 <div    className={`flex cursor-pointer text-white fixed top-0 right-0 w-screen z-50 bg-stone-800/25	 h-screen justify-end items-center z-10	 ${shppingcart ? "visible" : "invisible"}`} >


<div onClick={cartClick} className="absolute w-screen bg-stone-800/25 h-screen">

 </div>

 <div  className=" animated-element flex flex-col pt-2  w-1/3	 h-5/6	 bg-stone-950		  gap-3 relative z-20	  " data-mdb-zoom-effect="true">


 <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}  /> {/* Pass the cart items as a prop */}


 </div>


 </div>

 )}



{showMenu && (

<nav id="sideMenu" className={`animated-element-left bg-black w-64 fixed h-screen flex flex-col items-center justify-center top-20 z-40 ${showMenu ? 'open' : ''}`}>


<NavLink className="w-10/12	 h-28 mb-10 " onClick={() => setShowMenu(false)}  to="produktivo/">  <li>

<div className="w-full	 h-28  "> 
<img className="w-full h-full object-cover rounded-full" src="./logo.png" alt="" />
</div>
</li></NavLink> 
<ul className="text-white text-lg flex flex-col gap-5">

<li className="p-2 hover:bg-yellow-400 hover:text-black"> <NavLink exact="true" to="/beltrangold/" activeclassname="active"  >  {t('home')}</NavLink></li>
    <li className="p-2 hover:bg-yellow-400 hover:text-black"> <NavLink to="/beltrangold/about" activeclassname="active" > {t('about')}</NavLink></li>

        <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/ring" activeclassname="active">{t('rings')}</NavLink ></li>
        <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/pendant">{t('pendant')}</NavLink ></li>
        
        <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/chain" activeclassname="active">{t('chain')}</NavLink ></li>
        <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/bracelet" activeclassname="active">{t('bracelet')}</NavLink ></li>

        <li className="p-2 hover:bg-yellow-400 hover:text-black"> <NavLink to="/beltrangold/contact" activeclassname="active" >  {t('contact')}</NavLink></li>

                </ul>

               


<p className="mt-40 text-white text-xs w-52">© 2023 BELTRANGOLD Jewelry | Jewelry for a New Generation</p>

</nav>
              )}


</>




)
}

export default Navbar

































































// import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import Cart from '../cart/Cart';


// const Navbar = ({cartItems, clearCart, removeFromCart, itemsAdded}) => {



//   const [shppingcart, setShppingcart] = useState(false);

 

//    function cartClick() {

//     setShppingcart(!shppingcart);

//    }
//   const { t } = useTranslation();


//      // State to manage the visibility of nested lists
//      const [showMenu, setShowMenu] = useState(false);
//   const [cart, setCart] = useState([]);
// const [showServices, setShowServices] = useState(false);
//     const [menu, setmenu] = useState(true);
//   const [showMarketing, setShowMarketing] = useState(false);
//   const [showDesign, setShowDesign] = useState(false);
//   const [showResorces, setShowResorces] = useState(false);
//   const [isMoonFill, setIsMoonFill] = useState(true);



//   const [activeLink, setActiveLink] = useState('');

//   // Función para manejar el clic en un enlace
//   const handleNavLinkClick = (link) => {
//     setActiveLink(link);
//   };

//   const toggleMoon = () => {
//     setIsMoonFill(!isMoonFill);
//   };

//       const [currentLanguage, setCurrentLanguage] = useState('es');

  
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     const change = (e) => {
//     if (window.scrollY >= 400) {
  
//     setmenu(false)
//   } else {
//     setmenu(true)
  
//   }

// }

//   window.addEventListener("scroll", change)


//    const changeToEnglish = () => {
//     i18n.changeLanguage('en');
//     setCurrentLanguage('en');
//   };


//   const changeToSpanish = () => {
//     i18n.changeLanguage('es');
//     setCurrentLanguage('es');
//   };

 

//   const buttonImageEnglish = 'data:image/png;base64,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';
//   const buttonImageSpanish = 'data:image/png;base64,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';
  


//   const buttonImage = currentLanguage === 'es' ? buttonImageSpanish  : buttonImageEnglish;

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//       // Puedes ajustar el umbral según tu diseño
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerWidth <= 768) {
//         // Additional logic if needed
//       }
//     };
  
//     window.addEventListener('scroll', handleScroll);
  
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//   // Function to toggle the visibility of the nested list
//   const toggleVisibility = (setter) => {
//     setter((prevState) => !prevState);
//     // setter(!showMenu);

//   };
//   return (
// <>

// <nav className={menu ? "font-thin  text-xl z-50 oro  flex  w-full  h-24 justify-end text-white items-center absolute top-10 md:top-10	left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-9/12 md:justify-center md:oro 	" : "device oro fixed top-10 	 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50 flex w-full h-28  justify-center items-center "}>
    

//       {windowWidth <= 768 ? (
//         <div className="w-16 flex   justify-center items-center h-full">
//           <div onClick={() => toggleVisibility(setShowMenu)} className="w-1/2 flex justify-center items-center h-full">
//             {!showMenu && (
//               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="bi bi-list" viewBox="0 0 16 16">
//                 <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
//             )}

//             {showMenu && (
//               <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" className="bi bi-x-lg" viewBox="0 0 16 16">
//                 <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
//               </svg>
//             )}
//           </div>
//         </div>

//       ) : (

//         // aqui es destop


//         <div className=" w-full  flex min-w-80 ">
//   <ul className="w-9/12 h-full flex flex-wrap  justify-center items-center    text-lg text-white   gap-3 uppercase  z-20	">
//   <NavLink exact="true" to="/beltrangold/"  activeclassname="active" className="p-2 hover:bg-yellow-400 hover:text-black" ><li >   {t('home')}</li></NavLink>
//   <NavLink  to="/beltrangold/about" activeclassname="active" className="p-2 hover:bg-yellow-400 hover:text-black"  > <li >  {t('about')}</li></NavLink>

//   <NavLink  to="/beltrangold/ring" activeclassname="active" className="p-2 hover:bg-yellow-400 hover:text-black"  > <li >    {t('rings')}</li></NavLink>
//   <NavLink  to="/beltrangold/pendant " activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >   {t('pendant')}</li></NavLink>
        
//   <NavLink  to="/beltrangold/chain" activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >    {t('chain')}</li></NavLink>
//   <NavLink  to="/beltrangold/bracelet" activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >    {t('bracelet')}</li></NavLink>

//   <NavLink  to="/beltrangold/contact" activeclassname="active"  className="p-2 hover:bg-yellow-400 hover:text-black"> <li >    {t('contact')}</li></NavLink>

//    </ul>

// <ul className="w-4/12  flex  text-lg text-white   justify-evenly uppercase items-center z-20	">
   


//    <div className="flex gap-10">  
//    <NavLink to="/beltrangold/jewelrys" >  
  
//   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
// <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
// </svg>

// </NavLink>

// <div id="carrito" onClick={cartClick}  className=" flex justify-center items-center cursor-pointer    z-20	 ">

// <a
// className=" text-black opacity-60  flex items-center"
// aria-expanded="false"
// >
// <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
// <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
// </svg>
// <span className="text-black bg-yellow-400 font-bold absolute rounded-full text-sm px-1.5 relative right-5 bottom-3">
// {itemsAdded}
//  </span>


// </a>

// </div>
//    </div>




// {/* FLAG */}
// {/* <button className="w-16  p-2 h-full flex items-center justify-center hover:bg-stone-800" onClick={currentLanguage === 'es' ? changeToEnglish : changeToSpanish}>
//     <h2 className="text-yellow-50 flex justify-center items-center gap-3 overflow-hidden h-30"> <div className="w-8 h-8"><img src={buttonImage} className="w-full h-full object-contain" alt="flags"/> </div>
//     </h2>
//   </button> */}


// {/* MOON */}


// {/* <div className="cursor-pointer ">
//       {isMoonFill ? (

// <svg xmlns="http://www.w3.org/2000/svg"           onClick={toggleMoon}
//  width="25" height="25" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
// <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
// </svg>
      
//       ) : (
     
// <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleMoon} width="25" height="25" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
// <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
// </svg>
//       )}
//     </div> */}


// </ul>


// </div>


//       )}


// </nav>


// {shppingcart && (
  
//  <div    className={`flex cursor-pointer text-white fixed top-0 right-0 w-screen z-50 bg-stone-800/25	 h-screen justify-end items-center z-10	 ${shppingcart ? "visible" : "invisible"}`} >


// <div onClick={cartClick} className="absolute w-screen bg-stone-800/25 h-screen">

//  </div>

//  <div  className=" animated-element flex flex-col pt-2  w-1/3	 h-5/6	 bg-stone-950		  gap-3 relative z-20	  " data-mdb-zoom-effect="true">


//  <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart}  /> {/* Pass the cart items as a prop */}


//  </div>


//  </div>

//  )}



// {showMenu && (

// <nav id="sideMenu" className={`sideMenu bg-black w-64 fixed h-screen flex flex-col items-center justify-center z-40 ${showMenu ? 'open' : ''}`}>


// <NavLink className="w-10/12	 h-28 mb-10 " onClick={() => setShowMenu(false)}  to="produktivo/">  <li>

// <div className="w-full	 h-28  "> 
// <img className="w-full h-full object-cover rounded-full" src="./logo.png" alt="" />
// </div>
// </li></NavLink> 
// <ul className="text-white text-lg flex flex-col gap-5">

// <li className="p-2 hover:bg-yellow-400 hover:text-black"> <NavLink exact="true" to="/beltrangold/" activeclassname="active"  >  {t('home')}</NavLink></li>
//     <li className="p-2 hover:bg-yellow-400 hover:text-black"> <NavLink to="/beltrangold/about" activeclassname="active" > {t('about')}</NavLink></li>

//         <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/ring" activeclassname="active">{t('rings')}</NavLink ></li>
//         <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/pendant">{t('pendant')}</NavLink ></li>
        
//         <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/chain" activeclassname="active">{t('chain')}</NavLink ></li>
//         <li className="p-2 hover:bg-yellow-400 hover:text-black">   <NavLink to="/beltrangold/bracelet" activeclassname="active">{t('bracelet')}</NavLink ></li>

//         <li className="p-2 hover:bg-yellow-400 hover:text-black"> <NavLink to="/beltrangold/contact" activeclassname="active" >  {t('contact')}</NavLink></li>

//                 </ul>

               


// <p className="mt-40 text-white text-xs w-52">© 2023 BELTRANGOLD Jewelry | Jewelry for a New Generation</p>

// </nav>
//               )}


// </>




// )
// }

// export default Navbar
