import React from 'react';
import axios from "axios"
//import { useParams, useState, useEffect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import styles from './cards.module.css'
// import styles from './homePage.module.css'

const API = process.env.REACT_APP_API_URL

const HomePage = () => {
// const [diamond, setDiamond] = useState([])
// const {id} = useParams()

// useEffect(()=>{
//     axios
//     .get(`${API}/diamonds/${id}`)
//     .then((response)=>{
      
//         setDiamond(response.data)
//     })
//     .catch((c)=>{
//         console.warn('catch', c)
//     })
// }, [id])

// convert to array then map
// map do an li 
    return (
        <div>
            <Link to='/diamonds'>
                <h1>Welcome to the Diamonds App</h1>
            </Link> 
        </div>
    );
};

export default HomePage;