import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function FeaturedMovie() {
  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <Box
        component="img"
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: 100,
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 51.56%)',
        }}
        alt="dune movie banner"
        src="https://dunenewsnet.com/wp-content/uploads/2021/08/Dune-Movie-Official-Poster-banner-feature.jpg"
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
          Ready for Dune?
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
