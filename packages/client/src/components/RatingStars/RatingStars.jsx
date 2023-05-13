import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function RatingStars(params) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-end',
      }}
    >
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Typography component="legend">No rating given</Typography>
    </Box>
  );
}
