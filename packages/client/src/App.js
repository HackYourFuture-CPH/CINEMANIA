import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { MovieDetails } from './containers/MovieDetails/MovieDetails';
import { Navbar } from './components/Navbar/Navbar';
// MUI THEME
import { ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import ViewPage from './containers/ViewPage/ViewPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="view" element={<ViewPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
