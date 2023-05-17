import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react';
import {
  ReducerForFetchMoviesAndCategories,
  initialState,
  handleCategoriesFetch,
  handleMovieFetch,
} from '../containers/MovieListPage/ReducerForFetchMoviesAndCategories';

const MoviesAndCategoriesContext = createContext();

export function MoviesAndCategoriesContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    ReducerForFetchMoviesAndCategories,
    initialState,
  );

  // fetch categories
  useEffect(() => {
    handleCategoriesFetch(state, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // fetch movies
  useEffect(() => {
    handleMovieFetch(state, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchText, state.sortBy, state.categoryId]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <MoviesAndCategoriesContext.Provider value={contextValue}>
      {children}
    </MoviesAndCategoriesContext.Provider>
  );
}

export function useMoviesAndCategoriesContext() {
  return useContext(MoviesAndCategoriesContext);
}
