import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';
import { BigMovieCard } from '../../components/BigMovieCard/BigMovieCard';

import { TopCastDisplay } from '../../components/TopCastDisplay/TopCastDisplay';

import { SimilarMovies } from '../CarouselWrapper/SimilarMovies';
import { ReviewsDisplay } from '../../components/ReviewsDisplay/ReviewsDisplay';

export const MovieDetails = () => {
  const movieID = useParams().id;
  const [currentMovie, setCurrentMovie] = useState(fallBackMovies[0]);
  useEffect(() => {
    if (movieID) {
      (async () => {
        const response = await fetch(`${apiURL()}/movies/${movieID}/details`);
        const movie = await response.json();
        if (movie) {
          setCurrentMovie(movie);
        }
      })();
    }
  }, [movieID]);
  if (!currentMovie) return;
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
      <TopCastDisplay movieID={currentMovie?.id} />
      <ReviewsDisplay />
      <SimilarMovies categoryID={currentMovie?.category_id} />
    </Container>
  );
};
