import * as React from 'react';
import { Card, CardMedia, Typography, Rating, Box } from '@mui/material';
import styled from '@emotion/styled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

const BasicRating = ({ rating }) => {
  return <StyledRating name="read-only" value={Number(rating)} readOnly />;
};

export function MovieCard({ movie, favorites, toggleFavorite }) {
  const isFavorite = favorites.find(
    (favoriteMovie) => favoriteMovie.id === movie.id,
  );

  return (
    <StyledCard>
      <Box sx={{ position: 'relative' }}>
        {isFavorite ? (
          <StyledFavoriteIcon
            onClick={() => toggleFavorite(movie, isFavorite)}
          />
        ) : (
          <StyledFavoriteBorderIcon
            onClick={() => toggleFavorite(movie, isFavorite)}
          />
        )}
      </Box>
      <StyledLink to={`/movies/${movie.id}`}>
        <StyledCardMedia
          component="img"
          image={movie.image_location}
          alt={movie.title}
        />
        <StyledTypographyTitle>{movie.title}</StyledTypographyTitle>
        <StyledTypographyReviewText
          paragraph
          sx={{ top: '2rem', fontWeight: 400 }}
        >
          {movie.review_text}
        </StyledTypographyReviewText>
      </StyledLink>
      <BasicRating rating={movie.rating} />
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

  @media (max-width: 1280px), (max-width: 1024px), (max-width: 768px) {
    left: 1.5rem;
  }
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

  @media (max-width: 1280px) {
    width: 14rem;
    left: 4rem;
  }

  @media (max-width: 768px) {
    width: 10rem;
  }
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

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  ${sharedIconStyles}
  color: #ff0000;

  @media (max-width: 1024px) {
    right: 1.5rem;
  }

  @media (max-width: 768px) {
    right: 1.3rem;
  }
`;

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  ${sharedIconStyles}
  @media (max-width: 1024px) {
    right: 1.5rem;
  }

  @media (max-width: 768px) {
    right: 1.3rem;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  position: relative;
  max-height: min-content;
  width: 13rem;
  left: 0;
  top: 0;
  padding-top: 2.25rem;
  padding-left: 2rem;

  @media (max-width: 1280px) {
    width: 9rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 1024px) {
    width: 9.5rem;
    left: 0;
  }

  @media (max-width: 768px) {
    width: 8rem;
    padding-left: 1.5rem;
  }
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

  @media (max-width: 1280px) {
    width: min-content;
    font-size: 1.1rem;
    line-height: 1.3rem;
    top: 1rem;
    left: 1.5rem;
  }

  @media (max-width: 1024px) {
    width: fit-content;
    left: 1.5rem;
  }

  @media (max-width: 768px) {
    width: fit-content;
    font-size: 0.9rem;
    line-height: 1.1rem;
    top: 0.5rem;
    left: 1.5rem;
  }
`;

const StyledTypographyReviewText = styled(Typography)`
  ${sharedTypographyStyles}
  top: 2rem;
  font-weight: 400;

  @media (max-width: 1280px) {
    font-size: 0.9rem;
    line-height: 1.1rem;
    top: 1.5rem;
    width: 8rem;
    left: 1.5rem;
  }

  @media (max-width: 1024px) {
    width: 8rem;
    left: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1rem;
    top: 1rem;
    left: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
