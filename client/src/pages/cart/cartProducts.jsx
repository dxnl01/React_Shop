import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import './cart.css'

function cartItem({ product }) {
  const { removeFromCart } = useContext(ShopContext);

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="cartItem">
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </div>
      <button onClick={handleRemoveFromCart}>Remover</button>
    </div>
  );
}

export default cartItem;
