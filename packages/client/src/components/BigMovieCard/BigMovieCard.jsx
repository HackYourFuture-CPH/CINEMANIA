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

const BigMovieCard = () => {
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
        // position: 'absolute',
        // left: 260,
        // top: 260,
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
          src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
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
          <RatingStars sx={{ display: 'flex', justifyContent: 'flex-end' }} />
          <Typography
            sx={{ fontWeight: 700, fontSize: 40, width: 633, paddingTop: 10 }}
          >
            Titanic
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
              Drama
            </Button>
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
              Romance
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
              101-year-old Rose DeWitt Bukater tells the story of her life
              aboard the Titanic, 84 years later. A young Rose boards the ship
              with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De
              Rossi win third-class tickets aboard the ship. Rose tells the
              whole story from Titanic’s departure through to its death – on its
              first and last voyage – on April 15, 1912.
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ fontWeight: 'bold', m: 1, width: 120 }}>Director:</Box>
              <Box sx={{ fontWeight: 'light', m: 1, width: 400 }}>
                James Cameron
              </Box>
              <Box sx={{ fontWeight: 'bold', m: 1, width: 120 }}>Writer:</Box>
              <Box sx={{ fontWeight: 'light', m: 1, width: 400 }}>
                James Cameron
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
