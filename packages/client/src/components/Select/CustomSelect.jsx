import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useMovieList } from '../../context/movieListContext';
import styled from '@emotion/styled';

const CustomSelect = () => {
  const { sortBy, setSortBy, setIsClickedSame } = useMovieList();
  const handleMenuItemClick = (e) => {
    e.target.id === sortBy
      ? setIsClickedSame((prevState) => !prevState)
      : setIsClickedSame(false);
  };
  return (
    <StyledFormControl variant="standard">
      <StyledInputLabel id="sort-by-label">Sort by</StyledInputLabel>
      <StyledSelect
        labelId="sort-by-label"
        id="sort-by-select"
        value={sortBy}
        onChange={(e) => {
          setSortBy(e.target.value);
        }}
        label="Sort by"
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
      </StyledSelect>
    </StyledFormControl>
  );
};
export { CustomSelect };

const StyledFormControl = styled(FormControl)`
  display: flex;
  justify-content: flex-end;
  margin: 1rem;
  min-width: 85px;
`;
const StyledInputLabel = styled(InputLabel)`
  color: #00ffc2;
  border-bottom: 1px solid #00ffc2;
`;
const StyledSelect = styled(Select)`
  color: #00ffc2;
  & .MuiSelect-icon {
    color: #00ffc2;
    font-size: 2.25rem;
  }
  &:before,
  &:after {
    border: none !important;
  }
`;
