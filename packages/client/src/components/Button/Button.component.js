import { Button as MuiButton } from '@mui/material';
import React from 'react';

export const Button = (props) => {
  const { label, color, variant } = props;
  return (
    <MuiButton
      sx={{ margin: '20px' }}
      type="button"
      color={color}
      variant={variant}
    >
      {label}
    </MuiButton>
  );
};
