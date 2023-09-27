import react from "react";
import { Link } from "react-router-dom";
import './Diamond.css'



const Diamond =({diamond, setCart, cart})=>{
    
    function updatedCart(diamond){
        
        if(cart.includes(diamond)){
            return alert('You have already added this diamond to the cart')
        }
        setCart(prevCart => [...prevCart, diamond])
    }
   

    function getPriceInDecimal(diamond) {
        return (diamond.price / 100).toFixed(2);
      }
      

    return(
        <div className="diamonds">
                            <Link to={`/diamonds/${diamond.id}`}>
  <div className="shape">
    <h1>{diamond.shape}</h1>
    <img className="diamondimg" src={diamond.image} alt="diamonds"></img>
    <h4>Price: ${getPriceInDecimal(diamond)}</h4>
    <button className="addToCartBttn" onClick={() => updatedCart(diamond)}>
      Add to Cart
    </button>
  </div>
</Link>
        </div>
    )
};

export default Diamond;