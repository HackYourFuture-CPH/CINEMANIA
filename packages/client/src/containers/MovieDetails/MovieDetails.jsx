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
        try {
          const response = await fetch(`${apiURL()}/movies/${movieID}/details`);
          const movie = await response.json();
          if (movie) {
            setCurrentMovie(movie);
          }
        } catch (error) {
          setCurrentMovie({
            ...fallBackMovies[0],
            description: fallBackMovies[0].description.concat(
              ` Here what happened: ${error.message}`,
            ),
          });
        }
      })();
    }
  }, [movieID]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!currentMovie) return;
  return (
    <Container maxWidth="xl" sx={{ gap: '3rem' }}>
      <BigMovieCard currentMovie={currentMovie} />
      <TopCastDisplay movieID={currentMovie?.id} />

      <SimilarMovies categoryID={currentMovie?.category_id} />
      <ReviewsDisplay movieID={currentMovie?.id} />
    </Container>
  );
};
