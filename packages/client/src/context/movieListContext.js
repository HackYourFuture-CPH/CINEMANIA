import React, {
  createContext,
  useCallback,
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
  const [sortBy, setSortBy] = useState('');
  const [isClickedSame, setIsClickedSame] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const debouncedSearchText = useDebounce(searchText, 1000);

  useEffect(() => {
    if (debouncedSearchText === searchText) {
      setCurrentPage(1);
      setMovies([]);
    }
  }, [debouncedSearchText, searchText]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `${apiURL()}/movies?isFavoritePage=${isFavoritePage}&userId=${1}&pageNumber=${currentPage}&pageSize=${6}`;
        if (selectedCategoryId) {
          url += `&categoryId=${selectedCategoryId}`;
        }
        if (debouncedSearchText) {
          url += `&title=${debouncedSearchText}`;
        }
        if (isClickedSame) {
          url += `&isClickedSame=${isClickedSame}`;
        }
        if (sortBy !== '') {
          url += `&sortBy=${sortBy}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setMovies((prevMovies) => [...prevMovies, ...data.movies]);
        setHasNextPage(data.pagination.totalPages > currentPage);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [
    sortBy,
    debouncedSearchText,
    selectedCategoryId,
    isFavoritePage,
    isClickedSame,
    currentPage,
  ]);

  const onSortMovies = useCallback((value) => {
    setCurrentPage(1);
    setMovies([]);
    setSortBy(value);
  }, []);

  const onChangeDirection = useCallback(
    (value) => {
      setCurrentPage(1);
      setMovies([]);
      sortBy === value
        ? setIsClickedSame((prevState) => !prevState)
        : setIsClickedSame(false);
    },
    [sortBy],
  );

  const onLoadMore = useCallback(() => {
    setCurrentPage((prevPage) => prevPage + 1);
  }, [setCurrentPage]);

  const onFilterByCategory = useCallback((categoryId) => {
    setCurrentPage(1);
    setMovies([]);
    setSelectedCategoryId(categoryId);
  }, []);

  const onSearch = useCallback((value) => {
    setSearchText(value);
  }, []);

  const contextValue = useMemo(
    () => ({
      movies,
      isLoading,
      error,
      sortBy,
      onSortMovies,
      onChangeDirection,
      selectedCategoryId,
      onFilterByCategory,
      searchText,
      onSearch,
      onLoadMore,
      hasNextPage,
    }),
    [
      movies,
      isLoading,
      error,
      sortBy,
      onSortMovies,
      onChangeDirection,
      selectedCategoryId,
      onFilterByCategory,
      searchText,
      onSearch,
      onLoadMore,
      hasNextPage,
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
