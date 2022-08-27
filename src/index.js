import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import { TodolistProvider } from './components/pages/todolist/context/todolistContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodolistProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </TodolistProvider>
    </Provider>
  </React.StrictMode>
);
