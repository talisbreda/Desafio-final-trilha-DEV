import { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import { getQuizzes } from '../../utils/getQuizzes';
import { reducer } from './reducer';
import { buildActions } from './build-actions';

export const initialState = {
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
  quizzes: [],
  setQuizzes: () => {
    getQuizzes().then((r) => {
      initialState.quizzes = r;
    });
  },
};

export const QuizContext = createContext(initialState);

export const QuizContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <QuizContext.Provider value={[state, actions.current]}>
      {children}
    </QuizContext.Provider>
  );
};

QuizContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useQuizContext = () => {
  const context = useContext(QuizContext);

  return context;
};
