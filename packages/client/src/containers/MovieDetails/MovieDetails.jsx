import React from 'react';
// import './MovieDetails.Style.css';
import { Box } from '@mui/material';
import BigMovieCard from '../../components/BigMovieCard/BigMovieCard';
import TopCastDisplay from '../../components/TopCastDisplay/TopCastDisplay';
import SimilarMoviesCarousel from '../../components/SimilarMoviesCarousel/SimilarMoviesCarousel';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const movieID = useParams().id;

  return (
    <Box
      sx={{
        pt: '3rem',
        pb: '3rem',
        display: 'flex',
        flexDirection: 'column',
      }}
      maxWidth="xl"
    >
      <BigMovieCard movieID={movieID} />
      <TopCastDisplay movieID={movieID} />
      <SimilarMoviesCarousel movieID={movieID} />
    </Box>
  );
};
