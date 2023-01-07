import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global-styles.css';
import { LoginPage } from './templates/LoginPage/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
);
