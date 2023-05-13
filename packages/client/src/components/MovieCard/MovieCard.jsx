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

export default function MovieCard(props) {
  const [favorites, toggleFavorite] = useFavorites([]);
  const isFavorite = favorites.includes(props.movie);

  const iconStyles = {
    display: 'block',
    position: 'absolute',
    width: '1.9rem',
    height: '1.75rem',
    top: '2.25rem',
    right: '1.96rem',
    color: '#FF0000',
    padding: '1rem',
    backgroundColor: '#000000CC',
    zIndex: 1,
    '&:hover': {
      color: '#FF0000',
      cursor: 'pointer',
    },
  };

  const commonStyles = {
    position: 'relative',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    color: '#003C2D',
    lineHeight: '1.43rem',
  };

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
            sx={iconStyles}
            onClick={() => toggleFavorite(props.movie)}
          />
        ) : (
          <FavoriteBorderIcon
            sx={iconStyles}
            onClick={() => toggleFavorite(props.movie)}
          />
        )}
      </Box>

      <CardMedia
        component="img"
        sx={{
          ...commonStyles,
          left: 0,
          top: 0,
          paddingTop: '2.25rem',
          paddingLeft: '1.96rem',
        }}
        image={props.movie.image_location}
        alt={props.movie.title}
      />
      <Typography
        sx={{
          ...commonStyles,
          top: '1.5rem',
          left: '1.96rem',
          fontWeight: 700,
          fontSize: '1.172rem',
        }}
        variant="h4"
      >
        {props.movie.title}
      </Typography>

      <Typography
        paragraph
        sx={{
          ...commonStyles,
          top: '2rem',
          fontWeight: 400,
          left: '1.96rem',
          fontSize: '1.17rem',
        }}
      >
        {props.movie.description}
      </Typography>
      <BasicRating />
    </Card>
  );
}
