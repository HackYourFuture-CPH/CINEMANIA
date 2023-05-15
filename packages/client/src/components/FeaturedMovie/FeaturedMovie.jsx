import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';

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
        position: 'absolute',
        display: 'flex',
        top: '14.875rem',
        left: '9.25rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        sx={{
          width: '104.5rem',
          height: '49.375rem',
          borderRadius: '24.688rem',
          // objectFit: 'scale-down', can be used to scale down the horizontal images to fit the container but it doesn't work as
          // expected since around image is empty space
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 51.56%)})',
        }}
        alt={featuredMovie.title}
        src={featuredMovie.image_location}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          textAlign: 'center',
          color: '#fff',
          top: '3.75rem',
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
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <IconButton
            sx={{ backgroundColor: '#00FFC2' }}
            aria-label="play/pause"
          >
            <PlayArrowIcon sx={{ width: '2.761rem', height: '2.761rem' }} />
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
  );
};
