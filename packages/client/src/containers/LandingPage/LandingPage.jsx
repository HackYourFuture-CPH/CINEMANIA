import React /* , { useEffect, useState } */ from 'react';
/* import { apiURL } from '../../apiURL'; */ // Not Used
import FeaturedMovie from '../../components/FeaturedMovie/FeaturedMovie';
import LatestRatingMovies from '../../components/LatestRatingMovies/LatestRatingMovies';

export const LandingPage = () => {
  /* const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`${apiURL()}/movies`);
      const examples = await response.json();
      setMovies(examples);
    }

    fetchMovies();
  }, []); */ // Not used

  return (
    <div>
      <FeaturedMovie />
      <LatestRatingMovies />
    </div>
  );
};
