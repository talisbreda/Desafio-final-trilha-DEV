import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import {
  initialState,
  QuizContextProvider,
  useQuizContext,
} from '../../contexts/QuizContext';
import { Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const Home = () => {
  const isMounted = useRef(true);
  const { quizzes, setQuizzes } = useQuizContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMounted.current) {
      setQuizzes();
    }

    return () => {
      isMounted.current = false;
    };
  });

  const handleQuizClick = (quiz: Quiz) => {
    initialState.currentQuiz = quiz;
    navigate('/quiz');
  };

  return (
    <QuizContextProvider>
      <div className='wrapper home-wrapper'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='cards-container'>
          {quizzes.map((quiz: Quiz) => (
            <Card
              key={quiz.id}
              onClick={() => handleQuizClick(quiz)}
              data={quiz}
            />
          ))}
        </div>
      </div>
    </QuizContextProvider>
  );
};
