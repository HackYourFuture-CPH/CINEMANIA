import React, { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function RatingStars({ movieID }) {
  const [averageRating, setAverageRating] = useState(undefined);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API_PATH}/movies/${movieID}/reviews`,
        );
        if (response.ok) {
          const data = await response.json();
          let result = data.reduce((sum, review) => sum + review, 0);
          result /= data.length;
          setAverageRating(result);
        } else {
          setAverageRating('No reviews found');
        }
      } catch (error) {
        setAverageRating('No rating available');
      }
    })();
  }, [movieID]);
  return (
    <>
      <Rating
        name="half-rating"
        defaultValue={2.5}
        value={isNaN(averageRating) ? 0 : `Rating: ${Number(averageRating)}`}
        precision={0.5}
      />
      <Typography component="legend">
        {averageRating ?? 'No rating given'}
      </Typography>
    </>
  );
}
