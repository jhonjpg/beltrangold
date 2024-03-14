import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/product') // La URL debe coincidir con la ruta de tu servidor
      .then((response) => {
        setProducts(response.data);

        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, []);

  return (
//     <div>
//       <h2>Lista de productos:</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//  <div className="w-24 h-full overflow-hidden" data-mdb-ripple="true">
//               <img className="object-cover w-full h-full" src={product.images} alt={product.name} />
//               </div>            {product.name} - {product.description} - Precio: {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>


<div className="flex flex-col items-center h-screen w-full justify-center text-4xl ">   Pago exitoso</div>
  );
};

export default ProductList;
