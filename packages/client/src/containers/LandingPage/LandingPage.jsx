import React /* , { useEffect, useState } */ from 'react';
import { FeaturedMovie } from '../../components/FeaturedMovie/FeaturedMovie';
import { LatestRatingMovies } from '../../components/LatestRatingMovies/LatestRatingMovies';
import { MostPopular } from '../CarouselWrapper/MostPopular';
import { NewArrivalsCarousel } from '../../components/NewArrivalsCarousel/NewArrivalsCarousel';
import styled from '@emotion/styled';

export const LandingPage = () => {
  return (
    <Section>
      <FeaturedMovie />
      <NewArrivalsCarousel />
      <MostPopular />
      <LatestRatingMovies />
    </Section>
  );
};

const Section = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
