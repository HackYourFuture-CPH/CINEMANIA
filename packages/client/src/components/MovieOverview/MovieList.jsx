import { Grid } from '@mui/material';
import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { Loader } from '../Loader/Loader';

export const MovieList = () => {
  const {
    movies = [],
    isLoading,
    hasNextPage,
    onLoadMore,
    error,
  } = useMovieList();

  const [sentryRef] = useInfiniteScroll({
    loading: isLoading, // Indicates whether more data is currently being loaded
    hasNextPage, // Indicates if there are more pages to load
    onLoadMore, // Function to fetch more data
    delayInMs: 1000, // How long to wait before fetching more data
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
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
      <div ref={sentryRef}>
        <Loader />
      </div>
    </>
  );
};
