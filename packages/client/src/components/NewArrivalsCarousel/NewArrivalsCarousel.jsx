import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Box, Button, IconButton, Typography, Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import { useNewArrivals } from './useNewArrivals';
import './styles.css';

const settings = {
  className: 'center-slide',
  centerMode: true,
  infinite: true,
  centerPadding: '370px',
  slidesToShow: 1,
  swipeToSlide: true,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 3000,
  cssEase: 'linear',
};

export const NewArrivalsCarousel = () => {
  const [newArrivals, error] = useNewArrivals();
  const sliderRef = useRef();

  const handleSliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleSliderNext = () => {
    sliderRef.current?.slickNext();
  };

  if (error && (error.code === 408 || error.code === 401)) {
    // Error with user action
    return (
      <ErrorMessage>
        {error.message}
        <RefreshButton onClick={() => window.location.reload()}>
          Refresh
        </RefreshButton>
      </ErrorMessage>
    );
    // eslint-disable-next-line no-else-return
  } else if (error) {
    // Error without user action
    return null;
  }

  return (
    <MainContainer maxWidth="false">
      <Box display="flex" justifyContent="flex-start">
        <MostPopularText>NEW ARRIVALS</MostPopularText>
      </Box>
      <CarouselWrapper>
        <IconButton onClick={handleSliderPrev}>
          <LeftArrow />
        </IconButton>
        <SliderWrapper>
          <SliderMain {...settings} ref={sliderRef}>
            {newArrivals.map((movie) => (
              <StyledLink key={`slide-${movie.id}`} to={`/movies/${movie.id}`}>
                <SlideBox>
                  <CarouselImg
                    component="img"
                    src={movie.image_location}
                    alt={movie.title}
                  />
                  <TextBox>
                    <TitleTypography variant="h4" component="div">
                      {movie.title}
                    </TitleTypography>
                    <DescriptionTypography variant="h5">
                      {movie.description}
                    </DescriptionTypography>
                    <DescriptionTypography>Read more...</DescriptionTypography>
                    <MyButton key={`button-${movie.id}`} variant="outlined">
                      {movie.category_name}
                    </MyButton>
                  </TextBox>
                </SlideBox>
              </StyledLink>
            ))}
          </SliderMain>
        </SliderWrapper>
        <IconButton onClick={handleSliderNext}>
          <RightArrow />
        </IconButton>
      </CarouselWrapper>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  margin: 0 0 12.5rem 0;
  padding: 0;
`;

const MostPopularText = styled(Typography)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.8rem;
  margin: 0 0 1.5rem 10rem;
  @media (max-width: 1440px) {
    font-size: 1.5rem;
    line-height: 1.5rem;

`;

const CarouselWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightArrow = styled(ArrowForwardIosIcon)`
  color: #00ffc2;
  font-size: 2.5rem;
  font-weight: bolder;
  position: absolute;
  right: 0;
`;

const LeftArrow = styled(ArrowBackIosIcon)`
  color: #00ffc2;
  font-size: 2.5rem;
  font-weight: bolder;
  position: absolute;
  left: 0;
`;

const CarouselImg = styled(Box)`
  width: 20rem;
  height: 29rem;
  margin: 0 0 0 4.75rem;
  @media (max-width: 1440px) {
    width: 14rem;
    height: 21.75rem;
    margin: 0 0 0 2.75rem;
  }
`;

const SliderWrapper = styled(Box)`
  height: 37.75rem;
  width: 100%;
  @media (max-width: 1440px) {
    height: 28.75rem;
  }
`;

const SlideBox = styled(Box)`
  height: 33.125rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 1rem;
  background: linear-gradient(
      110.45deg,
      rgba(0, 60, 45, 0.5) 0%,
      rgba(0, 0, 0, 0) 84.43%
    ),
    #00ffc2;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  border-radius: 3px;
  box-shadow: inset 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media (max-width: 1440px) {
    height: 24.5rem;
  }
`;

const TextBox = styled(Box)`
  color: black;
  width: 100%;
  height: 26.25rem;
  margin: 0 3.5rem 0 3.75rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    height: 21.75rem;
    margin: 0 2.5rem 0 2.75rem;
  }
`;

const TitleTypography = styled(Typography)`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  @media (max-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

const DescriptionTypography = styled(Typography)`
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 20px;
  @media (max-width: 1440px) {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SliderMain = styled(Slider)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MyButton = styled(Button)`
  width: max-content;
  height: max-content;
  border: 1px solid #003e2f;
  border-radius: 25rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #003e2f;
  padding: 1rem 1.5rem;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 21px;
    padding: 0.5rem 1rem;
  }
`;

const ErrorMessage = styled(Typography)`
  color: red;
  margin: 2rem;
`;

const RefreshButton = styled(Button)`
  margin-left: 1rem;
`;
