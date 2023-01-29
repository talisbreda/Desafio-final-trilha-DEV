import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { InvalidInputsMessage } from '../../components/InvalidInputsMessage';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';
import {
  handleInvalidInputs,
  InvalidInputsData,
} from '../../utils/inputChecker';
import { login } from '../../utils/login';
import './styles.css';

export const RegisterPage = () => {
  const { name, email, password, setData } = useContext(
    UserDataContext,
  ) as UserData;
  const navigate = useNavigate();

  const invalidInfoObject: InvalidInputsData = {
    amount: 0,
    exists: true,
    string: '',
  };

  const [invalidInputsData, setInvalidInputsData] = useState(invalidInfoObject);

  const handleClick = async () => {
    const inputsData = handleInvalidInputs({ name, email, password });
    setInvalidInputsData(inputsData);
    if (!inputsData.exists) {
      await login().then((r) => {
        setData.name(r.data.name);
      });
      navigate('/home');
    }
  };

  return (
    <div className='wrapper register-wrapper'>
      <h1 className='display1'>Cadastre-se</h1>
      <p className='p-large register-p'>Crie uma conta gratuitamente</p>
      <InputField placeholder='Nome' type='name' />
      <InputField placeholder='E-mail' type='email' />
      <InputField placeholder='Senha' type='password' />
      <InvalidInputsMessage
        amountOfInvalidInputs={invalidInputsData.amount}
        invalidFieldsString={invalidInputsData.string}
        invalidInputsExist={invalidInputsData.exists}
      />
      <Button onClick={handleClick} text='Cadastre-se' />
      <Link className='back-to-login btn-medium' to='/login'>
        Entrar
      </Link>
    </div>
  );
};
