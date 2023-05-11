import React, { useState, useEffect } from 'react';
import CategoryButton from './CategoryButton';
import { apiURL } from '../../apiURL';
import { useMovieList } from '../../context/movieListContext';

const Catagories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const { categoryId } = useMovieList();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="category-button-div">
      {categoriesList.map((category) => (
        <CategoryButton
          label={category.name}
          categoryId={category.id}
          key={category.id}
        />
      ))}
      {categoryId && <div style={{ display: 'none' }}> {categoryId}</div>}
    </div>
  );
};

export default Catagories;
