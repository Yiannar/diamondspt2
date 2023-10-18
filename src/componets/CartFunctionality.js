// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom"; // Import useParams
// import Cart from "./Cart";
// const API = process.env.REACT_APP_API_URL;

// function CartFunctionality() {
//   const [cart, setCart] = useState([]);
//   const { id } = useParams(); // Use useParams to get the "id" parameter from the URL

//   // Make an Axios request to fetch the cart data when the component mounts
//   useEffect(() => {
//     axios
//       .get(`${API}/diamonds/${id}`)
//       .then((response) => {
//         // Set the cart data from the Axios response
//         setCart(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching cart data: ", error);
//       });
//   }, [id]); // Use [id] as the dependency to run the effect whenever "id" changes

//   const updateQuantity = (itemId, newQuantity) => {
//     if (newQuantity <= 0) {
//       removeFromCart(itemId); // If the quantity becomes 0 or less, remove the item
//     } else {
//       const updatedCart = cart.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       );
//       setCart(updatedCart);
//     }
//   };

//   const removeFromCart = (itemId) => {
//     const updatedCart = cart.filter((item) => item.id !== itemId);
//     setCart(updatedCart);
//   };

//   return (
//     <div className="App">
//       <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
//     </div>
//   );
// }

// export default CartFunctionality;
