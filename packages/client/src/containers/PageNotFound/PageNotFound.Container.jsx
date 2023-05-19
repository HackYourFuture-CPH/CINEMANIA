import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const PageNotFound = () => {
  return (
    <Section className="page-not-found-container">
      <Typography variant="h2" color="white">
        Page Not Found 😥
      </Typography>
    </Section>
  );
};

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
