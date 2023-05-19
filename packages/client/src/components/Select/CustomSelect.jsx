import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useMovieList } from '../../context/movieListContext';

const CustomSelect = () => {
  const { sortBy, onSortMovies, onChangeDirection } = useMovieList();

  const handleChangeDirection = (event) => {
    onChangeDirection(event.target.value);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 85 }}>
        <InputLabel
          id="sort-by-label"
          style={{ color: '#00FFC2', borderBottom: '1px solid #00FFC2' }}
        >
          Sort by
        </InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by-select"
          value={sortBy}
          onChange={(e) => {
            onSortMovies(e.target.value);
          }}
          label="Sort by"
          sx={{
            color: '#00FFC2',
            '& .MuiSelect-icon': {
              color: '#00FFC2',
              fontSize: '2.25rem',
            },
            '&:before, &:after': {
              border: 'none !important',
            },
          }}
        >
          <MenuItem id="rating" value="rating" onClick={handleChangeDirection}>
            Rating
          </MenuItem>
          <MenuItem
            id="recently_added"
            value="recently_added"
            onClick={handleChangeDirection}
          >
            Recently added
          </MenuItem>
          <MenuItem id="price" value="price" onClick={handleChangeDirection}>
            Price
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export { CustomSelect };
