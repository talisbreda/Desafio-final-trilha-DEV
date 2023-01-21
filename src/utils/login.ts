import axios from 'axios';

export const login = () => {
  return axios.get(
    'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile',
  );
};
