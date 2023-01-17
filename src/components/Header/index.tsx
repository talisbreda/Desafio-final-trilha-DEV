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
  const collapseMenu = showThemeMenu ? handleThemeDropdown : undefined;
  const expandMenu = showThemeMenu ? undefined : handleThemeDropdown;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className='wrapper header-wrapper' onClick={collapseMenu}>
      <div className='name-container'>
        <p className='p-large'>Olá,</p>
        <h1 className='display2'>Juana Antonieta</h1>
      </div>
      <div className='header-options'>
        <Link to='/history' className='p-medium'>
          Histórico
        </Link>
        <button
          onClick={expandMenu}
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
