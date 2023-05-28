import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  IconButton,
  Typography,
  Container,
  CircularProgress,
} from '@mui/material';
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  if (popularMovies.length === 0) {
    return <CircularProgress sx={{ color: 'mainGreen' }} />;
  }

  return (
    <MainContainer maxWidth="xl">
      <TitleBox>
        <Title>MOST POPULAR</Title>
      </TitleBox>
      <CarouselWrapper>
        <IconBtn onClick={() => slider?.current?.slickPrev()}>
          <LeftArrow />
        </IconBtn>
        <SliderWrapper>
          <Slider {...settings} ref={slider}>
            {popularMovies?.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <CarouselImg
                  component="img"
                  src={movie.backdrop_URL}
                  alt={movie.title}
                />
              </Link>
            ))}
          </Slider>
        </SliderWrapper>
        <IconBtn onClick={() => slider?.current?.slickNext()}>
          <RightArrow />
        </IconBtn>
      </CarouselWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  margin: 0;
  padding: 0;
`;

const TitleBox = styled(Box)`
  margin: 0 0 2.75rem 3rem;
`;

const Title = styled(Typography)`
  color: white;
  font-size: 2rem;
  font-weight: 800;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.8rem;
  @media (max-width: 1440px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
`;

const CarouselWrapper = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const CarouselImg = styled(Box)`
  width: 25.75rem;
  height: 14rem;
  object-fit: cover;
  object-position: center;
  border-radius: 7rem;
  margin: auto auto;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  @media (max-width: 1440px) {
    margin: 0 0 0 2.75rem;
  }
  @media (max-width: 1280px) {
    width: 18rem;
    height: 11rem;
  }
`;

const SliderWrapper = styled(Box)`
  height: 15rem;
  width: 100%;
`;
