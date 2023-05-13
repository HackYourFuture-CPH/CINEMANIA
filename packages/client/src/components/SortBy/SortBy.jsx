import React, { useState } from 'react';
import { makeStyles } from '@mui/material/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    position: 'absolute',
    right: 0,
  },
  label: {
    color: '#00FFC2',
    textDecoration: 'underline',
  },
  select: {
    color: '#00FFC2',
    '&:before': {
      borderColor: 'transparent',
    },
    '&:after': {
      borderColor: 'transparent',
    },
    '&:hover:not(.Mui-disabled):before': {
      borderColor: 'transparent',
    },
  },
  icon: {
    fill: '#00FFC2',
    border: 'none',
    marginRight: theme.spacing(5),
  },
}));

const SortBy = ({ onChange }) => {
  // @ts-ignore
  const classes = useStyles();
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSortBy(value);
    onChange(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel className={classes.label} id="sort-by-label">
        Sort By
      </InputLabel>
      <Select
        labelId="sort-by-label"
        id="sort-by-select"
        value={sortBy}
        onChange={handleChange}
        className={classes.select}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
      >
        <MenuItem value="rating">Rating</MenuItem>
        <MenuItem value="recent">Recently Added</MenuItem>
        <MenuItem value="price">Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBy;
