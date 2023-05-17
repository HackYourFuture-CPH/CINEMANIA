import React from 'react';
import { Container } from '@mui/material';

export function MovieDetailsLayout({ children }) {
  const LayoutContainerStyle = {
    marginTop: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  };

  return (
    <Container style={LayoutContainerStyle} maxWidth="lg">
      {children}
    </Container>
  );
}
