import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';

export const RatingStars = ({ averageRating, numberOfReviews, color }) => {
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
        value={isNaN(averageRating) ? 0 : `${Number(averageRating)}`}
        sx={{ color }}
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
