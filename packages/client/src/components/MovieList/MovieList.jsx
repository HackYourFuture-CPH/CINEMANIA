import { Grid } from '@mui/material';
import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';
// import InfiniteScroll from 'react-infinite-scroll-component';

export const MovieList = () => {
  const { log } = console;
  const listRef = useRef();
  const { movies, pageNumber, setPageNumber, wasLastList, prevPage } =
    useMovieList();
  log(movies);
  log(pageNumber);
  const handleScroll = useCallback(() => {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setPageNumber(pageNumber + 1);
      }
    }
  }, [pageNumber, setPageNumber]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
