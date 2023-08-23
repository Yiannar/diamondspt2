import React from 'react';
import Cart from './Cart';

const DiamondCard = ({diamond, setCart, cart}) => {
    const [diamond, setDiamond] = useState([])
   
    function updatedCart(diamond){
        
        if(cart.includes(diamond)){
            return alert('You have already added this diamond to the cart')
        }
        setCart([...cart, diamond])
    }
   
   
    return (
        <div>
            {
                diamond.map((diamond)=>{
                    return(
                        <div>
                            <h2>{diamond.shape}</h2>
                            <img>{diamond.image}</img>
                            <h4>Price{diamond.price}</h4>
                            <button onClick={()=> updatedCart(diamond)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default DiamondCard;