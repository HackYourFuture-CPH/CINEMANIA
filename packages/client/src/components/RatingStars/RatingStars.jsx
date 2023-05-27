import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React from 'react';
import styled from '@emotion/styled';

export const RatingStars = ({
  rating,
  color,
  ratingText,
  handleOpenReview,
  alignSelf,
  onChange,
}) => {
  const StarsRatingWrapper = styled(Box)`
    align-self: ${alignSelf ?? ''};
  `;

  return (
    <StarsRatingWrapper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Rating
        sx={{ color }}
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={isNaN(rating) ? 0 : Number(rating)}
        onClick={handleOpenReview ? (e, v) => handleOpenReview(e, v) : null}
        onChange={onChange}
      />
      {ratingText && <Typography component="legend">{ratingText}</Typography>}
    </StarsRatingWrapper>
  );
};
