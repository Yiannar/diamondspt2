import React, { useState, useEffect } from "react";
import Diamond from './Diamond';
import '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/componets/Diamonds.css';
import axios from "axios";
// import CartIcon from './CartIcon';

const API = process.env.REACT_APP_API_URL;

const Diamonds = () => {
  const [diamonds, setDiamonds] = useState([]);
  const [cart, setCart] = useState([])
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (diamond) => {
    const itemIndex = cart.findIndex((item) => item.id === diamond.id);
  
    if (itemIndex === -1) {
      // If the item is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...diamond, quantity: 1 }]);
    } else {
      // If the item is in the cart, update its quantity
      const updatedCart = cart.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    }
  
    // Update the cart count
    setCartCount(cartCount + 1);
  };
  

  useEffect(() => {
    axios
      .get(`${API}/diamonds`)
      .then((res) => {
        setDiamonds(res.data);
      })
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className='shop'>
      <br/>
      <br/>
      <br/>
      <h2 className='shopTitle'>Select a diamond</h2>
      <br/>
      <br/>
      <br/>

      {diamonds.map((diamond) => {
        return (
          <Diamond
            key={diamond.id}
            diamond={diamond}
          />
        );
      })}
    </div>
  );
};

export default Diamonds;
