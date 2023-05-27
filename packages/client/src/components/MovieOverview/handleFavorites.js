import { apiURL } from '../../apiURL';

export const handleAddFavorite = async (movieId, userId) => {
  const body = {
    movie_id: movieId,
    user_id: userId,
  };

  try {
    await fetch(`${apiURL()}/favorites/`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const handleRemoveFavorite = async (movieId, userId) => {
  try {
    await fetch(`${apiURL()}/favorites/${movieId}/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
