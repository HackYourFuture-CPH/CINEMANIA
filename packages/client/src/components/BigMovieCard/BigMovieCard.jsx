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
import { RatingStars } from '../RatingStars/RatingStars';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';
import styled from '@emotion/styled';

export const BigMovieCard = ({ currentMovie }) => {
  const MovieTitle = styled(Typography)`
    font-weight: 700;
    font-weight: 2.5rem;
    width: '39.5rem';
    padding-top: '0.625rem';
  `;

  const StyledTypography = styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.313rem; /* 21px  or 1.75rem */
    line-height: 1.563rem;
    flex-grow: 1;
  `;

  const StyledBoldTypography = styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem; /* 21px  or 1.75rem */
    line-height: 1.563rem;
    width: 6rem;
  `;

  const MyButton = styled(Button)({
    height: '3.125rem',
    fontWeight: 500,
    fontSize: '1.125rem' /* 18px */,
    lineHeight: '1.375rem' /* 22px */,
    border: '1px solid #000000',
    color: '#000000',
    borderRadius: '1.25rem',
  });

  return (
    <MovieDetailsLayout>
      <Card
        sx={{
          bgcolor: 'mainGreen',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '6rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: '23.766rem',
              heigth: '35.20rem',
              padding: '1rem',
              bgcolor: 'white',
              border: 1,
              borderColor: 'grey.500',
            }}
            src={currentMovie?.image_location}
            alt="Movie Poster"
          />
        </Box>

        <Box bgcolor="mainGreen" fontFamily="Inter">
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
          >
            <RatingStars
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
              averageRating={currentMovie?.rating ?? 0}
              numberOfReviews={currentMovie?.number_of_ratings}
            />
            <MovieTitle
              sx={{
                fontWeight: 700,
                fontSize: 40,
                width: '39.5rem',
                paddingTop: 10,
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
              startIcon={<AddShoppingCartIcon />}
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
                width: '39.5rem',
              }}
            >
              <StyledTypography sx={{ mb: 2.5 }}>
                {currentMovie?.description}
              </StyledTypography>
              <StyledBoldTypography>Director: </StyledBoldTypography>
              <StyledTypography flexGrow={1} width="28.125rem">
                {currentMovie?.director}
              </StyledTypography>
              <StyledBoldTypography>Writer: </StyledBoldTypography>
              <StyledTypography>{currentMovie?.writer}</StyledTypography>
            </Box>

            <MyButton
              variant="outlined"
              sx={{
                marginTop: 10,
                width: '12.5rem',
                alignSelf: 'flex-end',
              }}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to Cart
            </MyButton>
          </CardContent>
        </Box>
      </Card>
    </MovieDetailsLayout>
  );
};
