import { Grid } from '@mui/material';
import React, { useEffect, useCallback, useRef } from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';

export const MovieList = () => {
  const listRef = useRef();
  const { movies, pageNumber, setPageNumber } = useMovieList();
  const handleScroll = useCallback(() => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setPageNumber(pageNumber + 1);
      }
    }
  }, [pageNumber, setPageNumber]);
  useEffect(() => {
    if (pageNumber < 4) window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, pageNumber]);

  return (
    <div ref={listRef}>
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
    </div>
  );
};
