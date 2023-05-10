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

/*
<div className="big-card-container">
Width: 1518px / 8 = 
Height: 962px / 8 
lg: 1200px
*/
