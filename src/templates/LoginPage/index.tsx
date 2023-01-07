import React from 'react';
import './styles.css';
import icon from '../../assets/images/quiz-icon.svg';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';

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
        <a href='/'>Esqueceu sua senha?</a>
        <Button text='Entrar' />
        <a href='/'>Criar uma conta</a>
      </div>
    </div>
  );
};
