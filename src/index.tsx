import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuizDetails } from './templates/QuizDetails';
import { UserDataContextProvider } from './contexts/UserDataContext';
import './styles/global-styles.css';
import { Home } from './templates/Home';
import { LoginPage } from './templates/LoginPage/index';
import { Recover } from './templates/Recover';
import { RegisterPage } from './templates/RegisterPage';
import { QuizPage } from './templates/QuizPage';
import { Results } from './templates/Results';
import { History } from './templates/History';
import QuizProvider from './contexts/QuizContext/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <UserDataContextProvider>
    <QuizProvider>
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
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  </UserDataContextProvider>,
);
