import * as React from 'react';
import { Card, CardMedia, Typography, Rating, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useFavorites from './useFavorites'; // created a custom hook to manage favorites

const BasicRating = () => {
  return (
    <Rating
      name="read-only"
      value={4}
      readOnly
      sx={{
        position: 'relative',
        left: '1.96rem',
        borderRadius: '0.59',
        maxHeight: 'min-content',
        width: '3rem',
        top: '2rem',
        paddingBottom: '4rem',
        color: '#003E2F',
      }}
    />
  );
};

export default function MovieCard({ movie }) {
  const [favorites, toggleFavorite] = useFavorites([]);
  const isFavorite = favorites.includes(movie);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'min-content',
        width: '17.43rem',
        left: '6rem',
        background:
          'linear-gradient(166.18deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 98.81%), #00FFC2',
        boxShadow: '20px 40px 70px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {isFavorite ? (
          <FavoriteIcon
            sx={{
              display: 'block',
              position: 'absolute',
              width: '1.9rem',
              height: '1.75rem',
              top: '2.25rem',
              right: '1.96rem',
              color: 'hoverRed',
              padding: '1rem',
              backgroundColor: '#000000CC',
              zIndex: 1,
              '&:hover': {
                color: 'hoverRed',
                cursor: 'pointer',
              },
            }}
            onClick={() => toggleFavorite(movie)}
          />
        ) : (
          <FavoriteBorderIcon
            sx={{
              display: 'block',
              position: 'absolute',
              width: '1.9rem',
              height: '1.75rem',
              top: '2.25rem',
              right: '1.96rem',
              color: '#FFFFFF',
              padding: '1rem',
              backgroundColor: '#000000CC',
              zIndex: 1,
              '&:hover': {
                color: 'hoverRed',
                cursor: 'pointer',
              },
            }}
            onClick={() => toggleFavorite(movie)}
          />
        )}
      </Box>
      <CardMedia
        component="img"
        sx={{
          position: 'relative',
          maxHeight: 'min-content',
          width: '13.5rem',
          left: 0,
          top: 0,
          paddingTop: '2.25rem',
          paddingLeft: '1.96rem',
        }}
        image={movie.image_location}
        alt={movie.title}
      />
      <Typography
        sx={{
          position: 'relative',
          maxHeight: 'min-content',
          width: '13.45rem',
          top: '1.5rem',
          left: '1.96rem',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '1.172rem',
          fontHeight: '1.43rem',
          color: '#003C2D',
        }}
        variant="h4"
      >
        {movie.title}
      </Typography>

      <Typography
        paragraph
        sx={{
          position: 'relative',
          minHeight: 'fit-content',
          width: '13.43rem',
          top: '2rem',
          fontFamily: 'Inter',
          fontWeight: 400,
          left: '1.96rem',
          fontSize: '1.17rem',
          color: '#003C2D',
          lineHeight: '1.43rem',
        }}
      >
        {movie.description}
      </Typography>
      <BasicRating />
    </Card>
  );
}
