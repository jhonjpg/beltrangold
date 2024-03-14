import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Navbar from '../components/Navbar';

const AllProducts = ({ cartItems, clearCart, removeFromCart, itemsAdded }) => {
  const { t, i18n } = useTranslation();
  const [allProductsData, setAllProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loadedProducts, setLoadedProducts] = useState(210); // Número inicial de productos cargados
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null); // Referencia para el input de búsqueda

  useEffect(() => {
    const loadInitialProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3002/all');
        const beltranCoProducts = response.data.slice(0, loadedProducts);
        setAllProductsData(beltranCoProducts);
        setSuggestions(beltranCoProducts.map((product) => product.name));
      } catch (error) {
        console.error('Error cargando los datos de los productos:', error);
      }
    };
    loadInitialProducts();
  }, []);

  useEffect(() => {
    const loadMoreProducts = async () => {
      if (!isLoading) {
        setIsLoading(true);
        try {
          const response = await axios.get(`http://localhost:3002/all?start=${loadedProducts}&limit=30`);
          const additionalProducts = response.data;
          setAllProductsData((prevProducts) => [...prevProducts, ...additionalProducts]);
          setLoadedProducts(prevLoadedProducts => prevLoadedProducts + additionalProducts.length);
          setIsLoading(false);
        } catch (error) {
          console.error('Error cargando más productos:', error);
          setIsLoading(false);
        }
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadedProducts, isLoading]);

  return (
    <>
      <Navbar cartItems={cartItems} clearCart={clearCart} removeFromCart={removeFromCart} itemsAdded={itemsAdded} />

      <div className="w-60 m-auto h-auto rounded-full overflow-hidden pt-36">
        <img className="w-full h-full object-cover rounded-full" src="./logo.png" alt="" />
      </div>
      <div className="container h-auto mx-auto p-6 ">
        <input
          ref={inputRef} // Asignar la referencia al input de búsqueda
          type="text"
          placeholder="Search Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          list="product-suggestions"
        />
        <datalist id="product-suggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProductsData.map((product, index) => {
            const nameWords = product.name.split(' ');
            const productType = nameWords[nameWords.length - 1];

            return (
              <div key={index} className="product-card overflow-hidden">
                <Link
                  to={`/beltrangold/${productType}/${product.name}`}
                  className="block aspect-w-3 aspect-h-4"
                >

<li  className="w-full h-auto  ">
<div className="w-full h-80	 overflow-hidden	 ">

<img
                    src={product.images}
                    alt={product.name}
                    className="rounded-t-lg w-full h-full object-cover transform hover:scale-125 transition-transform duration-500"
                  />
</div>

</li>
                
                </Link>
                <div className="p-4 bg-white rounded-b-lg">

                  <div className="h-24 w-full flex flex-col justify-evenly">
                  <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600">${(product.price.unit_amount / 100).toFixed(2)}</p>
            </div>
                </div>
              </div>
            );
          })}
          {isLoading && <p>Cargando más productos...</p>}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
