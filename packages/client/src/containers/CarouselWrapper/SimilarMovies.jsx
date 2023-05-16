import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import fallBackMovies from '../../assets/fallBackMovies.json';
import { RoundCarousel } from '../../components/RoundCarousel/RoundCarousel';

const SimilarMovies = ({ categoryID }) => {
  const [carouselData, setCarouselData] = useState(fallBackMovies);
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
  return <RoundCarousel carouselData={carouselData} />;
};
export { SimilarMovies };
