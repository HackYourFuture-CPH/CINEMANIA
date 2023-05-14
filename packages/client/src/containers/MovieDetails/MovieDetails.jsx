import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import BigMovieCard from '../../components/BigMovieCard/BigMovieCard';
import SimilarMoviesCarousel from '../../components/SimilarMoviesCarousel/SimilarMoviesCarousel';
import TopCastDisplay from '../../components/TopCastDisplay/TopCastDisplay';

export const MovieDetails = () => {
  const movieID = useParams().id;

  return (
    <Container>
      <BigMovieCard movieID={movieID} />
      <TopCastDisplay movieID={movieID} />
      <SimilarMoviesCarousel movieID={movieID} />
    </Container>
  );
};
