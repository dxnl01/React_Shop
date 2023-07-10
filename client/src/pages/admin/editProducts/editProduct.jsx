import React, { useState, useEffect } from 'react';
import { Product } from './Products';
import axios from 'axios';

const API_URL = 'http://example.com/products/'; // Reemplaza 'http://example.com/products/' con la URL de tu servidor web

export const EditProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      console.error('Products not found:', error);
    }
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Edit Products</h1>
      </div>
      <div className="products">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
