import * as React from 'react';
import { Card, CardMedia, Typography, Rating, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BasicRating = () => {
  return (
    <Rating
      name="read-only"
      value={4}
      readOnly
      sx={{
        position: 'relative',
        left: '2.6rem',
        radius: '0.8',
        height: '2.6rem',
        width: '3rem',
        top: '4.5rem',
        color: '#003E2F',
      }}
    />
  );
};

export default function MovieComponent() {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '45.43rem',
        width: '23.25rem',
        left: '8rem',
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
        <FavoriteBorderIcon
          sx={{
            display: 'block',
            position: 'absolute',
            width: '1.9rem',
            height: '1.75rem',
            top: '2.62rem',
            right: '2.62rem',
            color: '#FFFFFF',
            padding: '1rem',
            backgroundColor: '#000000CC',
            zIndex: 1,
          }}
        />
      </Box>

      <CardMedia
        component="img"
        sx={{
          position: 'relative',
          height: '27.12rem',
          width: '18rem',
          left: 0,
          top: 0,
          paddingTop: '2.62rem',
          paddingLeft: '2.62rem',
        }}
        image="https://cdn.images.express.co.uk/img/dynamic/36/590x/secondary/Ant-Man-and-the-Wasp-Quantumania-4730518.jpg?r=1683206802246"
        alt="Quantumania"
      />
      <Typography
        sx={{
          position: 'relative',
          height: '1.87rem',
          width: '17.81rem',
          top: '1.56rem',
          left: '2.62rem',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '1.56rem',
          color: '#003C2D',
        }}
        variant="h4"
      >
        Quantumania
      </Typography>

      <Typography
        paragraph
        sx={{
          position: 'relative',
          height: '3.75rem',
          width: '17.9rem',
          top: '2.8rem',
          fontFamily: 'Inter',
          fontWeight: 400,
          left: '2.62rem',
          fontSize: '1.5rem',
          color: '#003C2D',
          lineHeight: '1.8rem',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </Typography>
      <BasicRating />
    </Card>
  );
}
