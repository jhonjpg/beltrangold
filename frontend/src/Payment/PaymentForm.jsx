import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('tu_clave_publica_de_stripe');

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const stripe = await stripePromise;
      const response = await fetch('/product'); // Ruta en tu servidor para obtener los productos
      const productData = await response.json();
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: {product.price.formatted}</p>
            {/* Agrega más detalles del producto según tus necesidades */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
