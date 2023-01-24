import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import { QuizContext } from '../../contexts/QuizContext/context';
import { QuizState } from '../../contexts/QuizContext/types';
import { Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const History = () => {
  const { quizzes, setCurrentQuiz } = useContext(QuizContext) as QuizState;
  const navigate = useNavigate();

  const handleQuizClick = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    navigate('/details');
  };

  return (
    <>
      <BackButton to='/home' />
      <div className='wrapper home-wrapper'>
        <div className='header-container'>
          <div className='history-header'>
            <h1 className='display2'>Seu histórico</h1>
          </div>
        </div>
        <div className='home-body'>
          <div className='cards-container'>
            {quizzes.map((quiz: Quiz) => {
              if (quiz.answered_date !== null) {
                return (
                  <Card
                    key={quiz.id}
                    data={quiz}
                    onClick={() => handleQuizClick(quiz)}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
