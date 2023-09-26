import React from 'react';
import es from '../18next/es.json';
import { Link } from 'react-router-dom';

const Rings = () => {


    const productCount = es.rings.length; // Calculate the number of products
    return (
    <section className="w-full flex flex-col ">

<div className="portadR w-full h-96 flex items-center justify-center">
<h3 className="text-5xl text-white text-yellow-300">RINGS</h3>

</div>



      <div className="w-full p-8 mt-20 flex  justify-between">

     <h4 className="w-2/3"> Sort by: <select> <option value="feature">Feature</option>  
      </select>
      
      </h4>
      <span className="w-2/3  text-end">{productCount} Products</span>
      
      </div>

 
 <ul className="flex w-full flex-wrap">
 {es.rings.map((ring) => (
        <li key={ring.id} className="bg-zinc-100 w-2/4 h-52 flex flex-col justify-between gap-3 p-2 mb-3 md:w-1/4 h-80">
        <Link to={`/beltranJewerly/rings/${ring.name}`} className="w-full h-72 overflow-hidden">
          <img className="w-full h-full object-cover" src={ring.img} alt="" />
        </Link>
        <div className="h-12 w-full flex flex-col items-start">
          <span className="w-full text-black text-xl">{ring.name}</span>
          <p className="text-gray-500">{ring.prices}</p>
        </div>
      </li>
      ))}
      </ul>
    </section>
  );
}

export default Rings;
