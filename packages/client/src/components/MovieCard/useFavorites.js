import { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { handleAddFavorite, handleRemoveFavorite } from './handlerFavorite';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

export const useFavorites = (initialFavorites = []) => {
  const [favorites, setFavorites] = useState(initialFavorites);
  const [userId, setUserId] = useState(null);
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserIdByUid = async () => {
      if (user && user.uid) {
        try {
          const response = await fetch(`${apiURL()}/users/${user.uid}`);
          const data = await response.json();
          setUserId(data[0].id);
        } catch (error) {
          return error.name === 'Something wrong in the operation';
        }
      }
    };

    getUserIdByUid();
  }, [user]);

  useEffect(() => {
    const abortController = new AbortController();

    const getFavoriteMovies = async () => {
      if (user && user.uid) {
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
  }, [user, navigate, userId]);

  const toggleFavorite = (item, isFavorites) => {
    if (isFavorites) {
      handleRemoveFavorite(item.id, item, favorites, setFavorites, userId);
    } else if (!user) {
      navigate('/auth');
    } else {
      handleAddFavorite(item.id, item, favorites, setFavorites, userId);
    }
  };

  return [favorites, toggleFavorite];
};
