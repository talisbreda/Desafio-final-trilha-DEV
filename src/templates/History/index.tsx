import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import { quizzesState } from '../../contexts/QuizContext';
import { Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const History = () => {
  const [quizzes, setQuizzes] = useState(quizzesState.quizzes);
  const navigate = useNavigate();

  const handleQuizClick = (quiz: Quiz) => {
    quizzesState.currentQuiz = quiz;
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
    </>
  );
};
