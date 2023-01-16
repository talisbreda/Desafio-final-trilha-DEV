import { useRef, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { quizzesState } from '../../contexts/QuizContext';
import './styles.css';
import { QuestionOption } from '../../components/QuestionOption';
import { Button } from '../../components/Button';

export const QuizPage = () => {
  const questionIndex = useRef(0);
  const { questions } = quizzesState;
  const [answered, setAnswered] = useState(quizzesState.answered);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions.data[questionIndex.current],
  );
  const correctAnswer = currentQuestion.correct_answer_index;
  let counter = 0;

  const setQuestionAsAnswered = () => {
    setAnswered(true);
    quizzesState.answered = true;
  };

  const goToNextQuestion = () => {
    questionIndex.current += 1;
    quizzesState.answered = false;
    setCurrentQuestion(questions.data[questionIndex.current]);
  };

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
              onClick={setQuestionAsAnswered}
            />
          );
        })}
        {answered && <Button onClick={goToNextQuestion} text='Continuar' />}
      </div>
    </>
  );
};
