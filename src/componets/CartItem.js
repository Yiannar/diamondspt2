import React, { useContext } from 'react';
import { ShopContext } from '../context/diamond-context';

const CartItem = ({ diamond }) => {
  const { id, shape, image, price } = diamond;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  function getPriceInDecimal(price) {
    return (price / 100).toFixed(2);
  }

  return (
    <div className='cartItem'>
      <h1>{shape}</h1>
      <img className="diamondimg" src={image} alt="diamonds" />
      <h4>Price: ${getPriceInDecimal(price)}</h4>
      <div>
        <button onClick={() => removeFromCart(id)}>-</button>
        <input
  value={isNaN(cartItems[id]) ? '' : cartItems[id]}
  onChange={(e) => {
    const newValue = Number(e.target.value);
    if (!isNaN(newValue)) {
      updateCartItemCount(newValue, id);
    }
  }}
/>

        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
