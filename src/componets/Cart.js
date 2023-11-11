import React, { useContext } from 'react';
import { ShopContext } from '../context/diamond-context';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

function Cart({ diamonds }) {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="Cart">
      <h1>Shopping Cart</h1>

      <div className="cartItems">
        {diamonds.map((diamond) => {
          if (cartItems[diamond.id]?.quantity > 0) {
            return <CartItem key={diamond.id} diamond={diamond} />;
          }
          return null; // Return null for diamonds not in the cart
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate('/checkout');
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
