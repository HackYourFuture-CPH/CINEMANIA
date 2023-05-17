import React from 'react';
import { CategoryButton } from './CategoryButton';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMoviesAndCategoriesContext } from '../../context/FetchCategoriesAndMovies';
import { SearchBar } from '../SearchBar/SearchBar';
import { CustomSelect } from '../Select/CustomSelect';

export const CategoriesAndSearchBarAndSortBy = () => {
  const { state, dispatch } = useMoviesAndCategoriesContext();
  const theme = useTheme();
  const handleOnClick = (catId) => {
    dispatch({
      type: 'categoryId',
      payload: state.categoryId === catId ? null : catId,
    });
  };
  const handleSearchTextChange = (e) => {
    dispatch({
      type: 'changeSearchText',
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSortByOptionChange = (e) => {
    dispatch({
      type: 'changeSortBy',
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  if (state.categoryLoading) {
    return <div>Loading...</div>;
  }

  if (state.categoryFetchError) {
    return <div>Error: {state.categoryFetchError.message}</div>;
  }

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: '4rem',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'flex-end',
        },
      }}
    >
      {state.categories && (
        <Box
          sx={{
            width: '60%',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              marginBottom: '3rem',
            },
          }}
        >
          {state.categories.map((category) => (
            <CategoryButton
              label={category.name}
              categoryId={category.id}
              selectedCategoryId={state.categoryId}
              key={category.id}
              handleOnClick={() => handleOnClick(category.id)}
            />
          ))}
        </Box>
      )}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'column',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            alignItems: 'flex-start',
            marginBottom: '3rem',
          },
        }}
      >
        <SearchBar onChanged={handleSearchTextChange} name="searchText" />
        <CustomSelect
          onChange={handleSortByOptionChange}
          sortBy={state.sortBy}
        />
      </Box>
    </Box>
  );
};
