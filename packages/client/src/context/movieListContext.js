import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { apiURL } from '../apiURL';

const MovieListContext = createContext();

export const MovieListProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [pageNumber, setPageNumber] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // let url = `${apiURL()}/movies?sortBy=${sortBy}`;
        let url = `${apiURL()}/movies?pageNumber=${pageNumber}&pageSize=${10}&sortBy=${sortBy}`;
        if (selectedCategoryId) {
          url += `&categoryId=${selectedCategoryId}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        if (!data.movies.length) {
          setWasLastList(true);
          return;
        }
        setMovies(data.movies);
        setIsLoading(false);
        setPrevPage(pageNumber);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    if (!wasLastList && prevPage !== pageNumber) {
      fetchMovies();
    }
  }, [sortBy, selectedCategoryId, pageNumber, wasLastList, prevPage]);

  const contextValue = useMemo(
    () => ({
      movies,
      isLoading,
      error,
      sortBy,
      setSortBy,
      selectedCategoryId,
      setSelectedCategoryId,
      pageNumber,
      setPageNumber,
    }),
    [
      movies,
      isLoading,
      error,
      sortBy,
      setSortBy,
      selectedCategoryId,
      setSelectedCategoryId,
      pageNumber,
      setPageNumber,
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
