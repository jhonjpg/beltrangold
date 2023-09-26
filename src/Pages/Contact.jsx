import React from 'react'

const Contact = () => {
  return (
<>

<section className=" contact w-screen h-screen flex flex-col items-center justify-evenly">

  
<h2 className="text-5xl  text-slate-400	">  CONTACT US</h2>






</section>


<section className="skin w-full  flex flex-col items-center gap-1 md:flex-row">

   
   <div className="w-full h-full p-2 flex  flex-col items-center justify-center">
   <p className="mb-5 w-96  ">Feel free to contact us and we will get back to you as soon as we can </p>

    <form action="w-full h-full ">

        <input  className="w-72 bg-slate-100" type="text" placeholder="Name" />

        <input className="w-72 bg-slate-100" type="text" placeholder="Email"/>

<input className="w-72 bg-slate-100" type="text" placeholder="Email"/>

<textarea className="bg-slate-100" name="" id="" cols="33" rows="5" placeholder="Messege"></textarea>

<input className="bg-slate-100 text-slate-500 text-black w-20 text-center p-2" type="send" value="SEND"/>

    </form>

    </div>


    <ul className="w-full h-full flex flex-col items-center gap-5 bg-slate-100 p-3">
   <li>
   <pre className="text-gray-400 w-full text-center">OPENING HOURS</pre>
   <p className="text-xl w-full text-center">Monday-Friday</p>
    <p>8:00 Am - 6:00 Pm</p>
<p className="text-xl w-full text-center">Saturday</p>
<p>8:00 Am - 3:00 Pm</p>


</li>

<li>
   <pre className="text-gray-400 w-full text-center">ADDRESS</pre>
    <p className="w-40">new york, Mahhattan st, sherleton ave</p>



</li>


<li>
   <pre className="text-gray-400 w-full text-center">SUPPORT</pre>
    <p className="w-40">beltjerwrl@gmail.com</p>
    <p className="w-40">51+495-3845</p>




</li>


   </ul>
</section>


</>


)
}

export default Contact