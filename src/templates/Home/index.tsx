import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { quizzesState } from '../../contexts/QuizContext';
import { getQuizzes, Quiz } from '../../utils/getQuizzes';
import './styles.css';

export const Home = () => {
  const isMounted = useRef(true);
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState(quizzesState.quizzes);

  useEffect(() => {
    if (isMounted.current && quizzes.length === 0) {
      getQuizzes().then((r) => {
        setQuizzes(r.data);
        quizzesState.quizzes = r.data;
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [quizzes]);

  const handleQuizClick = (quiz: Quiz) => {
    quizzesState.currentQuiz = quiz;
    navigate('/quiz');
  };

  const counter = useRef(0);
  counter.current += 1;

  return (
    <div className='wrapper home-wrapper'>
      <div className='header-container'>
        <Header />
        {counter.current}
      </div>
      <div className='cards-container'>
        {quizzes.map((quiz: Quiz) => {
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
  );
};
