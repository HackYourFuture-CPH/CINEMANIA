import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { apiURL } from '../apiURL';

export default function FeaturedMovie() {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`${apiURL()}/movies/featured`);
      const data = await response.json();
      setFeaturedMovie(data);
    }

    fetchMovies();
  }, []);

  if (!featuredMovie) {
    return <h4>..Loading</h4>;
  }
  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <Box
        component="img"
        sx={{
          width: '104.5rem',
          height: '49.375rem',
          borderRadius: '24.688rem',
          objectFit: 'scale-down',
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
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography component="div" variant="h3">
          Ready for {featuredMovie.title}?
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, pb: 10 }}>
          <IconButton
            sx={{ backgroundColor: '#00FFC2' }}
            aria-label="play/pause"
          >
            <PlayArrowIcon sx={{ height: 16, width: 16 }} />
          </IconButton>
          <Typography component="div" variant="h5" sx={{ ml: 1 }}>
            Watch the trailer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
