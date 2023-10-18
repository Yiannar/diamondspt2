import React from 'react';

const DiamondCard = ({ diamond, setCart, cart }) => {
  function updatedCart(selectedDiamond) {
    if (cart.includes(selectedDiamond)) {
      alert('You have already added this diamond to the cart');
    } else {
      setCart([...cart, selectedDiamond]);
    }
  }

  return (
    <div>
      <h2>{diamond.shape}</h2>
      <img src={diamond.image} alt={diamond.shape} />
      <h4>Price: ${diamond.price}</h4>
      <button onClick={() => updatedCart(diamond)}>Add to Cart</button>
    </div>
  );
};

export default DiamondCard;
