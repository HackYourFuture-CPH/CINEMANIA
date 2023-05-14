import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Divider,
  Button,
  Stack,
} from '@mui/material';

import RatingStars from '../RatingStars/RatingStars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';

const BigMovieCard = ({ currentMovie }) => {
  return (
    <Card
      sx={{
        bgcolor: 'mainGreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        width: 1518,
        height: 962,
        paddingTop: 5,
        paddingBottom: 5,
        position: 'absolute',
        left: 260,
        top: 260,
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
            width: 501,
            height: 751,
            p: 2,
            bgcolor: '#FFFFFF',
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
            width: 30.52,
            height: 28,
            top: 130,
            left: 640,
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
          <Typography
            sx={{ font: 'Inter', fontWeight: 700, fontSize: 28, width: 633 }}
          >
            <Box sx={{ fontWeight: 'light', m: 1 }}>
              {currentMovie?.description}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ fontWeight: 'bold', m: 1, width: 120 }}>Director:</Box>
              <Box sx={{ fontWeight: 'light', m: 1, width: 400 }}>
                {currentMovie?.director}
              </Box>
              <Box sx={{ fontWeight: 'bold', m: 1, width: 120 }}>Writer:</Box>
              <Box sx={{ fontWeight: 'light', m: 1, width: 400 }}>
                {currentMovie?.writer}
              </Box>
            </Box>
          </Typography>

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
  );
};

export default BigMovieCard;
