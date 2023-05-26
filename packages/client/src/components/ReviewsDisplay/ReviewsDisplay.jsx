import React, { useEffect, useState } from 'react';
import { Box, List, Divider, Button, CircularProgress } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';
import { apiURL } from '../../apiURL';
import { ReviewItem } from './ReviewItem';
import { HeaderReview } from './HeaderReview';
import { useUserContext } from '../../context/UserContext';

export function ReviewsDisplay({ movieID }) {
  const { user } = useUserContext();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [userReview, setUserReview] = useState(null);

  useEffect(() => {
    if (!movieID) return;
    const fetchReviewsList = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${apiURL()}/reviews/movie/${movieID}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchReviewsList();
  }, [movieID]);

  useEffect(() => {
    if (!movieID || !user) return;
    const fetchUserReview = async () => {
      try {
        const userReviewResponse = await fetch(
          `${apiURL()}/reviews/${movieID}/uid/${user.uid}`,
        );
        if (userReviewResponse.ok) {
          const userReviewData = await userReviewResponse.json();
          setUserReview(userReviewData);
        }
      } catch (error) {
        setUserReview([]);
      }
    };
    fetchUserReview();
  }, [movieID, user]);

  const handleShowAllReviews = () => {
    setShowAllReviews((previousAllReviewsState) => !previousAllReviewsState);
  };

  const filteredReviews = userReview
    ? reviews.filter(
        (review) =>
          !userReview.some((userReviewItem) => userReviewItem.id === review.id),
      )
    : reviews;
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
        {user && userReview && (
          <>
            <HeaderReview title="Your Reviews" />
            {userReview.map((review) => (
              <ReviewItem key={review.id} review={review} canEdit={true} />
            ))}
          </>
        )}
        <HeaderReview title="Reviews" />
        <StyledDivider />
        {filteredReviews
          .slice(0, showAllReviews ? filteredReviews.length : 3)
          .map((review) => (
            <ReviewItem key={review.id} review={review} canEdit={false} />
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

const StyledDivider = styled(Divider)({
  marginLeft: 0,
  borderBottomWidth: 1,
  marginBottom: '49px',
  borderColor: '#00FFC2',
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
