import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { EllipseCarousel } from '../../components/EllipseCarousel/EllipseCarousel';

export const MostPopular = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(`${apiURL()}/views/most-popular`);
        const data = await response.json();
        setPopularMovies(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getPopularMovies();
  }, []);
  return <EllipseCarousel popularMovies={popularMovies} />;
};
