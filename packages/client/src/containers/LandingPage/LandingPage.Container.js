import { Card, CardContent, Chip } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { Button } from '../../components/Button/Button.component';
import FeaturedMovie from '../../components/FeaturedMovie';

export const LandingPage = () => {
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
    <div className="landing-page-container">
      {movies.map((movie) => (
        <Card sx={{ width: 550, margin: 10 }} variant="outlined" key={movie.id}>
          <CardContent sx={{ margin: '20px', bgcolor: blue[100] }}>
            <Chip
              sx={{ fontSize: '1.2rem' }}
              color="secondary"
              label={movie.title}
            />
            <p>{movie.description}</p>
          </CardContent>
        </Card>
      ))}
      <FeaturedMovie />
      <Button label="click me!" color="primary" variant="contained" />
    </div>
  );
};
