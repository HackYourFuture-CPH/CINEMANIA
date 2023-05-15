import React, { useState, useEffect } from 'react';
import { Container, IconButton } from '@mui/material';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fallBackMovie from './mock.json';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { apiURL } from '../../apiURL';

const SimilarMoviesCarousel = ({ categoryID }) => {
  const [similarMovies, setSimilarMovies] = useState(fallBackMovie);
  useEffect(() => {
    (async () => {
      if (categoryID) {
        try {
          const response = await fetch(
            `${apiURL()}/movies/category/${categoryID}`,
          );
          if (response.ok) {
            const data = await response.json();
            if (data) {
              setSimilarMovies(data);
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })();
  }, [categoryID]);

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
    <Container
      sx={{
        border: 1,
        width: 1518,
        height: 300,
        disableGutters: true,
        position: 'absolute',
        top: 2000,
      }}
    >
      <h3 className="carousel-title">| SIMILAR MOVIES</h3>
      <div style={{ display: 'flex' }}>
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <ArrowBackIosIcon style={{ fill: '#00FFC2' }} fontSize="large" />
        </IconButton>
        <div className="view-carousel">
          <Slider {...settings} ref={slider}>
            {similarMovies?.map((item) => (
              <div key={item.description} className="box">
                <a href={`/movies/${item.id}`}>
                  <img src={item.image_location} alt={item.title} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <ArrowForwardIosIcon style={{ fill: '#00FFC2' }} fontSize="large" />
        </IconButton>
      </div>
    </Container>
  );
};

export default SimilarMoviesCarousel;
