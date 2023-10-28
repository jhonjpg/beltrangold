import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Chain = () => {
  const { t } = useTranslation();
  const chainData = t('BeltranCo.chain', { returnObjects: true });
  const productCount = chainData.length;

  const [sortBy, setSortBy] = useState('feature'); // Valor predeterminado: 'feature'
  const [sortedChainData, setSortedChainData] = useState([]);
  

  const sortChainData = (criterion) => {
    if (criterion === 'feature') {
      // Ordenar por características (cualquier lógica que desees)
      const sortedData = [...chainData].sort((a, b) => {
        // Agrega tu lógica de orden aquí, por ejemplo:
        return a.feature - b.feature;
      });
      setSortedChainData(sortedData);
    } else if (criterion === 'price') {
      // Ordenar por precios
      const sortedData = [...chainData].sort((a, b) => {
        return a.prices - b.prices;
      });
      setSortedChainData(sortedData);
    } else if (criterion === 'name') {
      // Ordenar por nombre
      const sortedData = [...chainData].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setSortedChainData(sortedData);
    }
  };
  

  useEffect(() => {
    sortChainData(sortBy); // Ordenar inicialmente por el criterio predeterminado ('feature')
  }, [chainData, sortBy]);
  


  

  return (
    <section className="w-full flex flex-col">
      <div className="portadN w-full h-96 flex items-center justify-center">
        <h3 className="text-5xl text-white text-yellow-300">{t('chain')}</h3>
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
        {sortedChainData.map((chain) => (
          <li key={chain.id} className="w-2/5 h-52 flex flex-col justify-between gap-3 p-2 mb-3 md:w-1/4 h-80">
            <Link to={`/beltrangold/chain/${chain.name}`} className="w-full h-72 overflow-hidden">
              <img className="w-full h-full object-cover" src={chain.img} alt="" />
            </Link>
            <div className="h-12 w-full flex flex-col items-start">
              <span className="w-full text-black text-lg">{chain.name}</span>
              <p className="text-gray-500">{chain.prices}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Chain;
