import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { apiURL } from '../../apiURL';
import { CategoryButton } from './CategoryButton';
import { Loader } from '../Loader/Loader';

export const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiURL()}/categories`);
        const data = await response.json();
        setCategoriesList(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box
      sx={{
        width: '60%',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          marginBottom: '3rem',
        },
      }}
    >
      {categoriesList.map((category) => (
        <CategoryButton
          label={category.name}
          categoryId={category.id}
          key={category.id}
        />
      ))}
    </Box>
  );
};
