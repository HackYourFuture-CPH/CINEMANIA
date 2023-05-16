import { Grid } from '@mui/material';
import { React, useCallback, useEffect, useState } from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';

export const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayMovies, setDisplayMovies] = useState(3);
  const { movies = [] } = useMovieList();
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
      document.documentElement.offsetHeight
    ) {
      setIsLoading(true);
      setDisplayMovies(displayMovies + 3);
    } else {
      setIsLoading(false);
    }
  }, [displayMovies]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  return (
    <Grid
      container
      spacing={6}
      sx={{
        marginBottom: '3rem',
      }}
    >
      {movies.slice(0, displayMovies).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {isLoading && <h1>...Loading</h1>}
    </Grid>
  );
};
