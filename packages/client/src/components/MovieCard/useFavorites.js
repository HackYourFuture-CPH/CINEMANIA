import { useState } from 'react';

const useFavorites = (initialFavorites = []) => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const toggleFavorite = (item) => {
    if (favorites.includes(item)) {
      setFavorites(favorites.filter((fav) => fav !== item));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return [favorites, toggleFavorite];
};

export default useFavorites;
