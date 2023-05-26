import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@mui/material';
import { RatingStars } from '../RatingStars/RatingStars';
import styled from '@emotion/styled';
import { apiURL } from '../../apiURL';

export function ReviewDialog({
  initialState,
  handleClose,
  currentReview,
  movieId,
  currentUserId,
  setCurrentUsersReview,
}) {
  const [formData, setFormData] = useState(currentReview);
  useEffect(() => {
    setFormData(currentReview);
  }, [currentReview]);

  const postValue = {
    movie_id: movieId,
    user_id: currentUserId,
    rating: formData ? formData.rating : '',
    review_text: formData ? formData.review_text : '',
  };

  const deleteReview = async (id) => {
    await fetch(`${apiURL()}/reviews/${id}`, {
      method: 'DELETE',
    });
    setCurrentUsersReview({ ...formData, rating: 0, review_text: '' });
  };

  const updateReview = async (id) => {
    const body = { ...formData };
    await fetch(`${apiURL()}/reviews/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setCurrentUsersReview(body);
  };

  const postReview = async () => {
    const body = postValue;
    await fetch(`${apiURL()}/reviews/`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    setCurrentUsersReview(body);
  };

  return (
    <Dialog open={initialState} onClose={handleClose}>
      <ReviewTitle
        sx={{ backgroundColor: 'backgroundDark', color: 'mainGreen' }}
      >
        Review <Avatar />
      </ReviewTitle>
      <ReviewContent
        sx={{ backgroundColor: 'backgroundDark', color: 'mainGreen' }}
      >
        <RatingStars
          rating={formData && formData.rating}
          onChange={(e) => {
            setFormData({ ...formData, rating: e.target.value });
          }}
        />
        <DialogContentText sx={{ color: 'mainGreen' }}>
          Please, write your review of the movie
        </DialogContentText>

        <ReviewContentText
          autoFocus
          margin="dense"
          id="name"
          label="review"
          multiline
          rows={4}
          fullWidth
          variant="filled"
          InputLabelProps={{
            sx: {
              color: 'mainGreen',
              textTransform: 'capitalize',
            },
          }}
          InputProps={{ sx: { color: 'mainGreen' } }}
          placeholder={
            formData ? '' : 'Leave your first review about this movie'
          }
          defaultValue={formData ? formData.review_text : ''}
          onChange={(e) => {
            setFormData({ ...formData, review_text: e.target.value });
          }}
        />
      </ReviewContent>
      <DialogActions
        sx={{
          backgroundColor: 'backgroundDark',
          color: 'mainGreen',
          display: 'flex',
        }}
      >
        <Button
          onClick={() => {
            deleteReview(currentReview.reviewID);
            window.location.reload(true);
            handleClose();
          }}
          sx={{ backgroundColor: 'mainGreen' }}
          disabled={!currentReview}
        >
          Delete review
        </Button>
        <Button
          onClick={() => {
            updateReview(currentReview.reviewID);

            handleClose();
          }}
          sx={{ backgroundColor: 'mainGreen' }}
          disabled={!currentReview}
        >
          Update review
        </Button>
        <Button
          onClick={() => {
            postReview();
            window.location.reload(true);
            handleClose();
          }}
          sx={{ backgroundColor: 'mainGreen' }}
          disabled={currentReview}
        >
          Save review
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const ReviewTitle = styled(DialogTitle)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const ReviewContent = styled(DialogContent)`
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
`;
const ReviewContentText = styled(TextField)`
  & .input {
    color: 'mainGreen';
  }
`;
