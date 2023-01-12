import axios from 'axios';

export type Quiz = {
  id: string;
  title: string;
  search: string;
  short_description: string;
  description: string;
  date: string;
  banner_image: string;
  questions_count: number;
  difficulty: string;
  is_answered: boolean;
  answered_date: string;
  correct_answers_count: number;
};

export const getQuizzes = async () => {
  return axios.get(
    'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes',
  );
};
