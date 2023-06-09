import { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { handleAddFavorite, handleRemoveFavorite } from './handlerFavorite';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

export const useFavorites = (initialFavorites = []) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const { userId, toggleLoginModal } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    const getFavoriteMovies = async () => {
      if (userId) {
        try {
          const response = await fetch(`${apiURL()}/favorites/${userId}`, {
            signal: abortController.signal,
          });
          const data = await response.json();
          setFavorites(data);
        } catch (error) {
          return error.name === 'this is an aborted error';
        }
      }
    };

    getFavoriteMovies();

    return () => {
      abortController.abort();
    };
  }, [navigate, userId]);

  const toggleFavorite = (item, isFavorites, handleSnackbarOpen) => {
    if (isFavorites) {
      handleRemoveFavorite(item.id, item, favorites, setFavorites, userId);
      handleSnackbarOpen(item.title, 'removed from favorites', 'remove');
    } else if (!userId) {
      toggleLoginModal();
    } else if (!isFavorites) {
      handleAddFavorite(item.id, item, favorites, setFavorites, userId);
      handleSnackbarOpen(item.title, 'added to favorites', 'success');
    }
  };

  return [favorites, toggleFavorite];
};
