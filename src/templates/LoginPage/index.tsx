import React from 'react';
import { Link } from 'react-router-dom';
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
        <h1 className='display1'>Entrar</h1>
        <InputField placeholder='E-mail' />
        <InputField placeholder='Password' type='password' />
        <Link className='btn-medium' to='/'>
          Esqueceu sua senha?
        </Link>
        <Button text='Entrar' />
        <Link className='btn-medium' to='/register'>
          Criar uma conta
        </Link>
      </div>
    </div>
  );
};
