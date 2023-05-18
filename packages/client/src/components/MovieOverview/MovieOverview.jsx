import { useTheme } from '@mui/material/styles';
import { MovieListProvider } from '../../context/movieListContext';
import { Box, Container } from '@mui/material';
import { Categories } from '../Categories/Categories';
import { SearchBar } from '../SearchBar/SearchBar';
import { MovieList } from './MovieList';
import React from 'react';

export const MovieOverview = ({ isFavouritePage }) => {
  const theme = useTheme();

  return (
    <MovieListProvider isFavoritePage={isFavouritePage}>
      <Container
        sx={{
          pt: '3rem',
          pb: '3rem',
          [theme.breakpoints.up('sm')]: {
            paddingLeft: '6rem',
            paddingRight: '7rem',
          },
          backgroundImage:
            'linear-gradient(to right, #000000 0%, #003c2d 50%), linear-gradient(to bottom right, #003c2d 50%, #00ffc2 100%)',
          backgroundSize: 'cover',
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
