import './styles.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Difficulty } from '../../components/Difficulty';
import { QuizState } from '../../contexts/QuizContext/types';
import { BackButton } from '../../components/BackButton';
import { getQuizQuestions } from '../../utils/getQuizQuestions';
import { QuizContext } from '../../contexts/QuizContext/context';

export const QuizDetails = () => {
  const { currentQuiz, setAnswered, setNumberOfCorrectAnswers, setQuestions } =
    useContext(QuizContext) as QuizState;
  setAnswered(false);
  setNumberOfCorrectAnswers(0);
  const navigate = useNavigate();

  getQuizQuestions(currentQuiz.id).then((r) => {
    setQuestions(r.data);
  });

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <>
      <BackButton to='/home' />
      <div className='wrapper details-wrapper'>
        <h1 className='display2'>{currentQuiz.title}</h1>
        <div className='quiz-image-container'>
          <img
            className='quiz-image'
            src={currentQuiz.banner_image}
            alt='card'
          />
          <Difficulty difficulty={currentQuiz.difficulty} />
        </div>
        <div className='quiz-details about-quiz'>
          <h2 className='heading2'>Sobre o quiz</h2>
          <p className='p-medium'>{currentQuiz.description}</p>
        </div>
        <div className='quiz-details questions-amount'>
          <h2 className='heading2'>Quantidade de perguntas</h2>
          <p className='p-medium'>{currentQuiz.questions_count}</p>
        </div>
        <Button onClick={startQuiz} text='Fazer Tentativa' />
      </div>
    </>
  );
};
