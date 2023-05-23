import React from 'react';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress sx={{ color: '#00FFC2' }} />
    </LoaderContainer>
  );
};
