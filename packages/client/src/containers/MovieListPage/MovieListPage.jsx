import React from 'react';
import { Container } from '@mui/material';
import { MovieListProvider } from '../../context/movieListContext';
import MovieList from '../../components/MovieList/MovieList';

export const MovieListPage = () => {
  return (
    <Container>
      <MovieListProvider>
        <MovieList />
      </MovieListProvider>
    </Container>
  );
};
