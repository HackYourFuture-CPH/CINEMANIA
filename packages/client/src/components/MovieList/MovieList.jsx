import React from 'react';
import { Grid } from '@mui/material';
import { MovieCard } from './MovieCard';
import { useMoviesAndCategoriesContext } from '../../context/FetchCategoriesAndMovies';

export const MovieList = () => {
  const { state } = useMoviesAndCategoriesContext();
  if (state.movieLoading) {
    return <div>Loading...</div>;
  }

  if (state.movieFetchError) {
    return <div>Error: {state.movieFetchError.message}</div>;
  }
  return (
    <Grid
      container
      spacing={6}
      sx={{
        marginBottom: '3rem',
      }}
    >
      {state.moviesData.movies && state.moviesData.movies.length > 0 ? (
        state.moviesData.movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      ) : (
        <h1> Sorry! No movies found</h1>
      )}
    </Grid>
  );
};
