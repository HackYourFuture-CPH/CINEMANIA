import React from 'react';
import { MovieListProvider } from '../../context/movieListContext';
import Categories from '../../components/Categories/Categories';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MovieList from '../../components/MovieList/MovieList';

export const MovieListPage = () => {
  const theme = useTheme();

  return (
    <MovieListProvider>
      <Container
        sx={{
          pt: '3rem',
          pb: '3rem',
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '4rem',
            [theme.breakpoints.down('sm')]: {
              flexDirection: 'column',
              alignItems: 'flex-end',
            },
          }}
        >
          <Categories />
          <SearchBar />
        </Box>
        <MovieList />
      </Container>
    </MovieListProvider>
  );
};
