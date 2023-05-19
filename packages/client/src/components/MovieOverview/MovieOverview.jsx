import { MovieListProvider } from '../../context/movieListContext';
import { Box, Container } from '@mui/material';
import { Categories } from '../Categories/Categories';
import { SearchBar } from '../SearchBar/SearchBar';
import { CustomSelect } from '../Select/CustomSelect';
import { MovieList } from './MovieList';
import React from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  ${({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '6rem',
      paddingRight: '7rem',
    },
    backgroundImage:
      'linear-gradient(to right, #000000 0%, #003c2d 50%), linear-gradient(to bottom right, #003c2d 50%, #00ffc2 100%)',
    backgroundSize: 'cover',
  })}
`;

const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4rem;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  })}
`;

const StyledSearchBox = styled(Box)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  ${({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      alignItems: 'flex-start',
      marginBottom: '3rem',
    },
  })}
`;

const MovieOverview = ({ isFavoritePage }) => {
  return (
    <MovieListProvider isFavoritePage={isFavoritePage}>
      <StyledContainer maxWidth="xl">
        <StyledBox>
          <Categories />
          <StyledSearchBox>
            <SearchBar />
            <CustomSelect />
          </StyledSearchBox>
        </StyledBox>
        <MovieList />
      </StyledContainer>
    </MovieListProvider>
  );
};

export { MovieOverview };
