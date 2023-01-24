import { Questions } from '../../utils/getQuizQuestions';
import { Quiz } from '../../utils/getQuizzes';

export type QuizState = {
  answered: boolean;
  setAnswered: (value: boolean) => void;
  numberOfCorrectAnswers: number;
  setNumberOfCorrectAnswers: (value: number) => void;
  currentQuiz: Quiz;
  setCurrentQuiz: (value: Quiz) => void;
  questions: Questions;
  setQuestions: (value: Questions) => void;
  quizzes: Quiz[];
  setQuizzes: (value: Quiz[]) => void;
  filteredQuizzes: Quiz[];
  setFilteredQuizzes: (value: Quiz[]) => void;
  originalQuizzes: Quiz[];
  setOriginalQuizzes: (value: Quiz[]) => void;
};
