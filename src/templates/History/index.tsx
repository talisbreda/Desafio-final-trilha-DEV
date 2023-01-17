import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { Card } from '../../components/Card';
import { quizzesState } from '../../contexts/QuizContext';
import { getAnsweredQuizzes } from '../../utils/getAnsweredQuizzes';
import { Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const History = () => {
  const [answeredQuizzes, setAnsweredQuizzes] = useState(
    quizzesState.answeredQuizzes,
  );
  const navigate = useNavigate();

  useEffect(() => {
    getAnsweredQuizzes().then((r) => {
      setAnsweredQuizzes(r.data);
      quizzesState.answeredQuizzes = r.data;
    });
  });

  const handleQuizClick = (quiz: Quiz) => {
    quizzesState.currentQuiz = quiz;
    navigate('/details');
  };

  return (
    <>
      <BackButton to='/home' />
      <div className='wrapper history-wrapper'>
        <div className='history-header-container'>
          <div className='history-header'>
            <h1 className='display2'>Seu histórico</h1>
          </div>
        </div>
        <div className='cards-container'>
          {answeredQuizzes.map((quiz: Quiz) => {
            return (
              <Card
                key={quiz.id}
                data={quiz}
                onClick={() => handleQuizClick(quiz)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
