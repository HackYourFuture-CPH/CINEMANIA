import { apiURL } from '../../apiURL';

export const initialState = {
  movieLoading: false,
  categoryLoading: false,
  moviesData: {},
  categories: [],
  movieFetchError: '',
  categoryFetchError: '',
  searchText: '',
  categoryId: null,
  sortBy: 'rating',
};

export const handleMovieFetch = async (state, dispatchFunc) => {
  let URI = `${apiURL()}/movies?`;

  if (state.searchText) {
    URI = `${URI}title=${state.searchText}&`;
  }
  if (state.sortBy) {
    URI = `${URI}sortBy=${state.sortBy}&`;
  }
  if (state.categoryId) {
    URI = `${URI}categoryId=${state.categoryId}&`;
  }

  try {
    dispatchFunc({ type: 'fetchMovies' });
    const response = await fetch(URI);
    if (!response.ok) throw Error('Did not receive expected data!');
    const result = await response.json();
    dispatchFunc({ type: 'successMovies', payload: result });
  } catch (err) {
    dispatchFunc({ type: 'movieFetchError', payload: err.message });
  }
};

export const handleCategoriesFetch = async (state, dispatchFunc) => {
  try {
    dispatchFunc({ type: 'fetchCategories' });
    const response = await fetch(`${apiURL()}/categories`);
    if (!response.ok) throw Error('Did not receive expected data!');
    const result = await response.json();
    dispatchFunc({ type: 'successCategories', payload: result });
  } catch (err) {
    dispatchFunc({ type: 'categoryFetchError', payload: err.message });
  }
};

export const ReducerForFetchMoviesAndCategories = (state, action) => {
  switch (action.type) {
    case 'fetchMovies':
      return {
        ...state,
        movieLoading: true,
        movieFetchError: '',
      };
    case 'successMovies':
      return {
        ...state,
        movieLoading: false,
        moviesData: action.payload,
      };
    case 'successCategories':
      return {
        ...state,
        categoryLoading: false,
        categories: action.payload,
      };
    case 'movieFetchError':
      return {
        movieLoading: false,
        movieFetchError: action.payload,
        moviesData: {},
      };
    case 'categoryFetchError':
      return {
        categoryLoading: false,
        categoryFetchError: action.payload,
        categories: [],
      };
    case 'changeSearchText':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'changeSortBy':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case 'categoryId':
      return {
        ...state,
        categoryId: action.payload,
      };
    default:
      return state;
  }
};
