import React from "react";
import { useState } from "react";
import diamonds from './Diamonds'


function Cart({cart}) {

let total = cart.reduce((acc, currentValue)=> acc + currentValue.amount, 0)

    return (
        <div>
            <h1 className="Cart">Cart</h1>
            <h4>Total:${cart.length >3 ? (0.90 * total): total}</h4>
            <h6>Discount:{cart.length < 3 ? (0): (10)}%</h6>
            {
                cart.map((diamonds)=>{
                    return (
                        <ul>
                            <li>{diamonds.shape}:{diamonds.price}</li>
                        </ul>
                    )
                })
            }
            <h6>Your purchase has qualified you for the following items:</h6>
        </div>
    );
}

export default Cart;