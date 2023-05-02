import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import './LandingPage.Style.css';

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
      <span>Landing Page</span>
      {movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};
