import * as React from 'react';
import { useState, useEffect } from 'react';
import { apiURL } from '../../apiURL';
import { Typography, Grid } from '@mui/material';
import MovieCard from '../MovieCard/MovieCard';
import MovieCard2 from '../MovieCard/MovieCard2';

export default function LatestRatingMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`${apiURL()}/movies`);
      const examples = await response.json();
      setMovies(examples);
    }
    fetchMovies();
  }, []);
  return (
    <>
      <Typography
        sx={{
          height: '2.76rem',
          fontSize: '2.25rem',
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '3rem',
          marginTop: '3rem',
          fontFamily: 'Inter',
        }}
      >
        LATEST RATINGS
      </Typography>
      <Grid
        sx={{
          width: '78rem',
          maxHeight: 'fit-content',
          marginLeft: '5rem',
          // alignItems: 'center'
        }}
        container
        direction="row"
        cols={4}
        gap={5}
      >
        {movies
          .map((item) => (
            <>
              <MovieCard key={item.id} />
              <MovieCard2 />
            </>
          ))
          .splice(0, 4)}
      </Grid>
    </>
  );
}
