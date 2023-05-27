import React from 'react';
import { Link } from 'react-router-dom';
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
        <IconBtn onClick={() => slider?.current?.slickPrev()}>
          <LeftArrow />
        </IconBtn>
        <SliderWrapper>
          <Slider {...settings} ref={slider}>
            {popularMovies?.map((movie) => (
              <Box key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <CarouselImg src={movie.backdrop_URL} alt={movie.title} />
                </Link>
              </Box>
            ))}
          </Slider>
        </SliderWrapper>
        <IconBtn onClick={() => slider?.current?.slickNext()}>
          <RightArrow />
        </IconBtn>
      </CarouselWrapper>
    </Container>
  );
};

const MostPopularText = styled(Typography)`
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.8rem;
  margin: 0 0 1.5rem 6rem;
  line-height: 1.8rem;
`;

const CarouselWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;

const IconBtn = styled(IconButton)`
  box-shadow: none;
  &:hover {
    background-color: transparent;
  }
`;
const RightArrow = styled(ArrowForwardIosIcon)`
  color: #00ffc2;
  font-size: 2rem;
  font-weight: bolder;
`;

const LeftArrow = styled(ArrowBackIosIcon)`
  color: #00ffc2;
  font-size: 2rem;
  font-weight: bolder;
`;

const CarouselImg = styled.img`
  width: 25.75rem;
  height: 14rem;
  border-radius: 7rem;
  margin: auto auto;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const SliderWrapper = styled.div`
  height: 15rem;
  width: 80rem;
`;
