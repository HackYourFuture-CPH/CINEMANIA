import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';
import './Carousel.css';

export const SimilarMoviesCarousel = ({ categoryID }) => {
  const [similarMovies, setSimilarMovies] = useState(fallBackMovies);
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
    </Container>
  );
};
