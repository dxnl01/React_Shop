import React from "react"; // Importamos react
import { useState } from 'react'; // Hook para añadir estado a los componentes de funcion
import './cart.css';


function ShoppingCart({ products }) { // Prop = product
  const [cartItems, setCartItems] = useState([]) ; // cartItems almacenará los productos del carrito. El estado inicial será un array vacio.
  // setCartItems se usará para actualizar el estado cartItems  

  // Función para agregar un producto al carrito

  const addToCart = (product) => { // Tomamos un producto como argumento para actualizar el estado de cartItems mediante la adicion del producto al array.
    setCartItems([...cartItems, product]); // Utilizando el operador spread, así devolvemos un nuevo array con los productos ya existentes y el nuevo.
  };

  // Función para eliminar un producto del carrito

  const removeFromCart = (product) => { // Recibe un producto como argumento
    const updatedCartItems = cartItems.filter(item => item.id !== product.id); // Con filter creamos un nuevo array que con tiene todos los elementos de cartItems
    // menos los que tienen el mismo ID que el producto pasado como argumento. 
    setCartItems(updatedCartItems); // Se actualiza el estado de cartItems con el nuevo array usando setCartItems
  };

  // Calcular el total de la compra

  const calculateTotal = () => { // Se suman los precios de todos los productos de la compra para sacar el total de la compra
    let total = 0;
    cartItems.forEach(item => { // Recorremos cada elemento del array cartItems
      total += item.price; // Y agregamos su precio al total s
    });
    return total;
  };

  // Devolvemos el contenido del carro

  return (
    <div>
      <h2>Carrito de Compra</h2>

      <ul>
        {cartItems.map(item => ( // Se muestra el contenido del carrito y se le agrega un elemento li a cada producto usando un bucle .map
          <li key={item.id}>   
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Eliminar</button> 
          </li>
        ))}
      </ul>

      <p>Total: ${calculateTotal()}</p>

      <h3>Productos Disponibles</h3>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
 }

export default ShoppingCart;