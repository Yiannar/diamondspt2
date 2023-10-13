import React from 'react';
import HomeLanding2 from '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/assets/HomeLanding2.mp4'
import '/Users/yianna/Documents/9.1-2/diamondsProjectPart2/diamondspt2/src/componets/Video.css'

const Video = () => {
    return (
        <div className='video-container'>
             <video src={HomeLanding2} autoPlay loop muted  />
        </div>
    );
};

export default Video;