import * as React from 'react';
import {
  Box,
  CardMedia,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function FeaturedMovie() {
  return (
    <Card>
      <Box sx={{ position: 'relative', display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{
            width: 1672,
            height: 790,
            borderRadius: 395,
            zIndex: 1,
            top: 238,
            left: 148,
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
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <Typography component="div" sx={{ fontSize: 'h1.fontSize' }}>
            Ready for Dune?
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 0, pb: 12 }}>
            <IconButton
              sx={{ backgroundColor: '#00FFC2' }}
              aria-label="play/pause"
            >
              <PlayArrowIcon sx={{ height: 24.17, width: 24.17 }} />
            </IconButton>
            <Typography component="div" variant="h4" sx={{ ml: 2 }}>
              Watch the trailer
            </Typography>
          </Box>
        </Box>
      </Box>
      <CardContent sx={{ flex: '1 0 auto', zIndex: 2 }} />
    </Card>
  );
}
