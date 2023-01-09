import { Link } from 'react-router-dom';
import { InputField } from '../InputField';
import './styles.css';

export const Header = () => {
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
        <p className='p-medium'>Temas</p>
        <InputField placeholder='Pesquisar quiz' type='search' />
      </div>
    </div>
  );
};
