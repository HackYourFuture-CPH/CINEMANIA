import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { RatingStars } from '../RatingStars/RatingStars';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';

export const BigMovieCard = ({ currentMovie }) => {
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
    width: '39.5rem';
    padding-top: '0.625rem';
    font-size: 2.5rem;
    line-height: 3rem; /* 48px */
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
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1518,
          width: '100%' /* 1518px */,
          padding: '6rem 7.5rem',
          gap: '5rem',
        }}
      >
        <Box
          sx={{
            width: '31.40%',
            heigth: '46.50%',
            padding: '1%',
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            flexShrink: 1,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              border: 1,
              borderColor: 'grey.500',
            }}
            src={currentMovie?.image_location}
            alt="Movie Poster"
          />
          <FavoriteIcon
            sx={{
              color: 'white',
              backgroundColor: 'black',
              position: 'absolute',
              width: '2rem',
              height: '2rem',
              padding: '0.5rem',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignSelf: 'flex-end',
            }}
          />
        </Box>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: '39.5rem',
            flexGrow: '1.25',
            paddingLeft: '3.125rem',
          }}
        >
          <RatingStars
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
            averageRating={currentMovie?.rating ?? 0}
            numberOfReviews={currentMovie?.number_of_ratings}
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
              width: '9.375rem',
              margin: '1.5rem 0',
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
            }}
          >
            <StyledTypography sx={{ margin: '1.5rem 0' }}>
              {currentMovie?.description}
            </StyledTypography>
            <StyledBoldTypography>Director: </StyledBoldTypography>
            <StyledTypography sx={{ width: '30rem' }}>
              {currentMovie?.director}
            </StyledTypography>
            <StyledBoldTypography>Writer: </StyledBoldTypography>
            <StyledTypography>{currentMovie?.writer}</StyledTypography>
          </Box>

          <MyButton
            variant="outlined"
            onClick={() => {
              alert('Added to Shopping Cart');
            }}
            sx={{
              marginTop: '1rem',
              width: '12.5rem',
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
