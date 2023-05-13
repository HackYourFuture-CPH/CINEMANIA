import React from 'react';
import { Container } from '@mui/material';

const SimilarMoviesCarousel = ({ movieID }) => {
  return (
    <Container
      sx={{
        border: 1,
        width: 1518,
        height: 300,
        disableGutters: true,
        position: 'absolute',
        top: 2000,
      }}
    >
      SimilarMoviesCarousel
    </Container>
  );
};

export default SimilarMoviesCarousel;
