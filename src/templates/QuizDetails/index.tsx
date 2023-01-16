import './styles.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Difficulty } from '../../components/Difficulty';
import { quizzesState } from '../../contexts/QuizContext';
import { BackButton } from '../../components/BackButton';
import { getQuizQuestions } from '../../utils/getQuizQuestions';

export const QuizDetails = () => {
  const quiz = quizzesState.currentQuiz;
  quizzesState.answered = false;
  quizzesState.correctAnswers = 0;
  const navigate = useNavigate();

  getQuizQuestions(quiz.id).then((r) => {
    quizzesState.questions = r.data;
  });

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <>
      <BackButton to='/home' />
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
        <Button onClick={startQuiz} text='Fazer Tentativa' />
      </div>
    </>
  );
};
