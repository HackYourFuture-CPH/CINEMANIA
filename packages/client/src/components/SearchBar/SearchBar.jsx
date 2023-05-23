import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import styled from '@emotion/styled';

export const SearchBar = () => {
  const { searchText, setSearchText } = useMovieList();

  return (
    <StyledTextField
      placeholder="Search..."
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

const StyledTextField = styled(TextField)`
  background: #dbdbdb;
  color: #dbdbdb;
  width: 258px;
  height: 51.75px;
  border-radius: 37.5px;
  & fieldset {
    border: none;
  }
`;
