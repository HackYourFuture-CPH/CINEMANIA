import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';

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

  return <div className="landing-page-container" />;
};
