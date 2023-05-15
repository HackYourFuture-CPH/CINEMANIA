import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import React from 'react';

export const SearchBar = ({ onChanged }) => {
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
      onChange={onChanged}
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
