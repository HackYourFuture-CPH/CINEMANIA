import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import { BigMovieCard } from '../../components/BigMovieCard/BigMovieCard';
import { SimilarMoviesCarousel } from '../../components/SimilarMoviesCarousel/SimilarMoviesCarousel';
import { TopCastDisplay } from '../../components/TopCastDisplay/TopCastDisplay';
import { MovieReviews } from '../../components/MovieReviews/MovieReviews';

export const MovieDetails = () => {
  const movieID = useParams().id;
  const [currentMovie, setCurrentMovie] = useState(undefined);
  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiURL()}/movies/${movieID}/details`);
      const movie = await response.json();
      if (movie) {
        setCurrentMovie(movie);
      }
    })();
  }, [movieID]);
  return (
    <Container
      sx={{
        mt: '3rem',
        mb: '3rem',
        display: 'flex',
        flexDirection: 'column',
      }}
      maxWidth="xl"
    >
      <BigMovieCard currentMovie={currentMovie} />
      <TopCastDisplay movieID={movieID} />
      <SimilarMoviesCarousel categoryID={currentMovie?.categoryID ?? 0} />
      <MovieReviews />
    </Container>
  );
};
