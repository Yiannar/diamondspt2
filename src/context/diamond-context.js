import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const ShopContext = createContext(null);

const getDefaultCart = (diamonds) => {
  let cart = {};
  if (Array.isArray(diamonds)) {
    diamonds.forEach((diamond) => {
      cart[diamond.id] = {
        quantity: 0,
        price: diamond.price,
      };
    });
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const { diamonds } = props;

  const [cartItems, setCartItems] = useState(getDefaultCart(diamonds));
  const [totalAmount, setTotalAmount] = useState(0); // New state for totalAmount
  const [diamondsData, setDiamonds] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
    .get(`${API}/diamonds`).then((res) => {
      setDiamonds(res.data);
      if (Object.keys(cartItems).length === 0) {
        setCartItems(getDefaultCart(res.data));
      }
    });
  }, []);

  const getTotalCartAmount = () => {
    let newTotalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId].quantity > 0) {
        newTotalAmount += cartItems[itemId].quantity * cartItems[itemId].price;
      }
    }
    setTotalAmount(newTotalAmount); // Update the total amount state
    return newTotalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: (prev[itemId]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: prev[itemId].quantity - 1,
      },
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: newAmount,
      },
    }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(diamonds));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    totalAmount, // Include the totalAmount in the context value
    checkout,
    diamonds,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
