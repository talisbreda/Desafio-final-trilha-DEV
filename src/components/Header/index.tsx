/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchField } from '../SearchField';
import './styles.css';
import { data } from '../../contexts/UserDataContext/data';

const ThemeMenu = ({
  handleSearch,
}: {
  handleSearch: (theme?: string | null) => void;
}) => {
  const themes = ['HTML', 'UX', 'SWIFT', 'UI'];

  return (
    <div className='theme-menu hide'>
      {themes.map((theme) => {
        return (
          <div
            style={{ cursor: 'pointer' }}
            className='theme-option btn-medium'
            onClick={(e) => {
              handleSearch(e.currentTarget.textContent);
              e.currentTarget.style.backgroundColor = 'blue';
            }}
            role='button'
            tabIndex={0}
            key={theme}
          >
            {theme}
          </div>
        );
      })}
    </div>
  );
};

export const Header = ({
  handleSearch,
}: {
  handleSearch: (theme?: string | null) => void;
}) => {
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const handleThemeDropdown = () => setShowThemeMenu((r) => !r);
  const collapseMenu = showThemeMenu ? handleThemeDropdown : undefined;
  const expandMenu = showThemeMenu ? undefined : handleThemeDropdown;
  const { name } = data;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className='wrapper header-wrapper' onClick={collapseMenu}>
      <div className='name-container'>
        <p className='p-large'>Olá,</p>
        <h1 className='display2'>{name}</h1>
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
          {showThemeMenu ? <ThemeMenu handleSearch={handleSearch} /> : null}
        </button>
        <SearchField placeholder='Pesquisar quiz' handleSearch={handleSearch} />
      </div>
    </div>
  );
};
