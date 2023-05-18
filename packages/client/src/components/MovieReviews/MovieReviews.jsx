import { Container } from '@mui/material';
import React from 'react';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';

export const MovieReviews = ({ movieID }) => {
  return (
    <MovieDetailsLayout>
      <Container
        sx={{
          border: 1,
          width: '100%',
          height: 300,
          disableGutters: true,
        }}
      >
        Movie Reviews
      </Container>
    </MovieDetailsLayout>
  );
};
