import * as React from 'react';
import { Card, CardMedia, Typography, Rating, Box } from '@mui/material';
import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from './useFavorites'; // created a custom hook to manage favorites

const BasicRating = () => {
  const StyledRating = styled(Rating)({
    position: 'relative',
    left: '1.96rem',
    borderRadius: '0.59rem',
    maxHeight: 'min-content',
    width: '3rem',
    top: '2rem',
    paddingBottom: '4rem',
    color: '#003E2F',
  });
  return <StyledRating name="read-only" value={4} readOnly />;
};

export function MovieCard({ movie }) {
  const [favorites, toggleFavorite] = useFavorites([]);
  const isFavorite = favorites.find((item) => item.id === movie.id);

  const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    max-height: min-content;
    width: 17.5rem;
    left: 6rem;
    background: linear-gradient(
      166deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0) 98.81%
    );
    box-shadow: 20px 40px 70px rgba(0, 0, 0, 0.25);
  `;

  const sharedIconStyles = `
  display: block;
  position: absolute;
  width: 2rem;
  height: 1.75rem;
  top: 2.25rem;
  right: 1.75rem;
  color: #ff0000;
  padding: 1rem;
  background-color: #000000cc;
  z-index: 1;
  &:hover: {
    color: #ff0000;
    cursor: pointer;
  }
`;

  const StyledFavoriteIcon = styled(FavoriteIcon)`
    ${sharedIconStyles}
  `;

  const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
    ${sharedIconStyles}
  `;
  const StyledCardMedia = styled(CardMedia)`
    position: relative;
    max-height: min-content;
    width: 13.5rem;
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
        {movie.description}
      </StyledTypographyDescription>
      <BasicRating />
    </StyledCard>
  );
}
