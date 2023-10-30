import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AllProducts = () => {
  const { t, i18n } = useTranslation();
  const [allProductsData, setAllProductsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadAllProductsData = async () => {
      try {
        const beltranCoProducts = [
          ...t('BeltranCo.pendant', { returnObjects: true }),
          ...t('BeltranCo.chain', { returnObjects: true }),
          ...t('BeltranCo.bracelet', { returnObjects: true }),
          // Agrega más categorías si es necesario
        ];
    
        // Filtrar productos en función del término de búsqueda
        const filteredProducts = beltranCoProducts.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    
        setAllProductsData(filteredProducts);
    
        // Actualizar las sugerencias
        setSuggestions(filteredProducts.map((product) => product.name));
      } catch (error) {
        console.error('Error cargando los datos de todos los productos:', error);
      }
    };
    loadAllProductsData();
  }, [i18n.language, searchTerm]);

  return (
    <div className="container mx-auto p-6 pt-60">
    
    <input
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
      {Object.values(allProductsData).map((product) => (
  <div key={product.id} className="product-card overflow-hidden">
    <Link to={`/beltrangold/${product.category}/${product.name}`} className="block aspect-w-3 aspect-h-4">
      <img
        src={product.img}
        alt={product.name}
        className="rounded-t-lg w-full h-full object-cover transform hover:scale-125 transition-transform duration-500"

      />
    </Link>
    <div className="p-4 bg-white rounded-b-lg">
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600">${product.prices}</p>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default AllProducts;
