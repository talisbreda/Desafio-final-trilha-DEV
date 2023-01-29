import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import icon from '../../assets/images/quiz-icon.svg';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { login } from '../../utils/login';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';
import {
  handleInvalidInputs,
  InvalidInputsData,
} from '../../utils/inputChecker';
import { InvalidInputsMessage } from '../../components/InvalidInputsMessage';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setData } = useContext(UserDataContext) as UserData;
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const invalidInfoObject: InvalidInputsData = {
    amount: 0,
    exists: true,
    string: '',
  };

  const [invalidInputsData, setInvalidInputsData] = useState(invalidInfoObject);

  const handleClick = async () => {
    const inputsData = handleInvalidInputs({
      email: email.current?.value,
      password: password.current?.value,
    });
    setInvalidInputsData(inputsData);
    if (!inputsData.exists) {
      await login().then((r) => {
        setData.name(r.data.name);
      });
      navigate('/home');
    }
  };

  return (
    <div className='wrapper login-wrapper'>
      <div className='image-container'>
        <img src={icon} alt='ícone do quiz' />
      </div>
      <div className='input-container'>
        <h1 className='display1'>Entrar</h1>
        <InputField placeholder='E-mail' type='email' innerRef={email} />
        <InputField
          placeholder='Password'
          type='password'
          innerRef={password}
        />
        <InvalidInputsMessage
          amountOfInvalidInputs={invalidInputsData.amount}
          invalidFieldsString={invalidInputsData.string}
          invalidInputsExist={invalidInputsData.exists}
        />
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
