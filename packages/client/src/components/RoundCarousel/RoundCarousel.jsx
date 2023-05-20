import React from 'react';
import { Box, IconButton, Typography, Link } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';

const RoundCarousel = ({ carouselData }) => {
  const slider = React.useRef(null);
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

  return (
    <>
      <Title>SIMILAR MOVIES</Title>

      <CarouselWrapper maxWidth="xl">
        <IconButton onClick={() => slider?.current?.slickPrev()}>
          <LeftArrow />
        </IconButton>
        <SliderWrapper>
          <Slider {...settings} ref={slider}>
            {carouselData?.map((item) => (
              <Box key={item.id}>
                <Link href={`/movies/${item.id}`} underline="none">
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
  justify-content: center;
`;

const SliderWrapper = styled(Box)`
  height: 90%;
  width: 95%;
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
  width: 98%;
  height: 17.5rem;
  object-fit: cover;
  object-position: 20% 0;
  border-radius: 8rem;
  margin: auto auto;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;
