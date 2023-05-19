/* eslint-disable camelcase */
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MovieCardContainer = styled(Grid)`
  position: relative;
`;

const OverlayContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(360deg, #00ffc2 0%, rgba(0, 0, 0, 0.1) 33%);
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const IconButton = styled(({ favorite, ...rest }) =>
  favorite ? <FavoriteIcon {...rest} /> : <FavoriteBorderIcon {...rest} />,
)`
  width: 1.9rem;
  height: 1.75rem;
  color: ${({ favorite }) => (favorite ? '#FF0000' : '#FFFFFF')};
  padding: 1rem;
  background-color: #000000cc;
  &:hover {
    color: #ff0000;
    cursor: pointer;
  }
`;

const MovieTitle = styled(Typography)`
  color: #ffffff;
  width: 100%;
  height: 30px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-decoration: none;
`;

const MovieCard = ({ movie }) => {
  const { is_favorite: isFavorite, image_location, title, id } = movie;

  return (
    <MovieCardContainer item xs={12} sm={6} md={4} key={id}>
      <Box sx={{ position: 'relative' }}>
        <OverlayContainer>
          <IconButton favorite={isFavorite} />
          <MovieTitle component={Link} to={`/movies/${id}`}>
            See details...
          </MovieTitle>
        </OverlayContainer>
        <CardMedia
          component="img"
          image={`${image_location}`}
          alt={title}
          sx={{ order: 2, aspectRatio: '414/623' }}
        />
      </Box>
    </MovieCardContainer>
  );
};

export { MovieCard };
