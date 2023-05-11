import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingStars(params) {
  return (
    <>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Typography component="legend">No rating given</Typography>
    </>
  );
}
