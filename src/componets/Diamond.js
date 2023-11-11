import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Diamond.css";
import {ShopContext} from '../context/diamond-context'

function Diamond({ diamond }) {
  const { id, shape, image, price } = diamond;
  const {addToCart, cartItems} = useContext(ShopContext)



  const cartItemCount = cartItems[id]

  return (
    <div className="diamonds-list-container">
      <Link to={`/diamonds/${diamond.id}`}>
        <div className="shape">
          <h1>{shape}</h1>
          <img className="diamondimg" src={image} alt="diamonds" />
          <h4>Price: ${diamond.price}</h4>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Diamond;
