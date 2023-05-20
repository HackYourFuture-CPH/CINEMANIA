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
  const [pageNumber, setPageNumber] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const [query, setQuery] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `${apiURL()}/movies?pageNumber=${pageNumber}&pageSize=${30}&sortBy=${sortBy}&isFavoritePage=${isFavoritePage}&userId=${1}`;
        setQuery(true);
        if (selectedCategoryId) {
          setPageNumber(1);
          url += `&categoryId=${selectedCategoryId}`;
          setQuery(true);
        }
        if (debouncedSearch) {
          setPageNumber(1);
          url += `&title=${debouncedSearch}`;
          setQuery(true);
        }
        if (isClickedSame) {
          url += `&isClickedSame=${isClickedSame}`;
          setPageNumber(1);
          setQuery(true);
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
    if (prevPage !== pageNumber || query) {
      fetchMovies();
    }
  }, [
    sortBy,
    debouncedSearch,
    selectedCategoryId,
    isFavoritePage,
    isClickedSame,
    pageNumber,
    wasLastList,
    prevPage,
    query,
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
      searchText,
      setSearchText,
      isClickedSame,
      setIsClickedSame,
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
