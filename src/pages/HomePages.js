import React, { useEffect, useState } from 'react';
import axios from "axios"
//import { useParams, useState, useEffect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Diamond from '../componets/Diamond';
import './HomePage.css'
import DiamondsImage2 from '../../src/assets/DiamondsImage2.png';
// import DiamondsImage4 from '../../src/assets/DiamondsImage4.png';
import Home4 from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/Home4.png'
import Home5transparent from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/Home5transparent.png'
import Home2fixed from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/Home2Fixed.png'
import HomePageModal from '../componets/HomePageModal';
import Video from '../componets/Video';
import OurPromise from './OurPromise';
import Home2transparent from '../assets/Home2transparent.png'
import MissionStatement from './MissionStatement';




const API = process.env.REACT_APP_API_URL

const HomePage = ({cart, setCart}) => {

    const [diamonds, setDiamonds] = useState([])

    // const images = [{
    //     DiamondsImage2 : 'images/DiamondsImage2.png'
    // }]
       const images =[
       // DiamondsImage1,
        DiamondsImage2,
        // DiamondsImage4,
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

            {/* <div>
                <p>Image goes here link to new product</p>
            </div> */}
            <div>

               <Video className='video'/>
            <HomePageModal/>

            <MissionStatement/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 className='category'>Shop Now</h2>
            <br/>
            <br/>
            <ul>
                {diamonds.map((diamond)=>(
                    <Diamond key={diamond.id} diamond={diamond} cart={cart} setCart={setCart} />
                    ))}
            </ul>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='homeimg-container'>
            {/* <img src={Home3} className='home-page-img'/> */}
            {/* <img src={Home2fixed} className='home-page-img'/> */}
            {/* <img src={Home2transparent} className='homePageMission'/> */}
            {/* <img src={Home4} className='home-page-img'/> */}
           <OurPromise></OurPromise>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        </div>
    );
};

export default HomePage;