import { useRef, useEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { quizzesState } from '../../contexts/QuizContext';
import './styles.css';
import { QuestionOption } from '../../components/QuestionOption';
import { getQuizQuestions } from '../../utils/getQuizQuestions';

export const QuizPage = () => {
  const quiz = quizzesState.currentQuiz;
  const isMounted = useRef(true);
  const [questions, setQuestions] = useState(quizzesState.questions);
  const questionIndex = useRef(0);
  let counter = 0;
  const answered = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      getQuizQuestions(quiz.id).then((r) => {
        setQuestions(r.data);
      });
    }
  }, [quiz.id]);

  const questionAnswered = () => {
    answered.current = true;
  };

  const currentQuestion = questions.data[questionIndex.current];
  const correctAnswer = currentQuestion.correct_answer_index;

  return (
    <>
      <BackButton to='/details' />
      <div className='wrapper quiz-wrapper'>
        <div className='quiz-title'>
          <p className='p-large'>{`${counter + 1} de ${
            questions.data.length
          }`}</p>
          <h1 className='heading1'>{currentQuestion.question_text}</h1>
        </div>
        <div className='question-image-container'>
          <img
            className='question-image'
            src={currentQuestion.banner_image}
            alt='question'
          />
        </div>
        {currentQuestion.answers.map((answer) => {
          counter += 1;
          return (
            <QuestionOption
              key={`answer ${counter}`}
              index={counter}
              text={answer}
              correct={counter === correctAnswer}
              onClick={questionAnswered}
            />
          );
        })}
      </div>
    </>
  );
};
