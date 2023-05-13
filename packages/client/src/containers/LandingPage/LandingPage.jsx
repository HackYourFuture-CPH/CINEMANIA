import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';
import MovieCard from '../../components/MovieCard/MovieCard';

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

  const movieCardStyles = {
    width: '50%',
    height: '50%',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    position: 'absolute',
  };

  return (
    <div
      className="landing-page-container"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <FeaturedMovie />
      <div style={movieCardStyles}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
