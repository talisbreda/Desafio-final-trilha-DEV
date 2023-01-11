import './styles.css';
import { useNavigate } from 'react-router-dom';
import back from '../../assets/images/back.svg';
import { Button } from '../../components/Button';
import { Difficulty } from '../../components/Difficulty';
import { initialState } from '../../contexts/QuizContext';

export const QuizDetails = () => {
  const quiz = initialState.currentQuiz;
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
        <h1 className='display2'>{quiz.title}</h1>
        <div className='quiz-image-container'>
          <img className='quiz-image' src={quiz.banner_image} alt='card' />
          <Difficulty difficulty={quiz.difficulty} />
        </div>
        <div className='quiz-details about-quiz'>
          <h2 className='heading2'>Sobre o quiz</h2>
          <p className='p-medium'>{quiz.description}</p>
        </div>
        <div className='quiz-details questions-amount'>
          <h2 className='heading2'>Quantidade de perguntas</h2>
          <p className='p-medium'>{quiz.questions_count}</p>
        </div>
        <Button onClick={handleClick} text='Fazer Tentativa' />
      </div>
    </>
  );
};
