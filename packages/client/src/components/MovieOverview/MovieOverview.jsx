import { MovieListProvider } from '../../context/movieListContext';
import { Box, Container, Typography } from '@mui/material';
import { Categories } from '../Categories/Categories';
import { SearchBar } from '../SearchBar/SearchBar';
import { CustomSelect } from '../Select/CustomSelect';
import { MovieList } from './MovieList';
import React from 'react';
import styled from '@emotion/styled';

export const MovieOverview = ({ isFavouritePage }) => {
  return (
    <MovieListProvider isFavoritePage={isFavouritePage}>
      <MovieOverviewContainer maxWidth="lg">
        {isFavouritePage && <StyledTitle>FAVORITES </StyledTitle>}
        <FlexContainer>
          <Categories />
          <SearchSelectContainer>
            <SearchBar />
            <CustomSelect />
          </SearchSelectContainer>
        </FlexContainer>
        <MovieList />
      </MovieOverviewContainer>
    </MovieListProvider>
  );
};

const MovieOverviewContainer = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const FlexContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 4rem;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const SearchSelectContainer = styled(Box)`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    align-items: flex-start;
    margin-bottom: 3rem;
  }
`;

const StyledTitle = styled(Typography)`
  height: 2.76rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  text-align: start;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;
