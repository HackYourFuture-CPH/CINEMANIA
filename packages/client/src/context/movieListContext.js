import React, {
  createContext,
  useCallback,
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
  const [isClickedSame, setIsClickedSame] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `${apiURL()}/movies?sortBy=${sortBy}&isFavoritePage=${isFavoritePage}&userId=${1}&pageNumber=${currentPage}&pageSize=${6}`;
        if (selectedCategoryId) {
          url += `&categoryId=${selectedCategoryId}`;
        }
        if (searchText) {
          url += `&title=${searchText}`;
        }
        if (isClickedSame) {
          url += `&isClickedSame=${isClickedSame}`;
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
    searchText,
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
    setCurrentPage(1);
    setMovies([]);
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
