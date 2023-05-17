import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { EllipseCarousel } from '../../components/EllipseCarousel/EllipseCarousel';

export const MostPoppular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(`${apiURL()}/views/most-popular`);
        const data = await response.json();
        setPopularMovies(data.slice(1, 12));
      } catch (error) {
        return error;
      }
    };
    getPopularMovies();
  }, []);
  return <EllipseCarousel popularMovies={popularMovies} />;
};
