import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { RoundCarousel } from '../../components/RoundCarousel/RoundCarousel';
import { MovieDetailsLayout } from '../MovieDetailsLayout/MovieDetailsLayout';

const SimilarMovies = ({ categoryID }) => {
  const [carouselData, setCarouselData] = useState(null);
  useEffect(() => {
    (async () => {
      if (categoryID) {
        try {
          const response = await fetch(
            `${apiURL()}/movies/category/${categoryID}`,
          );
          if (response.ok) {
            const data = await response.json();
            if (data) {
              setCarouselData(data);
            }
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })();
  }, [categoryID]);
  return (
    <MovieDetailsLayout>
      <RoundCarousel carouselData={carouselData} />
    </MovieDetailsLayout>
  );
};
export { SimilarMovies };
