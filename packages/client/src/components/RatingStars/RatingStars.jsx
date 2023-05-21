import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';
import styled from '@emotion/styled';

export const RatingStars = ({
  rating,
  numberOfReviews,
  color,
  ratingText,
  handleOpenReview,
  alignSelf,
}) => {
  const StarsRatingWrapper = styled(Box)`
    align-self: ${alignSelf ?? ''};
  `;

  return (
    <StarsRatingWrapper
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Rating
        sx={{ width: '12.38%', color }}
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={isNaN(rating) ? 0 : `${Number(rating)}`}
        onChange={(e, v) => handleOpenReview(e, v)}
      />
      {ratingText && (
        <Typography component="legend">
          {numberOfReviews
            ? `${rating} based on ${numberOfReviews} review${
                numberOfReviews === 1 ? '' : 's'
              }`
            : 'No rating given'}
        </Typography>
      )}
    </StarsRatingWrapper>
  );
};
