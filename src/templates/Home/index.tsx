import { useEffect, useRef } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import {
  QuizContextProvider,
  useQuizContext,
} from '../../contexts/QuizContext';
import { Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const Home = () => {
  const isMounted = useRef(true);
  const { quizzes, setQuizzes } = useQuizContext();

  useEffect(() => {
    if (isMounted.current) {
      setQuizzes();
    }

    return () => {
      isMounted.current = false;
    };
  });

  return (
    <QuizContextProvider>
      <div className='wrapper home-wrapper'>
        <div className='header-container'>
          <Header />
        </div>
        <div className='cards-container'>
          {quizzes.map((quiz: Quiz) => (
            <Card key={quiz.id} data={quiz} />
          ))}
        </div>
      </div>
    </QuizContextProvider>
  );
};
