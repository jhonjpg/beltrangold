import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Pendant = ({cartItems, clearCart, removeFromCart, itemsAdded}) => {
  const [pendantData, setPendantData] = useState([]);
  const [sortedPendantData, setSortedPendantData] = useState([]);
  const [sortBy, setSortBy] = useState('feature'); // Default value: 'feature'
  const [loading, setLoading] = useState(true);
  const productCount = pendantData.length;


  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);




  useEffect(() => {
    axios.get('http://localhost:3002/pendant')
      .then((response) => {
        setPendantData(response.data);
        setSortedPendantData(response.data); // Configura sortedPendantData con los datos reales
        setLoading(false); // Oculta el spinner
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        if (error.response) {
          console.error('Response Data:', error.response.data);
          console.error('Status Code:', error.response.status);
        }
      });
  }, []);

  useEffect(() => {
    sortPendantData(sortBy); // Initial sorting by the default criterion ('feature')
  }, [sortBy]);

  const sortPendantData = (criterion) => {
    if (criterion === 'feature') {
      // Sort by features (add your sorting logic)
      const sortedData = [...pendantData].sort((a, b) => {
        // Add your sorting logic here, e.g., compare a.feature to b.feature
        return a.feature - b.feature;
      });
      setSortedPendantData(sortedData);
    } else if (criterion === 'price') {
      // Sort by prices
      const sortedData = [...pendantData].sort((a, b) => {
        return a.price.unit_amount - b.price.unit_amount;
      });
      setSortedPendantData(sortedData);
    } else if (criterion === 'name') {
      // Sort by name
      const sortedData = [...pendantData].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setSortedPendantData(sortedData);
    }
  };

  return (
    <section className="w-full flex flex-col pt-20">

<Navbar cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} itemsAdded={itemsAdded}/>    

    <div className="w-full h-60  text-white flex flex-col gap-4 items-center justify-center">
       <h2 className="text-6xl md:text-8xl">PENDANT</h2>

       <h4 className="text-xl font-thin"><Link to="/beltrangold/" >  Home</Link> / <span className="text-yellow-400">Pendant</span> </h4>
      </div>
      <div className="w-full p-8 mt-20 flex justify-between">
        <h4 className="w-2/3">
          Ordenar por:
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-yellow-400 text-xl p-3 bg-black text-white rounded p-2"
          >
            <option value="feature">Filter</option>
            <option value="price">Precio</option>
            <option value="name">Nombre</option>
          </select>
        </h4>
        <span className="w-2/3 text-right text-white text-xl ">{productCount} Productos</span>
      </div>

      <div className="relative">
      {showSpinner && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  text-yellow-400 opacity-75 scale-150 mb-60">
          {/* Add your spinner component here */}
          <div className="spinner " ></div>
        </div>
      )}

<ul className="flex w-full flex-wrap gap-3 justify-center   mb-20">
        {sortedPendantData.map((pendant) => (
                     <Link key={pendant.id} to={`/beltrangold/pendant/${pendant.name}`} className="w-2/5 h-auto overflow-hidden rounded-lg  bg-white  md:w-1/3 lg:w-1/4 flex flex-col gap-3  mb-3">
                     <li  className="w-full h-auto  ">
           <div className="w-full h-80	 overflow-hidden	 ">

              <img className="w-full h-full object-cover transform hover:scale-125 transition-transform duration-500" src={pendant.images} alt={pendant.name} />

           </div>
           <div className="h-auto w-full flex flex-col justify-evenly p-3">
              <span className=" text-lg font-semibold">{pendant.name}</span>
              <p className="text-gray-500">${(pendant.price.unit_amount / 100)} USD</p>
            </div>
          </li>
          </Link>

        ))}
      </ul>
    </div>
   
    </section>
  );
};

export default Pendant;


