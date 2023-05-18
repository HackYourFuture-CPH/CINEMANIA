import { apiURL } from '../../apiURL';

export const handleAddFavorite = async (
  movieId,
  item,
  favorites,
  setFavorites,
  userId,
) => {
  const body = {
    movie_id: movieId,
    user_id: userId,
  };

  try {
    const response = await fetch(`${apiURL()}/favorites/`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      setFavorites([...favorites, item]);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const handleRemoveFavorite = async (
  movieId,
  item,
  favorites,
  setFavorites,
  userId,
) => {
  try {
    await fetch(`${apiURL()}/favorites/${movieId}/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const updatedFavorites = favorites.filter((movie) => movie.id !== item.id);
    setFavorites(updatedFavorites);
  } catch (error) {
    throw new Error(error);
  }
};
