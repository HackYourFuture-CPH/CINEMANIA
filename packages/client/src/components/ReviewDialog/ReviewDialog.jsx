import React from 'react';
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

export function ReviewDialog({ initialState, handleClose }) {
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
        <RatingStars />
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
        />
      </ReviewContent>
      <DialogActions
        sx={{ backgroundColor: 'backgroundDark', color: 'mainGreen' }}
      >
        <Button onClick={handleClose} sx={{ backgroundColor: 'mainGreen' }}>
          Delete review
        </Button>
        <Button onClick={handleClose} sx={{ backgroundColor: 'mainGreen' }}>
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
