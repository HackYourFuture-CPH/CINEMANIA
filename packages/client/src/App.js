import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import ViewPage from './containers/ViewPage/ViewPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="view" element={<ViewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
