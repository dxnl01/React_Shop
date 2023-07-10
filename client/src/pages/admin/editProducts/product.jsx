import React, { useState } from "react";
import axios from 'axios';

const URI = 'http://example.com/products/'; // Reemplaza 'http://example.com/products/' con la URL de tu servidor web

export const Product = (props) => {
  const { id, nombre, precio, img1, img2, img3, stockMax, stockMin } = props.data;
  const [priceHook, setPrice] = useState(precio); // Modificado para inicializar el estado con el precio actual
  const [maxStock, setMaxS] = useState(stockMax); // Modificado para inicializar el estado con el stock máximo actual
  const [minStock, setMinS] = useState(stockMin); // Modificado para inicializar el estado con el stock mínimo actual

  const update = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${URI}/${id}`, {
        precio: priceHook,
        stockMax: maxStock,
        stockMin: minStock,
      });
      // Opcional: Actualizar el estado local con los nuevos valores
      // solo si deseas refrescar los datos en el componente sin hacer una nueva petición GET
      // setPrice(priceHook);
      // setMaxS(maxStock);
      // setMinS(minStock);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  return (
    <div className="product">
      <div className="slide-var">
        <ul>
          <li><img src={img1} alt={nombre}/></li>
          <li><img src={img2} alt={nombre}/></li>
          <li><img src={img3} alt={nombre}/></li>
        </ul>
      </div>
      <div className="description">
        <p><b>{nombre}</b></p>
        <p>${priceHook}</p> {/* Modificado para mostrar el estado actualizado */}
        <p>Max Stock: {maxStock}</p> {/* Modificado para mostrar el estado actualizado */}
        <p>Min Stock: {minStock}</p> {/* Modificado para mostrar el estado actualizado */}
        <form onSubmit={update} action="/auth" method="post">
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={priceHook} // Modificado para establecer el valor del input con el estado actualizado
            type="text"
            name="pass"
            id="pass"
            placeholder="New Price"
          />
          <input
            onChange={(e) => setMaxS(e.target.value)}
            value={maxStock} // Modificado para establecer el valor del input con el estado actualizado
            type="text"
            name="pass"
            id="pass"
            placeholder="New Max Stock"
          />
          <input
            onChange={(e) => setMinS(e.target.value)}
            value={minStock} // Modificado para establecer el valor del input con el estado actualizado
            type="text"
            name="pass"
            id="pass"
            placeholder="New Min Stock"
          />
          <input type="submit" className="btn-login" value="Edit" />
        </form>
      </div>
    </div>
  );
};
