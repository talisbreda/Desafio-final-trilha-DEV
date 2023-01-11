import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import './styles.css';

export const Recover = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className='wrapper recover-wrapper'>
      <h1 className='display1'>Recuperar senha</h1>
      <InputField placeholder='Digite seu endereço de e-mail' type='email' />
      <Button onClick={handleClick} text='Enviar e-mail' />
    </div>
  );
};
