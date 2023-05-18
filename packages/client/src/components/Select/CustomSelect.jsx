import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useMovieList } from '../../context/movieListContext';

const CustomSelect = () => {
  const { sortBy, setSortBy, isClickedSame, setIsClickedSame } = useMovieList();
  const handleMenuItemClick = (e) => {
    e.target.id === sortBy
      ? setIsClickedSame(!isClickedSame)
      : setIsClickedSame(false);
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
            setSortBy(e.target.value);
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
          <MenuItem id="rating" value="rating" onClick={handleMenuItemClick}>
            Rating
          </MenuItem>
          <MenuItem
            id="recently_added"
            value="recently_added"
            onClick={handleMenuItemClick}
          >
            Recently added
          </MenuItem>
          <MenuItem id="price" value="price" onClick={handleMenuItemClick}>
            Price
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export { CustomSelect };
