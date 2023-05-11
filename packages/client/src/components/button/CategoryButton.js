import React from 'react';
import { Button as MuiButton } from '@mui/material';

const CategoryButton = ({ label, catId, setCatId }) => {
  const handleClick = () => {
    setCatId(catId);
  };

  return (
    <MuiButton
      sx={{
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '22px',
        color: '#00FFC2',
        border: '2px solid #00FFC2',
        borderRadius: '37.5px',
        padding: '12px 18px',
        backgroundColor: '#003E2F',
        textTransform: 'none',
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