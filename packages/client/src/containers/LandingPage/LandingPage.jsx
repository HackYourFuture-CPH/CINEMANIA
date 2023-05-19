import React /* , { useEffect, useState } */ from 'react';
/* import { apiURL } from '../../apiURL'; */ // Not Used
import { FeaturedMovie } from '../../components/FeaturedMovie/FeaturedMovie';
import { LatestRatingMovies } from '../../components/LatestRatingMovies/LatestRatingMovies';
import { MostPoppular } from '../CarouselWrapper/MostPopular';
import { NewArrivals } from '../../components/NewArrivals/NewArrivals';

export const LandingPage = () => {
  return (
    <div>
      <FeaturedMovie />
      <NewArrivals />
      <MostPoppular />
      <LatestRatingMovies />
    </div>
  );
};
