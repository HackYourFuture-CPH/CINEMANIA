import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { useMovieList } from '../../context/movieListContext';

const CategoryButton = ({ label, categoryId }) => {
  const { setCategoryId } = useMovieList();

  const handleClick = () => {
    setCategoryId(categoryId);
  };

  return (
    <MuiButton
      sx={{
        height: '3rem',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '10px',
        color: '#00FFC2',
        border: '2px solid #00FFC2',
        borderRadius: '50px',
        padding: '14px 18px',
        backgroundColor: '#003E2F',
        textTransform: 'none',
        margin: '10px 6px',
        '&:hover': {
          backgroundColor: '#FFF',
        },
      }}
      type="button"
      onClick={handleClick}
    >
      {label}
    </MuiButton>
  );
};

export default CategoryButton;
