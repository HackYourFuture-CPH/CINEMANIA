import React from 'react';
import { Button as MuiButton } from '@mui/material';

export const CategoryButton = ({
  label,
  categoryId,
  handleOnClick,
  selectedCategoryId,
}) => {
  const isActive = categoryId === selectedCategoryId;
  return (
    <MuiButton
      sx={{
        height: '3rem',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '10px',
        color: isActive ? '#003E2F' : '#00FFC2',
        border: '2px solid #00FFC2',
        borderRadius: '50px',
        padding: '14px 18px',
        backgroundColor: isActive ? '#00FFC2' : '#003E2F',
        textTransform: 'none',
        margin: '10px 6px',
        '&:hover': {
          backgroundColor: isActive ? '#00FFC2' : '#FFF',
        },
      }}
      type="button"
      onClick={handleOnClick}
    >
      {label}
    </MuiButton>
  );
};
