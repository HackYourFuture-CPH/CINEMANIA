import React from 'react';
import { Box, IconButton, Typography, Link, Container } from '@mui/material';
import './Carousel.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RoundCarousel = ({ carouselData }) => {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = React.useRef(null);
  return (
    <Container>
      <Typography
        variant="overline"
        sx={{
          height: 30,
          fontSize: 32,
          fontWeight: 800,
          color: '#FFFFFF',
          borderLeft: 4,
          p: 1,
        }}
      >
        SIMILAR MOVIES
      </Typography>

      <Box
        sx={{
          display: 'flex',
          p: 2,
        }}
      >
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <ArrowBackIosIcon sx={{ fill: '#00FFC2', fontSize: '90%' }} />
        </IconButton>
        <Box sx={{ height: '90%', width: '90%' }}>
          <Slider {...settings} ref={slider}>
            {carouselData?.map((item) => (
              <Box
                key={item.description}
                sx={{
                  height: 200,
                  borderRadius: '120px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Link href={`/movies/${item.id}`} underline="none">
                  <Box
                    component="img"
                    sx={{
                      width: 450,
                      boxShadow: 5,
                      position: 'absolute',
                      top: -170,
                      left: -10,
                    }}
                    src={item.image_location}
                    alt={item.title}
                  />
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <ArrowForwardIosIcon style={{ fill: '#00FFC2', fontSize: '90%' }} />
        </IconButton>
      </Box>
    </Container>
  );
};

export { RoundCarousel };
