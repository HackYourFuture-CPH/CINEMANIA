import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { apiURL } from '../apiURL';

const MovieListContext = createContext();

export const MovieListProvider = ({ isFavoritePage, children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `${apiURL()}/movies?sortBy=${sortBy}&isFavoritePage=${isFavoritePage}&userId=${1}`;
        if (selectedCategoryId) {
          url += `&categoryId=${selectedCategoryId}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.movies);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [sortBy, selectedCategoryId, isFavoritePage]);

  const contextValue = useMemo(
    () => ({
      movies,
      isLoading,
      error,
      sortBy,
      setSortBy,
      selectedCategoryId,
      setSelectedCategoryId,
    }),
    [
      movies,
      isLoading,
      error,
      sortBy,
      setSortBy,
      selectedCategoryId,
      setSelectedCategoryId,
    ],
  );

  return (
    <MovieListContext.Provider value={contextValue}>
      {children}
    </MovieListContext.Provider>
  );
};

export const useMovieList = () => {
  const movieContext = useContext(MovieListContext);
  if (!movieContext) {
    throw new Error('useMovieList must be used within a MovieListProvider');
  }
  return movieContext;
};
