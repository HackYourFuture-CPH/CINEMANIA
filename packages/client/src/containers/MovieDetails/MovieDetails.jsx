import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import BigMovieCard from '../../components/BigMovieCard/BigMovieCard';
import SimilarMoviesCarousel from '../../components/SimilarMoviesCarousel/SimilarMoviesCarousel';
import TopCastDisplay from '../../components/TopCastDisplay/TopCastDisplay';

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
  if (!currentMovie) return;
  return (
    <Container>
      <BigMovieCard currentMovie={currentMovie} />
      <TopCastDisplay movieID={currentMovie?.id} />
      <SimilarMoviesCarousel categoryID={currentMovie?.category_id} />
    </Container>
  );
};
