import React from 'react';
import { MovieOverview } from '../../components/MovieOverview/MovieOverview';

export const FavoritesListPage = () => {
  return <MovieOverview isFavouritePage={true} />;
};
