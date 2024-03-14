import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { InView } from 'react-intersection-observer';


const Contact = ({cartItems, clearCart, removeFromCart, itemsAdded}) => {

  const { t } = useTranslation(); // Obtiene la función de traducción

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
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

    <section id="mainPhoto" className="w-screen overflow-hidden mt-10 flex flex-col  justify-center items-center relative md:w-full ">
   

    <div className=" w-full h-5/6	 md:w-full md:h-full 	">

    <div className="absolute z-10   flex justify-center items-center bg-opacity-50 bg-black w-full	 h-full	    ">
      </div>

<div className="w-full h-full absolute">
  <img src="https://images.pexels.com/photos/9430992/pexels-photo-9430992.jpeg?auto=compress&cs=tinysrgb&w=800 " className="w-full h-full object-cover grayscale" alt="" />
</div>

      </div>
    
      <div className="absolute z-30   flex justify-center items-center bg-opacity-25 bg-black w-full	 h-full	    ">

    <div className="w-full h-full text-white text-center flex justify-center items-center gap-4 flex-col ">

    <div className="w-full flex justify-center text-center  h-auto rounded-lg	 overflow-hidden ">
<h2 className="text-7xl text-white w-9/12 border-b-2 border-yellow-400 border-solid pb-5 md:w-6/12 md:text-8xl">Contact Us</h2>

</div>



<p  className= 'mb-5 text-xl text-center  w-80' >Feel free to contact us and we will get back to you as soon as we can</p>


    </div>
  </div>

    </section>


<div className="w-full overflow-hidden">
    <InView triggerOnce="false">
    {({ inView, ref, entry }) => (

    <ul ref={ref} className={inView ? 'animationLeft w-full h-full flex flex-col justify-around  items-center bg-black gap-5  p-2 md:flex-row': 'opacity-0'}>
          <li>
            <pre className="text-gray-400 w-full text-3xl  text-center">OPENING HOURS</pre>
            <p className="text-xl w-full text-center">Monday-Friday</p>
            <p className="text-lg w-full text-center">8:00 AM - 7:00 PM</p>
          </li>

          <li>
            <pre className="text-gray-400 w-full text-3xl text-center">ADDRESS</pre>
            <p className="w-40 text-center">#17, 55 W 47th St, New York, NY 10036, Estados Unidos</p>
          </li>
          

          <li>
            <pre className="text-gray-400 w-full text-3xl text-center">SUPPORT</pre>
            <p className="w-50"> EMAIL: beltrancoenterprise@gmail.com
</p>
            <p className="w-40">            TEL: 809-343-3323
</p>
          </li>
        </ul>

)}

</InView>

</div>
        <div className="w-full  h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.3173521612518!2d-73.98153490676124!3d40.75795641364489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ff0efaa371%3A0xce503abbad093712!2sDiamond%20Dare!5e0!3m2!1ses!2sus!4v1706201576813!5m2!1ses!2sus"
    width="100%"
    height="100%"
    style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>




        <div className="bg-black w-full mb-5 flex  items-center gap-1 md:flex-row p-5">
    <div className="w-full h-full p-2 flex flex-col items-center justify-center">
         
          <form className=" w-full" onSubmit={handleSubmit}>
            <input
              className="w-10/12 p-4 bg-black border-b-2 border-solid border-yellow-400 "
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              className="w-10/12 p-4 bg-black border-b-2 border-solid border-yellow-400 "
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <textarea
              className="w-10/12 p-4 bg-black border-b-2 border-solid border-yellow-400 "
              name="message"
              id="message"
              cols="33"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            <input className=" text-white border-solid border-2 border-yellow-400 mt-10   hover:bg-yellow-400 hover:text-black  text-black w-20 text-center p-2" type="submit" value="SEND" />
          </form>
        </div>

   
        </div>
    </section>




    </main>

  

 
    </>
  );
};

export default Contact;
