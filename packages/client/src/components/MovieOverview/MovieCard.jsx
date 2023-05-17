import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={movie.id}>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage:
              'linear-gradient(360deg, #00FFC2 0%, rgba(0, 0, 0, 0.1) 33%)',
            order: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}
        >
          {movie.is_favorite ? (
            <FavoriteIcon
              sx={{
                width: '1.9rem',
                height: '1.75rem',
                color: '#FF0000',
                padding: '1rem',
                backgroundColor: '#000000CC',
                '&:hover': {
                  color: '#FF0000',
                  cursor: 'pointer',
                },
              }}
            />
          ) : (
            <FavoriteBorderIcon
              sx={{
                width: '1.9rem',
                height: '1.75rem',
                color: '#FFFFFF',
                padding: '1rem',
                backgroundColor: '#000000CC',
                '&:hover': {
                  color: '#FF0000',
                  cursor: 'pointer',
                },
              }}
            />
          )}
          <Typography
            component={Link}
            to={`/movies/${movie.id}`}
            sx={{
              color: '#FFFFFF',
              width: '100%',
              height: 30,
              marginBottom: '1.5rem',
              textAlign: 'center',
              fontWeight: '500',
              fontSize: '25px',
              lineHeight: '30px',
              textDecoration: 'none',
            }}
          >
            See details...
          </Typography>
        </Box>
        <CardMedia
          component="img"
          image={`${movie.image_location}`}
          alt={movie.title}
          sx={{ order: 2, aspectRatio: '414/623' }}
        />
      </Box>
    </Grid>
  );
};
