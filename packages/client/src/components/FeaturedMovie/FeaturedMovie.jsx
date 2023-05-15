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
    <Box
      sx={{
        background:
          'linear-gradient(to right bottom, #000000, #003c2d, #00ffc2)',
        zIndex: '-100',
        position: 'relative',
      }}
    >
      <Section>
        <Box sx={centerElement}>
          <Box
            sx={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 51.56%)',
              borderRadius: '24.688rem',
            }}
          >
            <Box
              component="img"
              sx={{
                width: '104.5rem',
                height: '49.375rem',
                borderRadius: '24.688rem',
                zIndex: '-100',
                position: 'relative',
              }}
              alt={featuredMovie.title}
              src={featuredMovie.image_location}
            />
          </Box>
          <Box
            sx={{
              ...centerElement,
              fontFamily: 'Inter',
              color: '#fff',
              top: '3.75rem',
              zIndex: '3000',
            }}
          >
            <Typography
              component="div"
              sx={{
                fontSize: '4.5rem',
                fontWeight: 300,
                lineHeight: '5.446rem',
              }}
            >
              Ready for {featuredMovie.title}?
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
              <IconButton
                sx={{ backgroundColor: '#00FFC2' }}
                aria-label="play/pause"
              >
                <PlayArrowIcon sx={{ width: '2rem', height: '2rem' }} />
              </IconButton>
              <Typography
                component="div"
                sx={{
                  width: '11.938rem',
                  height: 'fit-content',
                  ml: 1,
                  fontWeight: 500,
                  fontSize: '1.5rem',
                  lineHeight: '1.816rem',
                  textDecorationLine: 'underline',
                }}
              >
                Watch the trailer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Section>
      <Section>
        <h1 style={{ fontSize: '3rem' }}>
          Placeholder for carousel new arrival and most popular
        </h1>
      </Section>
    </Box>
  );
};

const Section = styled.section`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const centerElement = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
