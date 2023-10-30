import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Ring = () => {
  const { t } = useTranslation();
  const chainData = t('BeltranCo.ring', { returnObjects: true });
  const productCount = chainData.length;

  const [sortBy, setSortBy] = useState('feature');
  const [sortedchainData, setSortedchainData] = useState([]);

  const sortchainData = (criterion) => {
    if (criterion === 'feature') {
      const sortedData = [...chainData].sort((a, b) => a.feature - b.feature);
      setSortedchainData(sortedData);
    } else if (criterion === 'price') {
      const sortedData = [...chainData].sort((a, b) => a.prices - b.prices);
      setSortedchainData(sortedData);
    } else if (criterion === 'name') {
      const sortedData = [...chainData].sort((a, b) => a.name.localeCompare(b.name));
      setSortedchainData(sortedData);
    }
  };

  useEffect(() => {
    sortchainData(sortBy);
  }, [sortBy]);
  
  return (
    <section className="w-full flex flex-col pt-20">
     <div className=" w-full h-96 flex items-center justify-center">
  <img
    src="../jewelry4.jpg" // Replace with the actual image source
    alt="Rings Banner" // Provide an appropriate alt text for accessibility
    className="w-full h-full object-contain"
  />
</div>

      <div className="w-full p-8 mt-20 flex justify-between">
        <h4 className="w-2/3">
          Sort by: 
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded p-2"
          >
            <option value="feature">Feature</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </h4>
        <span className="w-2/3 text-right text-gray-600">{productCount} Products</span>
      </div>
      <ul className="flex w-full flex-wrap gap-3 justify-center mb-20">
        {sortedchainData.map((chain) => (
          <li key={chain.id} className="w-2/5 md:w-1/3 lg:w-1/4 flex flex-col gap-3 p-2 mb-3">
            <Link to={`/beltrangold/ring/${chain.name}`} className="w-full h-72 overflow-hidden">
              <img   className="w-full h-full object-cover transform hover:scale-125 transition-transform duration-500"
 src={chain.img} alt="" />
            </Link>
            <div className="h-12 w-full flex flex-col items-start">
              <span className="text-black text-lg font-semibold">{chain.name}</span>
              <p className="text-gray-500">${chain.prices}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ring;
