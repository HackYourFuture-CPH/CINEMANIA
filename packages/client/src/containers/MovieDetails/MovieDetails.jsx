import React, { useEffect, useState } from 'react';
import './MovieDetails.Style.css';
import { Container } from '@mui/material';
import BigMovieCard from '../../components/BigMovieCard/BigMovieCard';
import TopCastDisplay from '../../components/TopCastDisplay/TopCastDisplay';
import SimilarMoviesCarousel from '../../components/SimilarMoviesCarousel/SimilarMoviesCarousel';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';

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
    <Container>
      <BigMovieCard currentMovie={currentMovie} />
      <TopCastDisplay movieID={movieID} />
      <SimilarMoviesCarousel categoryID={currentMovie?.categoryID ?? 0} />
    </Container>
  );
};
