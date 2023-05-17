import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import { RatingStars } from '../RatingStars/RatingStars';
import { MovieDetailsLayout } from '../../containers/MovieDetailsLayout/MovieDetailsLayout';

export const BigMovieCard = ({ currentMovie }) => {
  return (
    <MovieDetailsLayout>
      <Card
        sx={{
          bgcolor: 'mainGreen',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          padding: '5rem',
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
              width: '30rem',

              p: 2,
              bgcolor: 'white',
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

              width: 30.52,
              height: 28,
            }}
          />
        </Box>

        <Box bgcolor="mainGreen" fontFamily="Inter" paddingLeft="50px">
          <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <RatingStars
              sx={{ display: 'flex', justifyContent: 'flex-end' }}
              averageRating={currentMovie?.rating ?? 0}
              numberOfReviews={currentMovie?.number_of_ratings}
            />
            <Typography
              sx={{ fontWeight: 700, fontSize: 40, width: 633, paddingTop: 10 }}
            >
              {currentMovie?.title}
            </Typography>

            <Stack direction="row" spacing={2} paddingTop={2} paddingBottom={4}>
              <Button
                sx={{
                  border: 1,
                  borderColor: '#000000',
                  width: 150,
                  borderRadius: '20px',
                  fontWeight: 500,
                  fontSize: 24,
                  color: '#003E2F',
                }}
              >
                {currentMovie?.category_name}
              </Button>
            </Stack>

            <Divider
              variant="middle"
              sx={{ border: 1, borderColor: '#000000' }}
            />

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '39.5rem',
              }}
            >
              <Typography
                sx={{
                  font: 'Inter',
                  fontWeight: 400,
                  fontSize: 28,
                }}
              >
                {currentMovie?.description}
              </Typography>

              <Typography
                sx={{
                  font: 'Inter',
                  fontSize: 28,
                  fontWeight: 700,
                  width: '7.5rem',
                }}
              >
                Director:
              </Typography>

              <Typography
                sx={{
                  font: 'Inter',
                  fontSize: 28,
                  fontWeight: 400,
                  ml: 1,
                  width: '25rem',
                }}
              >
                {currentMovie?.director}
              </Typography>

              <Typography
                sx={{
                  font: 'Inter',
                  fontSize: 28,
                  fontWeight: 700,
                  width: '6.75rem',
                }}
              >
                Writer:
              </Typography>

              <Typography
                sx={{
                  font: 'Inter',
                  fontSize: 28,
                  fontWeight: 400,
                  ml: 1,
                  width: '30rem',
                  flexGrow: 1,
                }}
              >
                {currentMovie?.writer}
              </Typography>
            </Box>

            <Button
              variant="outlined"
              sx={{
                border: 1,
                borderColor: '#000000',
                borderRadius: '20px',
                marginTop: 10,
                width: 250,
                fontWeight: 500,
                fontSize: 24,
                color: '#003E2F',
                display: 'flex',
                alignSelf: 'flex-end',
              }}
              startIcon={<AddShoppingCartIcon />}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Box>
      </Card>
    </MovieDetailsLayout>
  );
};
