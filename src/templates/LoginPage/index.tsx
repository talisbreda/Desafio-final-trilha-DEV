import React from 'react';
import './styles.css';
import icon from '../../assets/images/quiz-icon.svg';
import { InputField } from '../../components/InputField';

export const LoginPage = () => {
  return (
    <div className='wrapper'>
      <div className='image-container'>
        <img src={icon} alt='ícone do quiz' />
      </div>
      <div className='input-container'>
        <h1>Entrar</h1>
        <InputField placeholder='E-mail' />
        <InputField placeholder='Password' />
        <p>Esqueceu sua senha?</p>
        <p>Criar uma conta</p>
      </div>
    </div>
  );
};
