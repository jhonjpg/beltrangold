import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Bracelet = () => {
  const { t } = useTranslation();
  const braceletData = t('BeltranCo.bracelet', { returnObjects: true });
  const productCount = braceletData.length;


  const [sortBy, setSortBy] = useState('feature'); // Valor predeterminado: 'feature'
  const [sortedbraceletData, setSortedbraceletData] = useState([]);
  

  const sortbraceletData = (criterion) => {
    if (criterion === 'feature') {
      // Ordenar por características (cualquier lógica que desees)
      const sortedData = [...braceletData].sort((a, b) => {
        // Agrega tu lógica de orden aquí, por ejemplo:
        return a.feature - b.feature;
      });
      setSortedbraceletData(sortedData);
    } else if (criterion === 'price') {
      // Ordenar por precios
      const sortedData = [...braceletData].sort((a, b) => {
        return a.prices - b.prices;
      });
      setSortedbraceletData(sortedData);
    } else if (criterion === 'name') {
      // Ordenar por nombre
      const sortedData = [...braceletData].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setSortedbraceletData(sortedData);
    }
  };
  

  useEffect(() => {
    sortbraceletData(sortBy); // Ordenar inicialmente por el criterio predeterminado ('feature')
  }, [braceletData, sortBy]);
  


  
  return (
    <section className="w-full flex flex-col">
      <div className="portadB w-full h-96 flex items-center justify-center">
        <h3 className="text-5xl text-white text-yellow-300">{t('bracelet')}</h3>
      </div>
      <div className="w-full p-8 mt-20 flex justify-between">
      <h4 className="w-2/3">
  Sort by: 
  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
    <option value="feature">Feature</option>
    <option value="price">Price</option>
    <option value="name">Name</option>
  </select>
</h4>
        <span className="w-2/3 text-end">{productCount} Products</span>
      </div>
      <ul className="flex w-full flex-wrap gap-3 justify-center">
        {sortedbraceletData.map((bracelet) => (
          <li key={bracelet.id} className="w-2/5 h-52 flex flex-col justify-between gap-3 p-2 mb-3 md:w-1/4 md:h-80">
            <Link to={`/beltrangold/bracelet/${bracelet.name}`} className="w-full h-72 overflow-hidden">
              <img className="w-full h-full object-cover" src={bracelet.img} alt="" />
            </Link>
            <div className="h-12 w-full flex flex-col items-start">
              <span className="w-full text-black text-lg">{bracelet.name}</span>
              <p className="text-gray-500">{bracelet.prices}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Bracelet;
