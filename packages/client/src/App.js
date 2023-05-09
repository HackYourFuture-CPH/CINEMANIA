import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';

import { Navbar } from './components/Navbar/Navbar.component';

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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
