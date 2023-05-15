import { Grid } from '@mui/material';
import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';

export const MovieList = () => {
  const { movies = [] } = useMovieList();
  return (
    <Grid
      container
      spacing={6}
      sx={{
        marginBottom: '3rem',
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};
