import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import'./DiamondForm.css'
const API = process.env.REACT_APP_API_URL;

function DiamondNewForm (){
    let navigate = useNavigate()
    
    const [diamond, setDiamond]= useState({
        shape: '',
        image: '', 
        carat: 0,
        color: '',
        clarity:'' ,
        cut: '',
        price: 0, 
        is_reported: false
    })

const addDiamond =(newDiamond)=>{
    axios
    .post(`${API}/diamonds`, newDiamond)
    .then(
        ()=>
            navigate(`/diamonds`)
        )
        .catch((c)=> console.warn('catch',c))
}

const handleTextChange = (e)=>{
    setDiamond({...diamond, [e.target.id]: e.target.value})
}


const handleSubmit = (e)=>{
    e.preventDefault()
    addDiamond(diamond)
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='shape'>Shape:</label>
            <input
            id='shape'
            value={diamond.shape}
            type='text'
            onChange={handleTextChange}
            placeholder="Princess"
            required/>
            <label htmlFor='url'>URL:</label>
            <input
            id='image'
            value={diamond.image}
            type='text'
            pattern='http[s]*://.+'
            required
            onChange={handleTextChange}
            placeholder="https://"
            />
            <label htmlFor='carat'>Carat:</label>
            <input
            id='carat'
            type= 'number'
            min='0'
            value={diamond.carat}
            onChange={handleTextChange}
            placeholder="1.04"
            required/>
            <label htmlFor='color'>Color:</label>
            <input
            id='color'
            type= 'text'
            value={diamond.color}
            onChange={handleTextChange}
            placeholder="D"
            required/>
            <label htmlFor='cut'>Cut:</label>
            <input
            id='cut'
            type= 'text'
            value={diamond.cut}
            onChange={handleTextChange}
            placeholder="Excellent"
            required/>
            <label htmlFor='price'>Price:</label>
            <input
            id='price'
            type= 'number'
            min='0'
            value={diamond.price}
            onChange={handleTextChange}
            placeholder="32,000"
            required/>
             <label htmlFor="is_reported">Reported:</label>
            <input
            id="is_reported"
            type="boolean"
            value={diamond.is_reported}
            onChange={handleTextChange}
        
            />
            <br/>
            <button className='submit' type='submit'>Submit</button>
        </form>
        <Link to={`/diamonds`}>
            <button className='back-button'>Back</button>
        </Link>
    </div>
)
}

export default DiamondNewForm;