import React from 'react';
import { Container } from '@mui/material';

export function MovieDetailsLayout({ children }) {
  const LayoutContainerStyle = {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 0,
    gap: '2rem',
    margin: '3rem 0',
  };

  return (
    <Container style={LayoutContainerStyle} maxWidth="xl">
      {children}
    </Container>
  );
}
