import { createContext, useState } from 'react';
import { Questions } from '../../utils/getQuizQuestions';
import { Quiz } from '../../utils/getQuizzes';
import { QuizState } from './types';

export const QuizContext = createContext<QuizState | null>(null);

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [answered, setAnswered] = useState<boolean>(false);
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] =
    useState<number>(0);
  const [currentQuiz, setCurrentQuiz] = useState({
    id: '',
    title: '',
    search: '',
    short_description: '',
    description: '',
    date: '',
    banner_image: '',
    questions_count: 0,
    difficulty: '',
    is_answered: false,
    answered_date: '',
    correct_answers_count: 0,
  });
  const [questions, setQuestions] = useState<Questions>({
    id: '',
    data: [
      {
        id: 'string',
        correct_answer_index: 0,
        question_text: 'string',
        banner_image: 'string',
        answers: ['string'],
      },
    ],
  });
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState<Quiz[]>([]);
  const [originalQuizzes, setOriginalQuizzes] = useState<Quiz[]>([]);

  return (
    <QuizContext.Provider
      value={{
        answered,
        setAnswered,
        numberOfCorrectAnswers,
        setNumberOfCorrectAnswers,
        currentQuiz,
        setCurrentQuiz,
        questions,
        setQuestions,
        quizzes,
        setQuizzes,
        filteredQuizzes,
        setFilteredQuizzes,
        originalQuizzes,
        setOriginalQuizzes,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
