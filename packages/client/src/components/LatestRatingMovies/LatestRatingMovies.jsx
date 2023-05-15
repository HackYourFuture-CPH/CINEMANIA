import Masonry from '@mui/lab/Masonry';
import { Box, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import MovieCard from '../MovieCard/MovieCard';

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
        setMovies(data);
      } catch (error) {
        return error;
      }
    }
    fetchMovies();
  }, []);
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          height: '2.76rem',
          fontSize: '2.25rem',
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '3rem',
          marginTop: '3rem',
          fontFamily: 'Inter',
        }}
      >
        LATEST RATINGS
      </Typography>
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
    </Box>
  );
};
