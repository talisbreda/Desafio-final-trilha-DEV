import React, { useContext, useState } from 'react';
import './styles.css';
import show from '../../assets/images/show-password.svg';
import hide from '../../assets/images/hide-password.svg';
import { UserDataContext } from '../../contexts/UserDataContext';
import { UserData } from '../../contexts/UserDataContext/types';

export const InputField = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type: 'name' | 'email' | 'password';
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const visibilityIcon = passwordVisible ? hide : show;

  const setPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    const passwordInput = document.querySelector(
      '.password-input',
    ) as HTMLInputElement;
    if (passwordInput.type.toLowerCase() === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  const { setData } = useContext(UserDataContext) as UserData;

  return (
    <div className='container'>
      <input
        className={`${type.toLowerCase()}-input input-text input-field`}
        placeholder={placeholder}
        type={type}
        onChange={(s) => setData[type](s.target.value)}
      />
      {type === 'password' && (
        <button
          onClick={setPasswordVisibility}
          type='button'
          className='button-input-icon'
        >
          <img
            className='input-icon'
            src={visibilityIcon}
            alt='Show password'
          />
        </button>
      )}
    </div>
  );
};
