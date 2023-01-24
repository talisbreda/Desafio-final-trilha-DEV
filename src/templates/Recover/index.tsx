import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';
import { getInvalidInputs } from '../../utils/inputChecker';
import './styles.css';

export const Recover = () => {
  const navigate = useNavigate();
  const { email } = useContext(UserDataContext) as UserData;
  const [invalidFieldsString, setInvalidFieldsString] = useState('');
  const [invalidInputsExist, setInvalidInputsExist] = useState(false);

  const handleClick = async () => {
    const invalidInputsList = getInvalidInputs({ email });
    if (invalidInputsList.length === 0) {
      setInvalidInputsExist(false);
      navigate('/login');
    } else {
      setInvalidFieldsString(invalidInputsList.join(', '));
      setInvalidInputsExist(true);
    }
  };

  return (
    <div className='wrapper recover-wrapper'>
      <h1 className='display1'>Recuperar senha</h1>
      <InputField placeholder='Digite seu endereço de e-mail' type='email' />
      {invalidInputsExist && (
        <p
          className='p-medium'
          style={{ color: 'var(--color-error)' }}
        >{`O campo ${invalidFieldsString} está inválido`}</p>
      )}
      <Button onClick={handleClick} text='Enviar e-mail' />
    </div>
  );
};
