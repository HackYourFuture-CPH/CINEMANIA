import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';

// MUI THEME
import { ThemeProvider } from '@mui/material';
import { theme } from './lib/theme';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
