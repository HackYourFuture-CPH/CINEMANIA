import React from 'react';
import { Box, IconButton, Typography, Container } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';

export const EllipseCarousel = ({ popularMovies }) => {
  const slider = React.useRef(null);
  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <Container maxWidth="false">
      <Box display="flex" justifyContent="flex-start">
        <MostPopularText>MOST POPULAR</MostPopularText>
      </Box>
      <CarouselWrapper>
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <LeftArrow />
        </IconButton>
        <SliderWrapper>
          <Slider {...settings} ref={slider}>
            {popularMovies?.map((movie) => (
              <Box key={movie.id}>
                <CarouselImg src={movie.backdrop_URL} alt={movie.title} />
              </Box>
            ))}
          </Slider>
        </SliderWrapper>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <RightArrow />
        </IconButton>
      </CarouselWrapper>
    </Container>
  );
};

const MostPopularText = styled(Typography)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.8rem;
  margin: 0 0 1.5rem 10rem;
`;

const CarouselWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

const RightArrow = styled(ArrowForwardIosIcon)`
  color: #00ffc2;
  font-size: 2.5rem;
  font-weight: bolder;
`;

const LeftArrow = styled(ArrowBackIosIcon)`
  color: #00ffc2;
  font-size: 2.5rem;
  font-weight: bolder;
`;

const CarouselImg = styled.img`
  width: 95%;
  height: 17.5rem;
  border-radius: 8rem;
  margin: auto auto;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const SliderWrapper = styled.div`
  height: 18.75rem;
  width: 106rem;
`;
