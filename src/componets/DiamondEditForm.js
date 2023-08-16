import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import'./DiamondForm.css'
const API = process.env.REACT_APP_API_URL;

function DiamondEditForm (){
    let { id } = useParams()
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

const updateDiamond =(updatedDiamond)=>{
    console.log('ID', id)
    axios
    .put(`${API}/diamonds/${id}`, updatedDiamond)
    .then(
        ()=>{
            console.log(updatedDiamond)
            navigate(`/diamonds/${id}`)
        })
        .catch((c)=> console.warn('catch',c))
}

const handleTextChange = (e)=>{
    setDiamond({...diamond, [e.target.id]: e.target.value})
}

useEffect(()=>{
    axios
    .get(`${API}/diamonds/${id}`)
    .then(
        (res)=> {
            console.log(res.data)
            setDiamond(res.data[0])
        },
       
        (error) => navigate(`/not-found`)
    )
}, [id, navigate])

const handleSubmit = (e)=>{
    e.preventDefault()
    updateDiamond(diamond, id)
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
        <Link to={`/diamonds/${id}`}>
            <button className='back-button'>Back</button>
        </Link>
    </div>
)
}

export default DiamondEditForm;
