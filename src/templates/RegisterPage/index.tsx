import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';
import { getInvalidInputs } from '../../utils/inputChecker';
import { login } from '../../utils/login';
import './styles.css';

export const RegisterPage = () => {
  const { name, email, password, setData } = useContext(
    UserDataContext,
  ) as UserData;
  const navigate = useNavigate();
  const [invalidFieldsString, setInvalidFieldsString] = useState('');
  const [invalidInputsExist, setInvalidInputsExist] = useState(false);

  const handleClick = async () => {
    const invalidInputsList = getInvalidInputs({ name, email, password });
    if (invalidInputsList.length === 0) {
      await login().then(() => {
        setData.name(name);
      });
      setInvalidInputsExist(false);
      navigate('/home');
    } else {
      setInvalidFieldsString(invalidInputsList.join(', '));
      setInvalidInputsExist(true);
    }
  };

  return (
    <div className='wrapper register-wrapper'>
      <h1 className='display1'>Cadastre-se</h1>
      <p className='p-large register-p'>Crie uma conta gratuitamente</p>
      <InputField placeholder='Nome' type='name' />
      <InputField placeholder='E-mail' type='email' />
      <InputField placeholder='Senha' type='password' />
      {invalidInputsExist && (
        <p
          className='p-medium'
          style={{ color: 'var(--color-error)' }}
        >{`Os campos ${invalidFieldsString} estão inválidos`}</p>
      )}
      <Button onClick={handleClick} text='Cadastre-se' />
      <Link className='back-to-login btn-medium' to='/login'>
        Entrar
      </Link>
    </div>
  );
};
