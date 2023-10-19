import React, { createContext, useState } from 'react';

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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId].quantity > 0) {
        totalAmount += cartItems[itemId].quantity * cartItems[itemId].price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: (prev[itemId]?.quantity || 0)+ 1,
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
    checkout,
    diamonds,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
