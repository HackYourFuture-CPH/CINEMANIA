import React, { useState, useEffect } from 'react';
import CategoryButton from './button/CategoryButton';
import { apiURL } from '../apiURL';

const MovieListPage = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [catId, setCatId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${apiURL()}/categories`);
        const data = await response.json();
        setCategoriesList(data);
      } catch (error) {
        error(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-button-div">
      {categoriesList.map((category) => (
        <CategoryButton
          label={category.name}
          catId={category.id}
          setCatId={setCatId}
          key={category.id}
        />
      ))}
      {catId && <div style={{ display: 'none' }}> {catId}</div>}
    </div>
  );
};

export default MovieListPage;
