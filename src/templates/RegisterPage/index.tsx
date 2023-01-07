import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import './styles.css';

export const RegisterPage = () => {
  return (
    <div className='wrapper register-wrapper'>
      <h1 className='display1'>Cadastre-se</h1>
      <p className='p-large register-p'>Crie uma conta gratuitamente</p>
      <InputField placeholder='Nome' />
      <InputField placeholder='E-mail' />
      <InputField placeholder='Senha' type='password' />
      <Button text='Cadastre-se' />
      <Link className='back-to-login btn-medium' to='/login'>
        Entrar
      </Link>
    </div>
  );
};
