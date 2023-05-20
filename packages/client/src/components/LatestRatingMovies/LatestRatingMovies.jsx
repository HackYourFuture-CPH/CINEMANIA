import Masonry from '@mui/lab/Masonry';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { MovieCard } from '../MovieCard/MovieCard';
import styled from '@emotion/styled';

export const LatestRatingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(`${apiURL()}/movies`);
        if (!response.ok) {
          throw new Error('Failed to fetch movies with the latest rating');
        }
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        return error;
      }
    }
    fetchMovies();
  }, []);

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
        {movies
          .map((movie) => <MovieCard key={movie.id} movie={movie} />)
          .splice(2, 8)}
      </Masonry>
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
  margin-top: 3rem;
  font-family: Inter;
`;
