// OurPromise.js

import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import './OurPromise.css';

const OurPromise = () => {
  return (
    <div className='ourPromiseContainer'>
      <h2 className='promiseTitle'>Our Promise</h2>
      
      <div className='iconWithText'>
        <ShoppingBagOutlinedIcon  sx={{ fontSize: 100 }} className='icon' />
        <p className='text'>Free worldwide shipping & returns</p>
      </div>

      <div className='iconWithText'>
        <VerifiedOutlinedIcon sx={{ fontSize: 100 }}  className='icon' />
        <p className='text'>Ethically sourced and crafted</p>
      </div>

      <div className='iconWithText'>
        <RecyclingOutlinedIcon sx={{ fontSize: 100 }}  className='icon' />
        <p className='text'>Recycled post-consumer gold</p>
      </div>

      <div className='iconWithText'>
        <DiamondOutlinedIcon  sx={{ fontSize: 100 }} className='icon' />
        <p className='text'>Sustainable lab-grown diamonds</p>
      </div>
    </div>
  );
};

export default OurPromise;
