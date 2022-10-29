import React from 'react';

import { Provider } from 'react-redux'; // Import Provider which is a component that wraps the entire app from React-Redux

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/store'; // Import Redux Store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
