import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';

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
    <div>
      <FeaturedMovie />
    </div>
  );
};
