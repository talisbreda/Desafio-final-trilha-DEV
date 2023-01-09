import { useEffect, useRef } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { getQuizzes, Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const Home = () => {
  const isMounted = useRef(true);
  const quizzes = useRef([]);

  useEffect(() => {
    getQuizzes().then((data) => {
      if (isMounted.current) {
        quizzes.current = data;
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div className='wrapper home-wrapper'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='cards-container'>
        {quizzes.current.map((quiz: Quiz) => (
          <Card key={quiz.id} data={quiz} />
        ))}
      </div>
    </div>
  );
};
