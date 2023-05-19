import { useTheme } from '@mui/material/styles';
import { MovieListProvider } from '../../context/movieListContext';
import { Box, Container } from '@mui/material';
import { Categories } from '../Categories/Categories';
import { SearchBar } from '../SearchBar/SearchBar';
import { CustomSelect } from '../Select/CustomSelect';
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column',
              [theme.breakpoints.down('sm')]: {
                width: '100%',
                alignItems: 'flex-start',
                marginBottom: '3rem',
              },
            }}
          >
            <SearchBar />
            <CustomSelect />
          </Box>
        </Box>
        <MovieList />
      </Container>
    </MovieListProvider>
  );
};
