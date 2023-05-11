import React from 'react';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import movies from './mock.json';
import { IconButton } from '@mui/material';

export default function Carousel() {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };
  const slider = React.useRef(null);
  return (
    <div className="view-carousel">
      <IconButton onClick={() => slider?.current?.slickPrev()}>prev</IconButton>
      <Slider {...settings} ref={slider}>
        {movies.map((item) => (
          <div key={item.description} className="box">
            <img src={item.image_location} alt={item.title} />
          </div>
        ))}
      </Slider>
      <IconButton onClick={() => slider?.current?.slickNext()}>Next</IconButton>
    </div>
  );
}
