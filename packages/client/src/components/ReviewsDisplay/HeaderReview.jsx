import React from 'react';
import { Box, Typography } from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from '@emotion/styled';

export const HeaderReview = ({ title, review }) => {
  return (
    <HeaderBox>
      <StyledTypography>REVIEWS</StyledTypography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AddCircleIcon
          sx={{
            color: '#00FFC2',
          }}
        />
        {review.length > 0 ? (
          <StyledAddReviewTypography>Add a review</StyledAddReviewTypography>
        ) : (
          <StyledAddReviewTypography>
            Be the first to review
          </StyledAddReviewTypography>
        )}
      </Box>
    </HeaderBox>
  );
};

const HeaderBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '39px',
});

const StyledTypography = styled(Typography)({
  height: 30,
  fontSize: 32,
  fontWeight: 800,
  borderLeft: '4px solid #FFFFFF',
  padding: '4px',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
  paddingLeft: '10px',
});

const StyledAddReviewTypography = styled(Typography)({
  height: 30,
  fontSize: 25,
  fontWeight: 800,
  padding: '4px',
  color: '#00FFC2',
});
