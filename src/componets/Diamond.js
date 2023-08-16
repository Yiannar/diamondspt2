import react from "react";
import { Link } from "react-router-dom";
// import './Diamond.css'



const Diamond =({diamond})=>{




    return(
        <div className="diamonds">
             
             <Link to={`/diamonds/${diamond.id}`}>
           
            <h1 className="shape">{diamond.shape}</h1>
            </Link>

            <img src={diamond.image} alt='diamonds'></img>
           
        
        </div>
    )
};

export default Diamond;