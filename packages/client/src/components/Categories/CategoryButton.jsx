import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import styled from '@emotion/styled';

export const CategoryButton = ({ label, categoryId }) => {
  const { selectedCategoryId, setSelectedCategoryId } = useMovieList();

  const handleClick = () => {
    if (isActive) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
  };

  const isActive = selectedCategoryId === categoryId;

  return (
    <Button type="button" onClick={handleClick}>
      {label}
    </Button>
  );
};

const Button = styled.button`
height: '3rem',
fontWeight: 500,
fontSize: '16px',
lineHeight: '10px',
color: isActive ? '#003E2F' : '#00FFC2',
border: '2px solid #00FFC2',
borderRadius: '50px',
padding: '14px 18px',
backgroundColor: isActive ? '#00FFC2' : '#003E2F',
textTransform: 'none',
margin: '10px 6px',
'&:hover': {
  backgroundColor: isActive ? '#00FFC2' : '#FFF',
`;
