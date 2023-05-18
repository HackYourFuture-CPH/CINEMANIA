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
    <>
      <Section>
        <CenteredBox>
          <Image
            component="img"
            alt={featuredMovie.title}
            src={featuredMovie.backdrop_URL}
          />

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
      </Section>
      <Section>
        <h1 style={{ fontSize: '3rem' }}>
          Placeholder for carousel new arrival and most popular
        </h1>
      </Section>
    </>
  );
};

const Section = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Box)`
  width: 70%;
  height: 70%;
  padding-bottom: 4rem;
  border-radius: 25rem;
  z-index: -100;
  position: relative;
`;

const TitleWrapper = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter';
  color: #fff;
  top: 3.75rem;
`;

const StyledTypography = styled(Typography)`
  font-size: 2rem;
  width: 100%;
  text-align: center;
  font-weight: 300;
  line-height: 5.446rem;
`;

const StyledTypographyLink = styled(Typography)`
  width: 11.938rem;
  height: fit-content;
  margin-left: 1rem;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.816rem;
  text-decoration-line: underline;
`;

const TrailerWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const CenteredBox = styled(Box)`
  position: absolute;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
