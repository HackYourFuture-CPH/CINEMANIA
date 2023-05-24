import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';
import { BigMovieCard } from '../../components/BigMovieCard/BigMovieCard';
import { TopCastDisplay } from '../../components/TopCastDisplay/TopCastDisplay';
import { SimilarMovies } from '../CarouselWrapper/SimilarMovies';
import { ReviewsDisplay } from '../../components/ReviewsDisplay/ReviewsDisplay';
import { useUserContext } from '../../context/UserContext';

export const MovieDetails = () => {
  const movieID = useParams().id;
  const [currentMovie, setCurrentMovie] = useState(fallBackMovies[0]);
  const [currentUsersReview, setCurrentUsersReview] = useState(undefined);
  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      if (movieID && user.uid) {
        try {
          const response = await fetch(`${apiURL()}/reviews/${movieID}/uid/12`);
          if (response.ok) {
            const data = await response.json();

            if (data) {
              setCurrentUsersReview(data[0]);
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })();
  }, [movieID, user]);

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
    <Container maxWidth="xl" sx={{ gap: '3rem' }}>
      <BigMovieCard
        currentMovie={currentMovie}
        currentReview={currentUsersReview}
        user={user}
      />
      <TopCastDisplay movieID={currentMovie?.id} />

      <SimilarMovies categoryID={currentMovie?.category_id} />
      <ReviewsDisplay movieID={currentMovie?.id} />
    </Container>
  );
};
