import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { Layout } from './containers/Layout/Layout';
import { MovieDetails } from './containers/MovieDetails/MovieDetails';
import { MovieListPage } from './containers/MovieListPage/MovieListPage';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';

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
        path: '/movies',
        element: <MovieListPage />,
      },

      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
