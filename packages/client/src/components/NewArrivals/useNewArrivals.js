import React from 'react';
import { apiURL } from '../../apiURL';

export const useNewArrivals = () => {
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${apiURL()}/movies/latest`);
        if (!response.ok) {
          throw new Error('Failed to fetch movies with the latest rating');
        }
        const data = await response.json();

        setMovies(data.movies);
        setError(null);
      } catch (errorCaught) {
        setError(new Error(errorCaught));
      }
    };

    fetchMovies();
  }, []);

  return [movies, error];
};
