import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Divider,
  Typography,
  IconButton,
  Container,
} from '@mui/material';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { RatingStars } from '../RatingStars/RatingStars';
import EditIcon from '@mui/icons-material/Edit';

import styled from '@emotion/styled';

export const ReviewItem = ({ review, canEdit }) => {
  return (
    <Container key={review.id}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <StyledAvatar alt={review.full_name} />
        </ListItemAvatar>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 32,
                marginRight: '34px',
              }}
              color="#FFFFFF"
            >
              {review.full_name}
            </Typography>
            <Typography color="#FFFFFF">
              {new Date(review.created_at).toISOString().split('T')[0]}
            </Typography>
          </Box>
          <RatingStars
            rating={review.rating}
            numberOfReviews={5}
            color="#00FFC2"
            ratingText={false}
          />
          <Typography
            sx={{
              fontSize: '20px',
              color: '#A4A4A4',
              paddingLeft: '20px',
            }}
          >
            {review.rating}/5
          </Typography>
          {canEdit && (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                color: '#00FFC2',
              }}
            >
              <StyledIconButton>
                <EditIcon />
              </StyledIconButton>
            </Box>
          )}
        </Box>
      </ListItem>
      <Box
        sx={{
          paddingLeft: 5,
          display: 'inline-block',
        }}
      >
        <ReviewTextTypography>{review.review_text}</ReviewTextTypography>
      </Box>
      <LikesBox>
        <ThumbUpIcon sx={{ paddingRight: 2, color: '#00FFC2' }} />
        <Typography color="#A4A4A4" sx={{ paddingRight: '49px' }}>
          45 likes
        </Typography>
        <ThumbDownOffAltIcon
          sx={{
            paddingRight: 2,
            color: '#00FFC2',
          }}
        />

        <Typography color="#A4A4A4"> 12 likes</Typography>
      </LikesBox>
      <StyledDivider />
    </Container>
  );
};

const StyledAvatar = styled(Avatar)({
  width: '95px',
  height: '95px',
  marginRight: '45px',
});

const ReviewTextTypography = styled(Typography)({
  fontSize: '20px',
  marginTop: '30px',
  color: '#FFFFFF',
});

const LikesBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '34px',
  margin: '0 0 49px 40px',
});

const StyledDivider = styled(Divider)({
  marginLeft: 0,
  borderBottomWidth: 1,
  marginBottom: '49px',
  borderColor: '#00FFC2',
});

const StyledIconButton = styled(IconButton)({
  color: '#00FFC2',
  borderRadius: 0,
});
