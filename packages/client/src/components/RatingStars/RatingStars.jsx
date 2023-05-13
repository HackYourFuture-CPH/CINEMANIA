import React from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function RatingStars({ averageRating, numberOfReviews }) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-end',
      }}
    >
      <Rating
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={isNaN(averageRating) ? 0 : `Rating: ${Number(averageRating)}`}
      />
      <Typography component="legend">
        {numberOfReviews ?? 'No rating given'}
      </Typography>
    </Box>
  );
}
