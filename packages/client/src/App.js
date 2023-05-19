import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { Layout } from './containers/Layout/Layout';
import { MovieDetails } from './containers/MovieDetails/MovieDetails';
import { MovieListPage } from './containers/MovieListPage/MovieListPage';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';

import { AuthPage } from './containers/Auth/AuthPage';
import { UserProvider } from './context/UserContext';

// MUI THEME
import { ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import { FavoritesListPage } from './containers/FavoritesListPage/FavoritesListPage';

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
        path: '/favorites',
        element: <FavoritesListPage />,
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
    <UserProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </UserProvider>
  );
};
