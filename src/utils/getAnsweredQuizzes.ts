import axios from 'axios';

export const getAnsweredQuizzes = () => {
  return axios.get(
    'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes?is_answered=true',
  );
};
