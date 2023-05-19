import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { apiURL } from '../apiURL';
import { useDebounce } from '../hooks/useDebounce';

const MovieListContext = createContext();

export const MovieListProvider = ({ isFavoritePage, children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [isClickedSame, setIsClickedSame] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const debouncedSearch = useDebounce(searchText, 1000);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `${apiURL()}/movies?sortBy=${sortBy}&isFavoritePage=${isFavoritePage}&userId=${1}`;
        if (selectedCategoryId) {
          url += `&categoryId=${selectedCategoryId}`;
        }
        if (debouncedSearch) {
          url += `&title=${debouncedSearch}`;
        }
        if (isClickedSame) {
          url += `&isClickedSame=${isClickedSame}`;
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
  }, [
    sortBy,
    debouncedSearch,
    selectedCategoryId,
    isFavoritePage,
    isClickedSame,
  ]);

  const contextValue = useMemo(
    () => ({
      movies,
      isLoading,
      error,
      sortBy,
      setSortBy,
      selectedCategoryId,
      setSelectedCategoryId,
      searchText,
      setSearchText,
      isClickedSame,
      setIsClickedSame,
    }),
    [
      movies,
      isLoading,
      error,
      sortBy,
      setSortBy,
      selectedCategoryId,
      setSelectedCategoryId,
      searchText,
      setSearchText,
      isClickedSame,
      setIsClickedSame,
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
