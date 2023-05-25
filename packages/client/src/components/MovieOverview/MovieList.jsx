import { Grid, Typography, Box } from '@mui/material';
import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import { MovieCard } from './MovieCard';
import Alert from '@mui/material/Alert';
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
  const alertStyle = {
    backgroundColor: '#003E2F',
  };
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
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10rem',
              marginLeft: '2.5rem',
            }}
          >
            <Alert variant="filled" style={alertStyle}>
              <Typography variant="h2" align="center" color="#00FFC2">
                No Movie Found with This Match!{' '}
              </Typography>
            </Alert>
          </Box>
        )}
      </Grid>
      {(isLoading || hasNextPage) && (
        <div ref={sentryRef}>
          <Loader />
        </div>
      )}
    </>
  );
};
