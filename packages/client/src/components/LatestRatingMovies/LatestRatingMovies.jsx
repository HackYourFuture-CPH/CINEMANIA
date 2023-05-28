import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Masonry from '@mui/lab/Masonry';
import { Box, Typography, CircularProgress } from '@mui/material';
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

  if (movies.length === 0) {
    return <CircularProgress sx={{ color: 'mainGreen' }} />;
  }

  return (
    <StyledMovieGrid>
      <LatestRating>LATEST RATINGS</LatestRating>
      <StyledMasonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={5}>
        {movies.map(
          (movie, index /* eslint-disable react/no-array-index-key */) => (
            <MovieCard
              key={`${movie.id}-${index}`}
              movie={movie}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ),
        )}
      </StyledMasonry>
    </StyledMovieGrid>
  );
};

const StyledMovieGrid = styled(Box)`
  height: 100%;
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
  margin-top: 6rem;
  font-family: Inter;

  @media (max-width: 1280px) {
    font-size: 1.8rem;
    margin-top: 4rem;
  }
`;

const StyledMasonry = styled(Masonry)`
  width: 78rem;

  @media (max-width: 1280px) {
    width: 60rem;
  }

  @media (max-width: 768px) {
    width: 40rem;
  }
`;
