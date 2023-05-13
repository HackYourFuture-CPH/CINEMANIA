import React from 'react';
import {
  Container,
  Typography,
  Avatar,
  Stack,
  Box,
  Button,
} from '@mui/material';

const TopCastDisplay = ({ movieID }) => {
  return (
    <Container
      sx={{
        maxWidth: 'xl',
        disableGutters: true,
        position: 'absolute',
        right: 280,
        left: 0,
        mt: 15 /* To center the conatiner */,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          height: 30,
          fontSize: 32,
          fontWeight: 800,
          color: '#FFFFFF',
          borderLeft: 4,
          p: 1,
        }}
      >
        {`Top Cast ${movieID}`}
      </Typography>

      <Stack direction="row" spacing={1}>
        <Box sx={{ mx: 'auto', width: 219, p: 1, m: 1, textAlign: 'center' }}>
          <Avatar
            alt="James Cameron"
            src="https://www.themoviedb.org/t/p/w90_and_h90_face/9NAZnTjBQ9WcXAQEzZpKy4vdQto.jpg"
            sx={{ width: 219, height: 219, border: 1, borderColor: 'grey.500' }}
            variant="circular"
          />
          <Typography
            variant="caption"
            sx={{
              width: 219,
              height: 30,
              fontSize: 25,
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            James Cameron
          </Typography>
        </Box>

        <Box sx={{ mx: 'auto', width: 219, p: 1, m: 1, textAlign: 'center' }}>
          <Avatar
            alt="Leonardo DiCaprio"
            src="https://www.themoviedb.org/t/p/w90_and_h90_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"
            sx={{ width: 219, height: 219, border: 1, borderColor: 'grey.500' }}
            variant="circular"
          />
          <Typography
            variant="caption"
            sx={{
              width: 219,
              height: 30,
              fontSize: 25,
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Leonardo DiCaprio
          </Typography>
        </Box>
        <Box sx={{ mx: 'auto', width: 219, p: 1, m: 1, textAlign: 'center' }}>
          <Avatar
            alt="Kate Winslet"
            src="https://www.themoviedb.org/t/p/w90_and_h90_face/e3tdop3WhseRnn8KwMVLAV25Ybv.jpg"
            sx={{ width: 219, height: 219, border: 1, borderColor: 'grey.500' }}
            variant="circular"
          />
          <Typography
            variant="caption"
            sx={{
              width: 219,
              height: 30,
              fontSize: 25,
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Kate Winslet
          </Typography>
        </Box>

        <Box sx={{ mx: 'auto', width: 219, p: 1, m: 1, textAlign: 'center' }}>
          <Avatar
            alt="Gloria Stuart"
            src="https://www.themoviedb.org/t/p/w90_and_h90_face/9aG7UUX3PWIGGf1KRY5TsBSoNz9.jpg"
            sx={{ width: 219, height: 219, border: 1, borderColor: 'grey.500' }}
            variant="circular"
          />
          <Typography
            variant="caption"
            sx={{
              width: 219,
              height: 30,
              fontSize: 25,
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Gloria Stuart
          </Typography>
        </Box>

        <Box sx={{ mx: 'auto', width: 219, p: 1, m: 1, textAlign: 'center' }}>
          <Avatar
            alt="Billy Zane"
            src="https://www.themoviedb.org/t/p/w90_and_h90_face/7CBwxqE00aZAAEBaRkapylgdi15.jpg"
            sx={{ width: 219, height: 219, border: 1, borderColor: 'grey.500' }}
            variant="circular"
          />
          <Typography
            variant="caption"
            sx={{
              width: 219,
              height: 30,
              fontSize: 25,
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Billy Zane
          </Typography>
        </Box>

        <Box sx={{ mx: 'auto', width: 219, p: 1, m: 1, textAlign: 'center' }}>
          <Avatar
            alt="Kathy Bates"
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/3MsayDvY73uXGVbCFHyy1ABTacV.jpg"
            sx={{ width: 219, height: 219, border: 1, borderColor: 'grey.500' }}
            variant="circular"
          />
          <Typography
            variant="caption"
            sx={{
              width: 219,
              height: 30,
              fontSize: 25,
              fontWeight: 500,
              color: '#FFFFFF',
            }}
          >
            Kathy Bates
          </Typography>
        </Box>
      </Stack>
      <Button
        sx={{
          width: 200,
          color: '#FFFFFF',
          textDecoration: 'underline',
          textUnderlineOffset: 10,
          position: 'absolute',
          left: 1240,
          fontSize: 32,
          fontWeight: 400,
        }}
      >
        Full Cast
      </Button>
    </Container>
  );
};

export default TopCastDisplay;
