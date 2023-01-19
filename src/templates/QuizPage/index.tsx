import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../../components/BackButton';
import { quizzesState } from '../../contexts/QuizContext';
import './styles.css';
import { QuestionOption } from '../../components/QuestionOption';
import { Button } from '../../components/Button';

export const QuizPage = () => {
  const questionIndex = useRef(0);
  const navigate = useNavigate();
  const { questions } = quizzesState;
  const [answered, setAnswered] = useState(quizzesState.answered);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.data[questionIndex.current],
  );
  const correctAnswerIndex = currentQuestion.correct_answer_index;
  let counter = 0;

  const isLastQuestion = questions.data.length === questionIndex.current + 1;

  const setQuestionAsAnswered = (isCorrect: boolean) => {
    setAnswered(true);
    quizzesState.answered = true;
    quizzesState.numberOfCorrectAnswers = isCorrect
      ? quizzesState.numberOfCorrectAnswers + 1
      : quizzesState.numberOfCorrectAnswers;
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
    quizzesState.answered = false;
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
