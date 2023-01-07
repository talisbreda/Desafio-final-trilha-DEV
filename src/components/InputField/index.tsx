import React, { useState } from 'react';
import './styles.css';
import show from '../../assets/images/show-password.svg';
import hide from '../../assets/images/hide-password.svg';

export const InputField = ({ placeholder }: { placeholder: string }) => {
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

  return (
    <div className='container'>
      <input
        className={`${placeholder.toLowerCase()}-input`}
        placeholder={placeholder}
        type={placeholder.replace('-', '')}
      />
      {placeholder.toLowerCase() === 'password' && (
        <button
          onClick={setPasswordVisibility}
          type='button'
          className='button-show-hide'
        >
          <img className='show-hide' src={visibilityIcon} alt='Show password' />
        </button>
      )}
    </div>
  );
};
