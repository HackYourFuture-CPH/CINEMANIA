import React from 'react';
import { MoviesAndCategoriesContextProvider } from '../../context/FetchCategoriesAndMovies';
import { CategoriesAndSearchBarAndSortBy } from '../../components/Categories/CategoriesAndSearchBarAndSortBy';
import { Container } from '@mui/material';
import { MovieList } from '../../components/MovieList/MovieList';

export const MovieListPage = () => {
  return (
    <MoviesAndCategoriesContextProvider>
      <Container
        sx={{
          pt: '3rem',
          pb: '3rem',
        }}
        maxWidth="xl"
      >
        <CategoriesAndSearchBarAndSortBy />
        <MovieList />
      </Container>
    </MoviesAndCategoriesContextProvider>
  );
};
