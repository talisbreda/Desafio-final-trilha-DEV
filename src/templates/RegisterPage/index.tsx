import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { globalContext } from '../../contexts/UserDataContext';
import { login } from '../../utils/login';
import './styles.css';

export const RegisterPage = () => {
  const { email, password } = useContext(globalContext);

  const handleClick = async () => {
    await login(email, password);
  };

  return (
    <div className='wrapper register-wrapper'>
      <h1 className='display1'>Cadastre-se</h1>
      <p className='p-large register-p'>Crie uma conta gratuitamente</p>
      <InputField placeholder='Nome' type='name' />
      <InputField placeholder='E-mail' type='email' />
      <InputField placeholder='Senha' type='password' />
      <Button onClick={handleClick} text='Cadastre-se' />
      <Link className='back-to-login btn-medium' to='/login'>
        Entrar
      </Link>
    </div>
  );
};
