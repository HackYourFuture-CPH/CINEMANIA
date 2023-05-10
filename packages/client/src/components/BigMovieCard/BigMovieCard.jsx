import React from 'react';
import { Container } from '@mui/material';
import RatingStars from '../RatingStars/RatingStars';

const BigMovieCard = () => {
  return (
    <Container sx={{ border: 1, width: 1518, height: 962 }}>
      BigMovieCard
      <RatingStars />
    </Container>
  );
};

export default BigMovieCard;
