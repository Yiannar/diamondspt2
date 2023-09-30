
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


const HomePageSlider = () => {
   
    return (
        <div>
          <Carousel>
      <div>
        <img src="https://placehold.co/100x100" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://placehold.co/200x200" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://placehold.co/300x300" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
        </div>
    );
};

export default HomePageSlider;