import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';

export const RatingStars = ({ averageRating, numberOfReviews }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'flex-end',
      }}
    >
      <Rating
        sx={{ width: '12.38%' }}
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={isNaN(averageRating) ? 0 : `${Number(averageRating)}`}
      />
      <Typography component="legend">
        {numberOfReviews
          ? `${averageRating} based on ${numberOfReviews} review${
              numberOfReviews === 1 ? '' : 's'
            }`
          : 'No rating given'}
      </Typography>
    </Box>
  );
};
