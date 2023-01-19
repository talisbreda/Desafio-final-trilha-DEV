import { Questions } from '../../utils/getQuizQuestions';
import { Quiz } from '../../utils/getQuizzes';

type QuizState = {
  answered: boolean;
  numberOfCorrectAnswers: number;
  currentQuiz: Quiz;
  questions: Questions;
  quizzes: Array<Quiz>;
  filteredQuizzes: Array<Quiz>;
};

export const quizzesState: QuizState = {
  answered: false,
  numberOfCorrectAnswers: 0,
  currentQuiz: {
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
  },
  questions: {
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
  },
  quizzes: [],
  filteredQuizzes: [],
};
