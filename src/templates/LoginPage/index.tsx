import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import icon from '../../assets/images/quiz-icon.svg';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { login } from '../../utils/login';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setData } = useContext(UserDataContext) as UserData;

  const handleClick = async () => {
    await login().then((r) => {
      setData.name(r.data.name);
    });
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
        <Link className='btn-medium' to='/recover'>
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
