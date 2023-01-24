import { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { QuizState } from '../../contexts/QuizContext/types';
import './styles.css';
import { QuestionOption } from '../../components/QuestionOption';
import { Button } from '../../components/Button';
import { QuizContext } from '../../contexts/QuizContext/context';

export const QuizPage = () => {
  const questionIndex = useRef(0);
  const navigate = useNavigate();

  const {
    questions,
    answered,
    setAnswered,
    numberOfCorrectAnswers,
    setNumberOfCorrectAnswers,
  } = useContext(QuizContext) as QuizState;
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.data[questionIndex.current],
  );
  const correctAnswerIndex = currentQuestion.correct_answer_index;
  let counter = 0;

  const isLastQuestion = questions.data.length === questionIndex.current + 1;

  const setQuestionAsAnswered = (isCorrect: boolean) => {
    setAnswered(true);
    const correctAnswers = isCorrect
      ? numberOfCorrectAnswers + 1
      : numberOfCorrectAnswers;
    setNumberOfCorrectAnswers(correctAnswers);
  };

  const resetOptionsStyle = () => {
    const questionOptions = document.querySelectorAll(
      '.option-container',
    ) as NodeListOf<HTMLDivElement>;
    questionOptions.forEach((option) => {
      const element = option;
      element.style.border = '1px solid var(--ink-gray)';
      element.style.background = 'transparent';
    });
  };

  const setNextQuestion = () => {
    resetOptionsStyle();
    questionIndex.current += 1;
    setAnswered(false);
    setCurrentQuestion(questions.data[questionIndex.current]);
  };

  const goToResultsPage = () => {
    navigate('/results');
  };

  const goToNextPage = () => {
    if (isLastQuestion) {
      goToResultsPage();
    } else {
      setNextQuestion();
    }
  };

  return (
    <>
      <BackButton to='/details' />
      <div className='wrapper quiz-wrapper'>
        <div className='quiz-title'>
          <p className='p-large'>{`${questionIndex.current + 1} de ${
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
          const isCorrect = counter === correctAnswerIndex;
          return (
            <QuestionOption
              key={`answer ${counter}`}
              index={counter}
              text={answer}
              correct={isCorrect}
              onClick={() => setQuestionAsAnswered(isCorrect)}
            />
          );
        })}
        {answered && <Button onClick={goToNextPage} text='Continuar' />}
      </div>
    </>
  );
};
