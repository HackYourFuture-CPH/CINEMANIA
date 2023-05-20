import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';
import styled from '@emotion/styled';

export const RatingStars = ({
  rating,
  numberOfReviews,
  color,
  handleOpenReview,
  clickable,
}) => {
  // eslint-disable-next-line no-console
  console.log(
    '%cRatingStars.jsx line:14 clickable',
    'color: #007acc;',
    clickable,
  );
  return (
    <StarsRatingWrapper>
      <Rating
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={isNaN(rating) ? 0 : `${Number(rating)}`}
        sx={{ color }}
        onChange={handleOpenReview ? (e, v) => handleOpenReview(e, v) : null}
        readOnly={!clickable}
      />
      <Typography component="legend">
        {numberOfReviews
          ? `${rating} based on ${numberOfReviews} review${
              numberOfReviews === 1 ? '' : 's'
            }`
          : 'No rating given'}
      </Typography>
    </StarsRatingWrapper>
  );
};

const StarsRatingWrapper = styled(Box)`
  align-self: flex-end;
`;
