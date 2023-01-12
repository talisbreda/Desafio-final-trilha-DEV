import { useNavigate } from 'react-router-dom';
import back from '../../assets/images/back.svg';
import './styles.css';

export const BackButton = ({ to }: { to: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className='back-button' type='button'>
      <img src={back} alt='back' />
    </button>
  );
};
