import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { Layout } from './containers/Layout/Layout';
import { MovieDetails } from './containers/MovieDetails/MovieDetails';
import { MovieListPage } from './containers/MovieListPage/MovieListPage';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';

import { AuthPage } from './containers/Auth/AuthPage';

// MUI THEME
import { ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import { Favorites } from './containers/FavoritePage/Favorites';

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
        path: '/auth',
        element: <AuthPage />,
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
        path: '/favorites',
        element: <Favorites />,
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
