import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuizDetails } from './templates/QuizDetails';
import { UserDataContext } from './contexts/UserDataContext';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import { LoginPage } from './templates/LoginPage/index';
import { Recover } from './templates/Recover';
import { RegisterPage } from './templates/RegisterPage';
import { QuizPage } from './templates/QuizPage';
import { Results } from './templates/Results';

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
        <Route path='/recover' element={<Recover />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details' element={<QuizDetails />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  </UserDataContext>,
);
