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
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
