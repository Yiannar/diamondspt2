import React, { useState, useEffect } from 'react';
import './ImageSlideshow.css'

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds 

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <img key={index} src={image}  alt={`Slide ${index}`} className={index === currentIndex ? 'slide active' : 'slide'}/>
      ))}
    </div>
  );
};

export default ImageSlideshow;
