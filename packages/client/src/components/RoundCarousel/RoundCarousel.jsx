import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';

import styled from '@emotion/styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
};

const RoundCarousel = ({ carouselData }) => {
  const slider = React.useRef(null);
  return (
    <>
      <Title>SIMILAR MOVIES</Title>

      <CarouselWrapper>
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <LeftArrow />
        </IconButton>
        <SliderWrapper>
          <Slider {...settings} ref={slider}>
            {carouselData?.map((item) => (
              <Box key={item.id}>
                <Link to={`/movies/${item.id}`} underline="none">
                  <CarouselImg
                    component="img"
                    src={item.backdrop_URL}
                    alt={item.title}
                  />
                </Link>
              </Box>
            ))}
          </Slider>
        </SliderWrapper>
        <IconButton onClick={() => slider?.current?.slickNext()}>
          <RightArrow />
        </IconButton>
      </CarouselWrapper>
    </>
  );
};

export { RoundCarousel };
const Title = styled(Typography)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.9rem;
  margin: 0 0 1.5rem 0;

  align-self: flex-start;
`;

const CarouselWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const SliderWrapper = styled(Box)`
  width: 81rem;
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
  width: 25rem;
  height: 12.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  object-fit: cover;
  object-position: 20% 0;
  border-radius: 8rem;
  margin: auto auto;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
