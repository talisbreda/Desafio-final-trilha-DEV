import './styles.css';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/card-image.svg';
import back from '../../assets/images/back.svg';
import { Button } from '../Button';
import { Difficulty } from '../Difficulty';

export const QuizDetails = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <>
      <button onClick={handleClick} className='back-button' type='button'>
        <img src={back} alt='back' />
      </button>
      <div className='wrapper details-wrapper'>
        <h1 className='display2'>HTML</h1>
        <div className='quiz-image-container'>
          <img className='quiz-image' src={image} alt='card' />
          <Difficulty difficulty='easy' />
        </div>
        <div className='quiz-details about-quiz'>
          <h2 className='heading2'>Sobre o quiz</h2>
          <p className='p-medium'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            dignissimos officia mollitia quibusdam atque id magni qui at
            similique obcaecati, velit voluptas unde temporibus nam voluptatum
            eligendi sequi doloremque tempora.
          </p>
        </div>
        <div className='quiz-details questions-amount'>
          <h2 className='heading2'>Quantidade de perguntas</h2>
          <p className='p-medium'>10</p>
        </div>
        <Button onClick={handleClick} text='Fazer Tentativa' />
      </div>
    </>
  );
};
