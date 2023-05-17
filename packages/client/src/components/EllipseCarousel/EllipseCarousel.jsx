import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { apiURL } from '../../apiURL';
import styled from '@emotion/styled';

export const EllipseCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(`${apiURL()}/movies`);
        const data = await response.json();
        setPopularMovies(data.slice(1, 12));
      } catch (error) {
        return error;
      }
    };
    getPopularMovies();
  }, []);

  return (
    <Section>
      <Container>
        <MostPopularText>MOST POPPULAR</MostPopularText>
        <CarouselWrapper>
          <IconButton onClick={() => slider?.current?.slickPrev()}>
            <LeftArrow />
          </IconButton>
          <SliderWrapper>
            <Slider {...settings} ref={slider}>
              {popularMovies?.map((movie) => (
                <Box key={movie.id}>
                  <CarouselImg src={movie.image_location} alt={movie.title} />
                </Box>
              ))}
            </Slider>
          </SliderWrapper>
          <IconButton onClick={() => slider?.current?.slickNext()}>
            <RightArrow />
          </IconButton>
        </CarouselWrapper>
      </Container>
    </Section>
  );
};

const settings = {
  className: 'center',
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
};

const Section = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MostPopularText = styled(Typography)`
  color: white;
  font-size: 2rem;
  font-weight: 700;
  font-family: Inter, sans-serif;
  border-left: 0.3rem solid #ffffff;
  padding-left: 0.8rem;
  margin-left: 5rem;
  margin-bottom: 1.5rem;
`;

const CarouselWrapper = styled(Box)`
  display: flex;
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
  height: 280px;
  border-radius: 130px;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;  
};
  }
`;

const SliderWrapper = styled.div`
  height: 300px;
  width: 1700px;
`;
