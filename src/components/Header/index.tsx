import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField } from '../InputField';
import './styles.css';

const ThemeMenu = () => (
  <div className='theme-menu hide'>
    <div className='theme-option btn-medium'>#HTML</div>
    <div className='theme-option btn-medium'>#UX</div>
    <div className='theme-option btn-medium'>#SWIFT</div>
    <div className='theme-option btn-medium'>#UI</div>
  </div>
);

export const Header = () => {
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const handleThemeDropdown = () => setShowThemeMenu((r) => !r);

  return (
    <div className='wrapper header-wrapper'>
      <div className='name-container'>
        <p className='p-large'>Olá,</p>
        <h1 className='display2'>Juana Antonieta</h1>
      </div>
      <div className='header-options'>
        <Link to='/home' className='p-medium'>
          Histórico
        </Link>
        <button
          onClick={handleThemeDropdown}
          type='button'
          className='p-medium theme-button'
        >
          Temas
          {showThemeMenu ? <ThemeMenu /> : null}
        </button>
        <InputField placeholder='Pesquisar quiz' type='search' />
      </div>
    </div>
  );
};
