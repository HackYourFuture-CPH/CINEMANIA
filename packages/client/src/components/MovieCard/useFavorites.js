import { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { handleAddFavorite, handleRemoveFavorite } from './handlerFavorite';

export const useFavorites = (movies, initialFavorites = []) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const userId = 1; // placeholder userId

  useEffect(() => {
    const abortController = new AbortController();

    const getFavoriteMovies = async () => {
      try {
        const response = await fetch(`${apiURL()}/favorites/${userId}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        return error;
      }
    };
    getFavoriteMovies();
    return () => {
      abortController.abort();
    };
  }, []); // [movies]

  const toggleFavorite = (item) => {
    const foundMovie = favorites.find((movie) => movie.id === item.id);

    if (foundMovie) {
      handleRemoveFavorite(item.id, item, favorites, setFavorites, userId);
    } else {
      handleAddFavorite(item.id, item, favorites, setFavorites, userId);
    }
  };

  return [favorites, toggleFavorite];
};
