import React, { useState, useEffect } from 'react';
import './ImageSlideShow.css'

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="slideshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default ImageSlideshow;
