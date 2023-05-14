import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { useMovieList } from '../../context/movieListContext';

const MovieList = () => {
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

export default MovieList;
