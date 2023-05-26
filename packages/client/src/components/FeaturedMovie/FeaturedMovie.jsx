import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import styled from '@emotion/styled';

export const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`${apiURL()}/movies/featured`);
        if (!response.ok) {
          throw new Error('Failed to fetch featured movie');
        }
        const data = await response.json();

        const randomFeaturedMovie =
          data[Math.floor(Math.random() * data.length)];
        setFeaturedMovie(randomFeaturedMovie);
      } catch (error) {
        return null;
      }
    }

    fetchMovies();
    const interval = setInterval(fetchMovies, 30000);
    return () => clearInterval(interval);
  }, []);

  if (featuredMovie.length === 0) {
    return <h4>..Loading</h4>;
  }

  return (
    <CenteredBox>
      <ImageShadow>
        <Image
          component="img"
          alt={featuredMovie.title}
          src={featuredMovie.backdrop_URL}
        />
      </ImageShadow>
      <TitleWrapper>
        <StyledTypography component="div">
          Ready for {featuredMovie.title}?
        </StyledTypography>
        <TrailerWrapper>
          <IconButton
            sx={{ backgroundColor: '#00FFC2' }}
            aria-label="play/pause"
          >
            <PlayArrowIcon sx={{ width: '2rem', height: '2rem' }} />
          </IconButton>
          <StyledTypographyLink component="div">
            Watch the trailer
          </StyledTypographyLink>
        </TrailerWrapper>
      </TitleWrapper>
    </CenteredBox>
  );
};

const Image = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: 25rem;
  z-index: -100;
  position: relative;
`;

const ImageShadow = styled(Box)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 51.56%
  );
  border-radius: 25rem;
`;

const TitleWrapper = styled(Box)`
  width: 100%;
  position: absolute;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter';
  color: #ffffff;
  top: 2.8rem;
`;

const StyledTypography = styled(Typography)`
  font-size: 200%;
  font-weight: 300;
  line-height: 4.08rem;
  max-width: 61rem;
  @media (max-width: 640px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`;

const StyledTypographyLink = styled(Typography)`
  width: 8.94rem;
  height: 1.375rem;
  margin-left: 1rem;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-decoration-line: underline;
`;

const TrailerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const CenteredBox = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 4.25rem;
  margin-bottom: 4.25rem;
`;
