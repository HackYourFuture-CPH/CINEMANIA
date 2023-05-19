import { Grid } from '@mui/material';
import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';
import useInfiniteScroll from 'react-infinite-scroll-hook';

export const MovieList = () => {
  const { movies = [], isLoading, hasNextPage, onLoadMore } = useMovieList();

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading, // Indicates whether more data is currently being loaded
    hasNextPage, // Indicates if there are more pages to load
    onLoadMore, // Function to fetch more data
    scrollContainer: 'window', // Scroll container selector
  });
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
      <div ref={sentryRef} style={{ height: '10px' }}>
        <p>Loading more...</p>
      </div>
    </Grid>
  );
};
