import React /* , { useEffect, useState } */ from 'react';
/* import { apiURL } from '../../apiURL'; */ // Not Used
import { FeaturedMovie } from '../../components/FeaturedMovie/FeaturedMovie';
import { LatestRatingMovies } from '../../components/LatestRatingMovies/LatestRatingMovies';
import { EllipseCarousel } from '../../components/EllipseCarousel/EllipseCarousel';

export const LandingPage = () => {
  return (
    <div>
      <FeaturedMovie />
      <EllipseCarousel />
      <LatestRatingMovies />
    </div>
  );
};
