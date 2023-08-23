import react from "react";
import { Link } from "react-router-dom";
// import './Diamond.css'



const Diamond =({diamond, setCart, cart})=>{
    
    function updatedCart(diamond){
        
        if(cart.includes(diamond)){
            return alert('You have already added this diamond to the cart')
        }
        setCart(prevCart => [...prevCart, diamond])
    }
   



    return(
        <div className="diamonds">
                            <Link to={`/diamonds/${diamond.id}`}>
           
                             <h1 className="shape">{diamond.shape}</h1>
                                </Link>

                             <img src={diamond.image} alt='diamonds'></img>

                            <h4>Price:{diamond.price}</h4>

                            <button onClick={()=> updatedCart(diamond)}>Add to Cart</button>
            
    
           
        
        </div>
    )
};

export default Diamond;