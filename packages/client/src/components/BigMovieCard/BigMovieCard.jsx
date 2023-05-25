import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  Snackbar,
} from '@mui/material';
import React, { useState } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import {
  StyledFavoriteIcon,
  StyledFavoriteBorderIcon,
} from '../MovieCard/MovieCard';
import { RatingStars } from '../RatingStars/RatingStars';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';
import { useUserContext } from '../../context/UserContext';
import { ReviewDialog } from '../ReviewDialog/ReviewDialog';
import { useFavorites } from '../MovieCard/useFavorites';

export const BigMovieCard = ({
  currentMovie,
  currentReview,
  currentUserId,
}) => {
  const [open, setOpen] = useState(false);
  const [favorites, toggleFavorite] = useFavorites([]);
  const isFavorite = favorites.find(
    (favoriteMovie) => favoriteMovie.id === currentMovie.id,
  );

  function handleOpenReview(event, value) {
    setOpen((status) => !status);
  }

  const { user } = useUserContext();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const snackbarPosition = {
    vertical: 'top',
    horizontal: 'center',
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const StyledTypography = styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.75rem; /* 28px */
    line-height: 2.125rem; /* 34px */
  `;

  const StyledBoldTypography = styled(StyledTypography)`
    font-weight: 700;
    width: 8rem;
  `;

  const MovieTitle = styled(StyledBoldTypography)`
    width: 39.5rem;
    margin: 5rem 0 0 0;
    font-size: 2.5rem;
    line-height: 3rem; /* 48px */
  `;

  const TextDivider = styled(Box)`
    display: flex;
    flex-direction: row;
  `;

  const MyButton = styled(Button)({
    height: '3.125rem',
    fontWeight: 500,
    fontSize: '1.125rem' /* 18px */,
    lineHeight: '1.375rem' /* 22px */,
    border: '1px solid #000000',
    color: '#000000',
    borderRadius: '1.25rem',
    margin: '2.5rem 0',
  });

  return (
    <MovieDetailsLayout>
      <Card
        sx={{
          bgcolor: 'mainGreen',
          display: 'flex',
          flexFlow: 'row wrap',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          gap: '3rem',
        }}
      >
        <Box
          sx={{
            padding: '1%',
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            flex: '1 1 300px',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              border: 1,
              borderColor: 'grey.500',
              alignSelf: 'flex-start',
              minWidth: '150px',
            }}
            src={currentMovie?.image_location}
            alt="Movie Poster"
          />
          {isFavorite ? (
            <StyledFavoriteIcon
              onClick={() => toggleFavorite(currentMovie, isFavorite)}
            />
          ) : (
            <StyledFavoriteBorderIcon
              onClick={() => toggleFavorite(currentMovie, isFavorite)}
            />
          )}
        </Box>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 500px',
            alignSelf: 'flex-end',
          }}
        >
          {user && (
            <RatingStars
              handleOpenReview={(_event, value) =>
                handleOpenReview(_event, value)
              }
              clickable={true}
              ratingText={
                currentReview
                  ? `Your rating is ${currentReview?.rating}`
                  : 'Leave your review'
              }
              alignSelf="flex-end"
              rating={currentReview?.rating}
            />
          )}
          <RatingStars
            clickable={false}
            ratingText={
              currentMovie.rating
                ? `${currentMovie.rating} based on ${
                    currentMovie.number_of_ratings
                  } review${currentMovie.number_of_ratings === 1 ? '' : 's'}`
                : 'No rating given'
            }
            rating={currentMovie.rating}
            alignSelf="flex-end"
          />
          <ReviewDialog
            initialState={open}
            handleClose={(_event, value) => handleOpenReview(_event, value)}
            currentReview={currentReview}
            movieId={currentMovie?.id}
            currentUserId={currentUserId}
          />
          <MovieTitle
            sx={{
              paddingTop: '0.625rem',
            }}
          >
            {currentMovie?.title}
          </MovieTitle>

          <MyButton
            variant="outlined"
            sx={{
              margin: '1.5rem 0',
              alignSelf: 'flex-start',
            }}
          >
            {currentMovie?.category_name}
          </MyButton>

          <Divider
            variant="middle"
            sx={{ border: 1, borderColor: '#000000', marginBottom: '1rem' }}
          />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <StyledTypography sx={{ margin: '1.5rem 0' }}>
              {currentMovie?.description}
            </StyledTypography>
            <TextDivider>
              <StyledBoldTypography>Director: </StyledBoldTypography>
              <StyledTypography>{currentMovie?.director}</StyledTypography>
            </TextDivider>
            <TextDivider>
              <StyledBoldTypography> Writer: </StyledBoldTypography>
              <StyledTypography>{currentMovie?.writer}</StyledTypography>
            </TextDivider>
          </Box>

          <MyButton
            variant="outlined"
            onClick={() => {
              if (!user) {
                handleSnackbarOpen();
              } else {
                // eslint-disable-next-line no-alert
                alert('Added to Shopping Cart');
              }
            }}
            sx={{
              marginTop: '1rem',
              alignSelf: 'flex-end',
            }}
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </MyButton>
          <Snackbar
            anchorOrigin={snackbarPosition}
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message="You are not logged in"
            sx={{
              '.css-dh0nqz-MuiPaper-root-MuiSnackbarContent-root': {
                backgroundColor: 'hoverRed',
                fontSize: '20px',
                position: 'absolute',
                marginTop: '20rem',
                paddingLeft: '5rem',
              },
            }}
          />
        </CardContent>
      </Card>
    </MovieDetailsLayout>
  );
};
