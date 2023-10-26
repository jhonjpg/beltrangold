import React from 'react'
import es from '../18next/es.json';
import { Link } from 'react-router-dom';

 

const Pendant = () => {

    const productCount = es.BeltranCo.pendant.length; // Calculate the number of products

  return (
    <section className="w-full flex flex-col ">


<div className="portadN w-full h-96 flex  items-center justify-center">

<h3 className="text-5xl text-white text-yellow-300">Pendant</h3>


</div>

    <div className=" w-full p-8 mt-20 flex  justify-between">

   <h4 className="w-2/3"> Sort by: <select> <option value="feature">Feature</option>  
    </select>
    
    </h4>
    <span className="w-2/3  text-end">{productCount} Products</span>
    
    </div>


<ul className="flex w-full flex-wrap gap-3 justify-center ">
      {es.BeltranCo.pendant.map((pendant) => (
        <li key={pendant.id} className=" w-2/5 h-52 flex flex-col justify-between gap-3 p-2 mb-3 md:w-72 h-80">
        <Link to={`/BeltranJewelry/pendant/${pendant.name}`} className="w-full h-72 overflow-hidden">
          <img className="w-full h-full object-cover" src={pendant.img} alt="" />
        </Link>
        <div className="h-12 w-full flex flex-col items-start">
          <span className="w-full text-black text-lg">{pendant.name}</span>
          <p className="text-gray-500">{pendant.prices}</p>
        </div>
      </li>
      ))}
    </ul>
  </section>  )
}

export default Pendant