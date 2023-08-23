import axios from "axios"
import { useState, useEffect } from "react"
import {Link, useParams, useNavigate} from 'react-router-dom'
import Reviews from ".//Reviews"
// import ReviewForm from './ReviewForm'

const API = process.env.REACT_APP_API_URL

function DiamondDetails(){
 
const [diamond, setDiamond] = useState({})
const { id } = useParams()
let navigate = useNavigate()

const deleteDiamond= ()=>{
    axios
    .delete(`${API}/diamonds/${id}`)
    .then(
        ()=>{
            navigate(`/diamonds`)
        }
    )
    .catch((c)=> console.warn('catch', c))
}

useEffect(()=>{
    axios
    .get(`${API}/diamonds/${id}`)
    .then((response)=>{
      
        setDiamond(response.data)
    })
    .catch((c)=>{
        console.warn('catch', c)
    })
}, [id])
// console.log(diamond)

// if (!diamond[0].carat){
//     return<h1>Loading</h1>
// }

// handleSubmit for reviews pass as a prop to reviewform component 
// const handleSubmit= ()=>{
//     axios 
//     .post(`${API}/reviews`, )
//     .then()
// }


function getPriceInDecimal(diamond) {
    return (diamond[0].price / 100).toFixed(2);
  }
  


return(
    <>
    <article>
     {diamond[0]&&    
     <div>
            <h1 className="diamondShape">{diamond[0].shape}</h1>
            <img className="diamond-pic" src={diamond[0].image} alt='diamondpic'/>
            <table>
               <tbody>
                <tr>
                    <td><h4>Carat:</h4></td>
                    <td><h4>{diamond[0].carat}</h4></td>
                </tr>
                <tr>
                <td><h4>Color:</h4></td>
                    <td><h4>{diamond[0].color}</h4></td>
                </tr>
                <tr>
                <td><h4>Clarity:</h4></td>
                    <td><h4>{diamond[0].clarity}</h4></td>
                </tr>
                <tr>
                <td><h4>Cut:</h4></td>
                    <td><h4>{diamond[0].cut}</h4></td>
                </tr>
                <tr>
                <td><h4>Price:</h4></td>
                    <td><h4>${getPriceInDecimal(diamond)}</h4></td>
                </tr>
                <tr>
                <td><h4>Reported:</h4></td>
                    <td><h4>{(diamond[0].is_reported).toString()}</h4></td>
                </tr>
               
                </tbody>
            </table>
            <div className="nav">
                <div className="back">
                <Link to={`/diamonds`}>
                    <button>Back</button>
                </Link>
                </div>
            </div>
            <div className="edit">
                <Link to={`/diamonds/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button className="delete" onClick={deleteDiamond}>Delete</button>
                {/* <ReviewForm /> */}
                
            </div>
        </div>}
    </article>
    <Reviews/>
    </>
)

}

export default DiamondDetails