import * as React from 'react';
import { Card, CardMedia, Typography, Rating, Box } from '@mui/material';
import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from './useFavorites'; // created a custom hook to manage favorites

const BasicRating = () => {
  return <StyledRating name="read-only" value={4} readOnly />;
};

export function MovieCard({ movie }) {
  const [favorites, toggleFavorite] = useFavorites([]);
  const isFavorite = favorites.find(
    (favoriteMovie) => favoriteMovie.id === movie.id,
  );

  return (
    <StyledCard>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {isFavorite ? (
          <StyledFavoriteIcon onClick={() => toggleFavorite(movie)} />
        ) : (
          <StyledFavoriteBorderIcon onClick={() => toggleFavorite(movie)} />
        )}
      </Box>
      <StyledCardMedia
        component="img"
        image={movie.image_location}
        alt={movie.title}
      />
      <StyledTypographyTitle>{movie.title}</StyledTypographyTitle>

      <StyledTypographyDescription
        paragraph
        sx={{ top: '2rem', fontWeight: 400 }}
      >
        {movie.review_text}
      </StyledTypographyDescription>
      <BasicRating />
    </StyledCard>
  );
}

const StyledRating = styled(Rating)`
  position: relative;
  left: 1.96rem;
  border-radius: 0.59rem;
  max-height: min-content;
  width: 3rem;
  top: 2rem;
  padding-bottom: 4rem;
  color: #003e2f;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-height: min-content;
  width: 17.5rem;
  left: 6rem;
  background: linear-gradient(
      165deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 98%
    ),
    #00ffc2;
  box-shadow: 20px 40px 70px rgba(0, 0, 0, 0.25);
`;

const sharedIconStyles = `
    display: block;
    position: absolute;
    width: 2rem;
    height: 1.75rem;
    top: 2.25rem;
    right: 2rem;
    color: #FFFFFF;
    padding: .75rem;
    background-color: #000000cc;
    z-index: 1;
    &:hover {
      color: #ff0000;
      cursor: pointer;
    }
`;

const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${sharedIconStyles}
  color: #ff0000;
`;

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  ${sharedIconStyles}
`;

const StyledCardMedia = styled(CardMedia)`
  position: relative;
  max-height: min-content;
  width: 13rem;
  left: 0;
  top: 0;
  padding-top: 2.25rem;
  padding-left: 2rem;
`;

const sharedTypographyStyles = `
    position: relative;
    max-height: min-content;
    width: 13.5rem;
    left: 2rem;
    font-family: Inter, Arial, Helvetica, sans-serif;
    font-style: normal;
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: #003c2d;
`;

const StyledTypographyTitle = styled(Typography)`
  ${sharedTypographyStyles}
  top: 1.5rem;
  font-weight: 700;
`;

const StyledTypographyDescription = styled(Typography)`
  ${sharedTypographyStyles}
  top: 2rem;
  font-weight: 400;
`;
