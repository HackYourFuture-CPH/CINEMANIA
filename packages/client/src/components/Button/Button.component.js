/* eslint-disable no-console */
import { Button as MuiButton, Tooltip } from '@mui/material';
import React from 'react';

export const Button = (props) => {
  const { label, color, variant } = props;
  return (
    <Tooltip title=":)">
      hej
      <MuiButton
        type="button"
        color={color}
        variant={variant}
        onClick={() => console.log('hej!')}
      >
        {label}
      </MuiButton>
    </Tooltip>
  );
};
