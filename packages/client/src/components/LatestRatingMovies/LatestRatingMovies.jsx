import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Masonry from '@mui/lab/Masonry';
import { Box, Typography } from '@mui/material';
import { apiURL } from '../../apiURL';
import { MovieCard } from '../MovieCard/MovieCard';
import { useFavorites } from '../MovieCard/useFavorites';

export const LatestRatingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, toggleFavorite] = useFavorites([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`${apiURL()}/reviews/rating/latest`);
        if (!response.ok) {
          throw new Error('Failed to fetch movies with the latest rating');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchMovies();
  }, [favorites]);

  return (
    <StyledMovieGrid>
      <LatestRating>LATEST RATINGS</LatestRating>
      <Masonry
        columns={4}
        spacing={5}
        sx={{
          width: '78rem',
        }}
      >
        {movies.map((movie, index) => (
          /* eslint-disable react/no-array-index-key */
          <MovieCard
            key={`${movie.id}-${index}`}
            movie={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </Masonry>
    </StyledMovieGrid>
  );
};

const StyledMovieGrid = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LatestRating = styled(Typography)`
  height: 2.76rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
  font-family: Inter;
`;
