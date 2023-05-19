import React from 'react';
import { useMovieList } from '../../context/movieListContext';
import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';

const StyledButton = styled(MuiButton)`
  height: 3rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 10px;
  color: ${(props) => (props.isActive ? '#003E2F' : '#00FFC2')};
  border: 2px solid #00ffc2;
  border-radius: 50px;
  padding: 14px 18px;
  background-color: ${(props) => (props.isActive ? '#00FFC2' : '#003E2F')};
  text-transform: none;
  margin: 10px 6px;
  &:hover {
    background-color: ${(props) => (props.isActive ? '#00FFC2' : '#FFF')};
  }
`;

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
    <StyledButton isActive={isActive} type="button" onClick={handleClick}>
      {label}
    </StyledButton>
  );
};
