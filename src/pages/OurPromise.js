import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

const OurPromise = () => {
    return (
        <div>
            <h2>Our Promise</h2>
            <ShoppingBagOutlinedIcon/><p >Free worldwide shipping & returns</p> 
            <VerifiedOutlinedIcon/><p>Ethically sourced and crafted</p> 
            <RecyclingOutlinedIcon/><p>Recycled post-consumer gold</p> 
           <DiamondOutlinedIcon/> <p>Sustainable lab-grown diamonds</p> 
        </div>
    );
};

export default OurPromise;