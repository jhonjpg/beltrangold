import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (

    <section className="flex flex-col justify-center  items-center w-screen h-screen">


<div className="w-90 h-4/6  flex flex-col justify-center  items-center	 overflow-hidden ">
<img className="w-full h-full object-cover rounded-full" src="./logo.png" alt="" />
</div>

<div className="flex flex-col justify-center  items-center testim text-white w-screen  text-6xl  ">Page Not Found</div>

<span className="text-blue-400 text-2xl mt-10 w-full flex  justify-center gap-3 hover:text-white cursor-pointer"> <Link  to="/beltrangold/jewelrys"  className="flex gap-3" >GO BACK <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg> </Link></span> 

    </section>
  )
}

export default PageNotFound