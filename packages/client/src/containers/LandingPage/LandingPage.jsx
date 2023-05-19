import React /* , { useEffect, useState } */ from 'react';
/* import { apiURL } from '../../apiURL'; */ // Not Used
import { FeaturedMovie } from '../../components/FeaturedMovie/FeaturedMovie';
import { LatestRatingMovies } from '../../components/LatestRatingMovies/LatestRatingMovies';
import { MostPopular } from '../CarouselWrapper/MostPopular';

export const LandingPage = () => {
  return (
    <div>
      <FeaturedMovie />
      <MostPopular />
      <LatestRatingMovies />
    </div>
  );
};
