import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import styled from '@emotion/styled';

export const FeaturedMovie = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`${apiURL()}/movies/featured`);
        if (!response.ok) {
          throw new Error('Failed to fetch featured movie');
        }
        const data = await response.json();
        setFeaturedMovie(data);
      } catch (error) {
        return null;
      }
    }

    fetchMovies();
  }, []);

  if (!featuredMovie) {
    return <h4>..Loading</h4>;
  }

  return (
    <>
      <Section>
        <CenteredBox>
          <ImageShawdow>
            <Image
              component="img"
              alt={featuredMovie.title}
              src={featuredMovie.image_location}
            />
          </ImageShawdow>
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
  width: 104.5rem;
  height: 49.375rem;
  border-radius: 24.688rem;
  z-index: -100;
  position: relative;
`;

const ImageShawdow = styled(Box)`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 51.56%
  );
  border-radius: 24.688rem;
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
  font-size: 4.5rem;
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
  flex-direction: column;
  align-items: center;
`;
