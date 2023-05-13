import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './containers/Layout/Layout';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { MovieDetails } from './containers/MovieDetails/MovieDetails';

// MUI THEME
import { ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';

// Routes
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '/movies/:id',
        element: <MovieDetails />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
