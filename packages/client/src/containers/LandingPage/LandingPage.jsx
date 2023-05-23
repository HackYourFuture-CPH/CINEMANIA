import React /* , { useEffect, useState } */ from 'react';
/* import { apiURL } from '../../apiURL'; */ // Not Used
import { FeaturedMovie } from '../../components/FeaturedMovie/FeaturedMovie';
import { LatestRatingMovies } from '../../components/LatestRatingMovies/LatestRatingMovies';
import { MostPopular } from '../CarouselWrapper/MostPopular';
import { NewArrivalsCarousel } from '../../components/NewArrivalsCarousel/NewArrivalsCarousel';

export const LandingPage = () => {
  return (
    <div>
      <FeaturedMovie />
      <NewArrivalsCarousel />
      <MostPopular />
      <LatestRatingMovies />
    </div>
  );
};
