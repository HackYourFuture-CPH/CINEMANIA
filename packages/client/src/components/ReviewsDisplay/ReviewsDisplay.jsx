import React, { useEffect, useState } from 'react';
import {
  Box,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { RatingStars } from '../RatingStars/RatingStars';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';
import { apiURL } from '../../apiURL';

export function ReviewsDisplay({ movieID }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    if (!movieID) return;
    const fetchReviewsList = async () => {
      setIsLoading(true);
      if (movieID) {
        try {
          const response = await fetch(`${apiURL()}/reviews/movie/${movieID}`);
          const data = await response.json();
          setReviews(data);
        } catch (error) {
          setIsLoading(false);
        }
      }
      setIsLoading(false);
    };
    fetchReviewsList();
  }, [movieID]);
  const handleShowAllReviews = () => {
    setShowAllReviews((previousAllReviewsState) => !previousAllReviewsState);
  };
  if (isLoading) {
    return (
      <MovieDetailsLayout>
        <CircularProgress />
      </MovieDetailsLayout>
    );
  }
  return (
    <MovieDetailsLayout>
      <List>
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
            <StyledAddReviewTypography>Add a review</StyledAddReviewTypography>
          </Box>
        </HeaderBox>
        <StyledDivider />
        {reviews.slice(0, showAllReviews ? reviews.length : 3).map((review) => (
          <Box key={review.id}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <StyledAvatar alt={review.full_name} />
              </ListItemAvatar>
              <Box
                sx={{
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
                  averageRating={review.rating}
                  numberOfReviews={5}
                  color="#00FFC2"
                  ratingText={false}
                />
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: '#A4A4A4',
                  }}
                >
                  {review.rating}/5
                </Typography>
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
          </Box>
        ))}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StyledButton onClick={handleShowAllReviews}>
            {showAllReviews ? 'Less reviews...' : 'More reviews...'}
            {showAllReviews ? (
              <StyledArrowDropUpIcon />
            ) : (
              <StyledArrowDropDownIcon />
            )}
          </StyledButton>
        </Box>
      </List>
    </MovieDetailsLayout>
  );
}

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

const StyledDivider = styled(Divider)({
  marginLeft: 0,
  borderBottomWidth: 1,
  marginBottom: '49px',
  borderColor: '#00FFC2',
});

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

const StyledButton = styled(Button)({
  color: '#00FFC2',
  textDecoration: 'underline',
  textUnderlineOffset: 10,
  fontSize: '20px',
  fontWeight: 400,
});

const arrowIconStyles = {
  width: '70px',
  height: '70px',
  color: '#00FFC2',
};

const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)(arrowIconStyles);
const StyledArrowDropUpIcon = styled(ArrowDropUpIcon)(arrowIconStyles);
