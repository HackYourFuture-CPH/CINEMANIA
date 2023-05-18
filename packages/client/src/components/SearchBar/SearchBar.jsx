import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { useMovieList } from '../../context/movieListContext';

export const SearchBar = () => {
  const { searchText, setSearchText } = useMovieList();

  return (
    <TextField
      sx={{
        background: '#DBDBDB',
        color: '#DBDBDB',
        width: '258px',
        height: '51.75px',
        borderRadius: '37.5px',
        '& fieldset': { border: 'none' },
      }}
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
