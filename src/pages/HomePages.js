import React, { useEffect, useState } from 'react';
import axios from "axios"
//import { useParams, useState, useEffect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Diamond from '../componets/Diamond';
import styles from './cards.module.css'
import ImageSlideshow from '../componets/ImageSlideShow';
// import styles from './homePage.module.css'

const API = process.env.REACT_APP_API_URL

const HomePage = ({cart, setCart}) => {

    const [diamonds, setDiamonds] = useState([])

    const images =[
        'https://cdn.pixabay.com/photo/2016/02/14/09/45/diamond-1199183_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/08/07/42/diamond-1186139_640.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdGF44eRiP5uXakAKCbY3h0VQPCbwrDLq-A&usqp=CAU'
    ]
      
    
    useEffect(() =>{
        axios
        .get(`${API}/diamonds`)
        .then((res)=>{
            const shuffledData = shuffleArray(res.data)
            const firstThreeItems = shuffledData.slice(0,3)
            setDiamonds(firstThreeItems)
        })
        .catch((error)=>{
            console.error('Error could not load first three items', error)
        })
    }, [])

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };

    return (
        <div>
            <Link to='/diamonds'>
                <h1>Welcome to the Diamonds App</h1>
            </Link> 

            <ImageSlideshow images={images}/>

            <ul>
                {diamonds.map((diamond)=>(
                   <Diamond key={diamond.id} diamond={diamond} cart={cart} setCart={setCart} />
                ))}
            </ul>
            
        
        </div>
    );
};

export default HomePage;