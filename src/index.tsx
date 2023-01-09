import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuizDetails } from './components/QuizDetails';
import { UserDataContext } from './contexts/UserDataContext';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import { LoginPage } from './templates/LoginPage/index';
import { RegisterPage } from './templates/RegisterPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <UserDataContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/quiz' element={<QuizDetails />} />
      </Routes>
    </BrowserRouter>
  </UserDataContext>,
);
