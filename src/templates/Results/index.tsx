import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { quizzesState } from '../../contexts/QuizContext';
import './styles.css';

export const Results = () => {
  const { numberOfCorrectAnswers, currentQuiz } = quizzesState;
  const navigate = useNavigate();
  if (
    numberOfCorrectAnswers > currentQuiz.correct_answers_count ||
    currentQuiz.correct_answers_count === null
  ) {
    currentQuiz.correct_answers_count = numberOfCorrectAnswers;
  }
  currentQuiz.answered_date = new Date().toISOString().slice(0, 10);

  const acedQuiz: boolean =
    numberOfCorrectAnswers === currentQuiz.questions_count;

  const heading = acedQuiz ? 'Você é um mestre' : 'Quase lá...';
  const text = acedQuiz
    ? 'Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!'
    : 'Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!';

  const goBackToDetails = () => {
    navigate('/details');
  };

  return (
    <>
      <BackButton to='/details' />
      <div className='wrapper results-wrapper'>
        <h1 className='heading1'>Resultados</h1>
        <div className='result-container'>
          <h1 className='display1'>{`${numberOfCorrectAnswers}/${currentQuiz.questions_count}`}</h1>
          <div className='result-text-container'>
            <h1 className='heading1'>{heading}</h1>
            <p className='p-large result-text'>{text}</p>
          </div>
        </div>
        <Button onClick={goBackToDetails} text='Finalizar' width='35.8rem' />
      </div>
    </>
  );
};
