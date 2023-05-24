import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { RatingStars } from '../RatingStars/RatingStars';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';
import { useUserContext } from '../../context/UserContext';
import { ReviewDialog } from '../ReviewDialog/ReviewDialog';
import { useNavigate } from 'react-router-dom';

export const BigMovieCard = ({ currentMovie }) => {
  const [open, setOpen] = useState(false);

  const { user } = useUserContext();

  const navigate = useNavigate();

  function handleOpenReview(event, value) {
    setOpen((status) => !status);
  }

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
          <FavoriteIcon
            sx={{
              color: 'white',
              backgroundColor: 'black',
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '2rem',
              height: '2rem',
              padding: '0.5rem',
              zIndex: 1,
            }}
          />
        </Box>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 500px',
            alignSelf: 'flex-end',
          }}
        >
          {user ? (
            <RatingStars
              handleOpenReview={(_event, value) =>
                handleOpenReview(_event, value)
              }
              clickable={true}
              ratingText={`Your rating is ${user?.auth?.name}`}
              alignSelf="flex-end"
            />
          ) : (
            <MyButton
              onClick={() => {
                // eslint-disable-next-line no-alert
                navigate('/signup');
              }}
              sx={{ width: '10rem', alignSelf: 'flex-end' }}
            >
              Edit Rating
            </MyButton>
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
            user={user}
            movieId={currentMovie?.id}
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
              // eslint-disable-next-line no-alert
              alert('Added to Shopping Cart');
            }}
            sx={{
              marginTop: '1rem',
              alignSelf: 'flex-end',
            }}
            startIcon={<AddShoppingCartIcon />}
          >
            Add to Cart
          </MyButton>
        </CardContent>
      </Card>
    </MovieDetailsLayout>
  );
};
