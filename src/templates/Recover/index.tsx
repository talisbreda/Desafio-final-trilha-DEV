import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { InvalidInputsMessage } from '../../components/InvalidInputsMessage';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';
import {
  handleInvalidInputs,
  InvalidInputsData,
} from '../../utils/inputChecker';
import './styles.css';

export const Recover = () => {
  const navigate = useNavigate();
  const { email } = useContext(UserDataContext) as UserData;

  const invalidInfoObject: InvalidInputsData = {
    amount: 0,
    exists: true,
    string: '',
  };

  const [invalidInputsData, setInvalidInputsData] = useState(invalidInfoObject);

  const handleClick = () => {
    const inputsData = handleInvalidInputs({ email });
    setInvalidInputsData(inputsData);
    if (!inputsData.exists) {
      navigate('/login');
    }
  };

  return (
    <div className='wrapper recover-wrapper'>
      <h1 className='display1'>Recuperar senha</h1>
      <InputField placeholder='Digite seu endereço de e-mail' type='email' />
      <InvalidInputsMessage
        amountOfInvalidInputs={invalidInputsData.amount}
        invalidFieldsString={invalidInputsData.string}
        invalidInputsExist={invalidInputsData.exists}
      />
      <Button onClick={handleClick} text='Enviar e-mail' />
    </div>
  );
};
