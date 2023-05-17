import React from 'react';
import { MovieOverview } from '../../components/MovieOverview/MovieOverview';

export const FavoritesPage = () => {
  return <MovieOverview isFavoritePage={true} />;
};
