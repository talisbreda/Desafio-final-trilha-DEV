import axios from 'axios';

export const getQuizzes = async () => {
  const { data } = await axios.get(
    'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/quizzes',
  );
  console.log(data);
};
