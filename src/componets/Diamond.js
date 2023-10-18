import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Diamond.css";
import {ShopContext} from '../context/diamond-context'

function Diamond({ diamond }) {
  const { id, shape, image, price } = diamond;
  const {addToCart, cartItems} = useContext(ShopContext)


  function getPriceInDecimal(price) {
    return (price / 100).toFixed(2)
  }

  const cartItemCount = cartItems[id]

  return (
    <div className="diamonds">
      <Link to={`/diamonds/${diamond.id}`}>
        <div className="shape">
          <h1>{shape}</h1>
          <img className="diamondimg" src={image} alt="diamonds" />
          <h4>Price: ${getPriceInDecimal(price)}</h4>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add to Cart {cartItemCount > 0 && <>({cartItemCount})</>}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Diamond;
