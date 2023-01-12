import axios from 'axios';

export type Questions = {
  id: string;
  data: Array<{
    id: string;
    correct_answer_index: number;
    question_text: string;
    banner_image: string;
    answers: Array<string>;
  }>;
};

export const getQuizQuestions = (id: string) => {
  return axios.get(
    `https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/questions/${id}`,
  );
};
