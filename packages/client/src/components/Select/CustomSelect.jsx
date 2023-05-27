import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useMovieList } from '../../context/movieListContext';
import FilterListIcon from '@mui/icons-material/FilterList';

const CustomSelect = () => {
  const { sortBy, onSortMovies, onChangeDirection, isClickedSame } =
    useMovieList();
  const [showComponent, setShowComponent] = React.useState(false);
  const handleChangeDirection = (event) => {
    onChangeDirection(event.target.value);
  };
  const handleChange = (event) => {
    onSortMovies(event.target.value);
    setShowComponent(true);
  };
  const iconStyle = {
    fontSize: '15px',
    color: '#00FFC2',
    marginRight: '.3rem',
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
          onChange={handleChange}
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
            <FilterListIcon
              style={
                sortBy === 'rating' && isClickedSame
                  ? { ...iconStyle }
                  : { ...iconStyle, transform: 'rotate(180deg)' }
              }
            />
            Rating{' '}
          </MenuItem>
          <MenuItem
            id="recently_added"
            value="recently_added"
            onClick={handleChangeDirection}
          >
            {showComponent && (
              <FilterListIcon
                style={
                  sortBy === 'recently_added' && isClickedSame
                    ? { ...iconStyle, transform: 'rotate(180deg)' }
                    : { ...iconStyle }
                }
              />
            )}
            Recently added
          </MenuItem>
          <MenuItem id="price" value="price" onClick={handleChangeDirection}>
            {showComponent && (
              <FilterListIcon
                style={
                  sortBy === 'price' && isClickedSame
                    ? { ...iconStyle }
                    : { ...iconStyle, transform: 'rotate(180deg)' }
                }
              />
            )}
            Price{' '}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export { CustomSelect };
