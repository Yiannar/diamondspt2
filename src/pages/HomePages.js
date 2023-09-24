import React, { useEffect, useState } from 'react';
import axios from "axios"
//import { useParams, useState, useEffect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Diamond from '../componets/Diamond';
import ImageSlideshow from '../componets/ImageSlideShow';
import './HomePage.css'
import DiamondsImage2 from '../../src/assets/DiamondsImage2.png';
import DiamondsImage4 from '../../src/assets/DiamondsImage4.png';


const API = process.env.REACT_APP_API_URL

const HomePage = ({cart, setCart}) => {

    const [diamonds, setDiamonds] = useState([])

    // const images = [{
    //     DiamondsImage2 : 'images/DiamondsImage2.png'
    // }]
       const images =[
       // DiamondsImage1,
        DiamondsImage2,
        DiamondsImage4,
       ]
       
        // // 'https://cdn.pixabay.com/photo/2016/02/08/07/42/diamond-1186139_640.jpg',
       
    
      
    
    useEffect(() =>{
        axios
        .get(`${API}/diamonds`)
        .then((res)=>{
             const shuffledData = shuffleArray(res.data)
            const firstThreeItems = shuffledData.slice(0,3)
            //const firstThreeItems = res.data.slice(0, 3);
            setDiamonds(firstThreeItems);
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
        <div className='homepage-container' style={{ height: 'auto' }}>
            <Link to='/diamonds'>
                <h1 className='title'>Welcome to the Diamonds App</h1>
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