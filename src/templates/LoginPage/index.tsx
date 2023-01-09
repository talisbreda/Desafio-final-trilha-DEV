import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import icon from '../../assets/images/quiz-icon.svg';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { login } from '../../utils/login';
import { globalContext } from '../../contexts/UserDataContext';

export const LoginPage = () => {
  const { email, password } = useContext(globalContext);
  const navigate = useNavigate();

  const handleClick = async () => {
    await login(email, password);
    navigate('/home');
  };

  return (
    <div className='wrapper login-wrapper'>
      <div className='image-container'>
        <img src={icon} alt='ícone do quiz' />
      </div>
      <div className='input-container'>
        <h1 className='display1'>Entrar</h1>
        <InputField placeholder='E-mail' type='email' />
        <InputField placeholder='Password' type='password' />
        <Link className='btn-medium' to='/'>
          Esqueceu sua senha?
        </Link>
        <Button onClick={handleClick} text='Entrar' />
        <Link className='btn-medium' to='/register'>
          Criar uma conta
        </Link>
      </div>
    </div>
  );
};
