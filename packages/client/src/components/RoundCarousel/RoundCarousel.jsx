import React from 'react';
import { IconButton } from '@mui/material';
import './Carousel.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';

const RoundCarousel = ({ carouselData }) => {
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
    <MovieDetailsLayout>
      <h3 className="carousel-title">| SIMILAR MOVIES</h3>
      <div style={{ display: 'flex' }}>
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <ArrowBackIosIcon style={{ fill: '#00FFC2' }} fontSize="large" />
        </IconButton>
        <div className="view-carousel">
          <Slider {...settings} ref={slider}>
            {carouselData?.map((item) => (
              <div key={item.description} className="box">
                <a href={`/movies/${item.id}`}>
                  <img
                    className="carousel-img"
                    src={item.image_location}
                    alt={item.title}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <ArrowForwardIosIcon style={{ fill: '#00FFC2' }} fontSize="large" />
        </IconButton>
      </div>
    </MovieDetailsLayout>
  );
};

export { RoundCarousel };
