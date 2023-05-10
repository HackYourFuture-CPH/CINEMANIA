import React from 'react';
import './MovieDetails.Style.css';
import { Container } from '@mui/material';
import BigMovieCard from '../../components/BigMovieCard/BigMovieCard';
import TopCastDisplay from '../../components/TopCastDisplay/TopCastDisplay';
import SimilarMoviesCarousel from '../../components/SimilarMoviesCarousel/SimilarMoviesCarousel';

export const MovieDetails = () => {
  return (
    <Container>
      <BigMovieCard />
      <TopCastDisplay />
      <SimilarMoviesCarousel />
    </Container>
  );
};
