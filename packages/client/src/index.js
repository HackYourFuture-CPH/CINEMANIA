import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './App.css';
import { reportWebVitals } from './reportWebVitals';
import './reset.css';

assertEnvironment();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function assertEnvironment() {
  if (process.env.NODE_ENV !== 'production') {
    if (process.env.REACT_APP_API_HOST === undefined) {
      throw new Error('Missing environment variable: REACT_APP_API_HOST');
    }

    if (process.env.REACT_APP_API_PORT === undefined) {
      throw new Error('Missing environment variable: REACT_APP_API_PORT');
    }
  }

  if (process.env.REACT_APP_API_PATH === undefined) {
    throw new Error('Missing environment variable: REACT_APP_API_PATH');
  }
}
