import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import MovieView from './components/MovieView/MovieView.component';
import MovieListPage from './components/MovieListPage/MovieListPage';
import { MovieListProvider } from './context/movieListContext';

function App() {
  return (
    <div className="app">
      <MovieListProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="movies/:id" element={<MovieView />} />
            <Route path="/movieList" element={<MovieListPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </MovieListProvider>
    </div>
  );
}

export default App;
