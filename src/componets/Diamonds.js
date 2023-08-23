import React from 'react';
import { useState, useEffect } from "react";
import Diamond from './Diamond';
import axios from "axios";
// import DiamondDetails from './DiamondDetails';

const API = process.env.REACT_APP_API_URL;

const Diamonds = ({cart, setCart}) => {
    const [diamonds, setDiamonds] = useState([]);


    useEffect(() => {
        axios
        .get(`${API}/diamonds`)
        .then((res)=>{
            // console.log(res.data)
            setDiamonds(res.data);
        })
        .catch((c) => console.warn("catch", c))
    }, [])

    console.log("Type of diamonds:", typeof diamonds)

    return (
        <div className='diamonds'>
            <br/>
            <br/>
            <br/>
            <h1>Select a diamond</h1>
            <br/>
            <br/>
            <br/>

            {diamonds.map((diamond) => {
                return ( <Diamond key={diamond.id} diamond={diamond} cart={cart} setCart={setCart} />)
               
            })}
        </div>
    );
};

export default Diamonds;