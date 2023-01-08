import axios from 'axios';

export const login = async (userEmail: string, userPassword: string) => {
  const {
    data: { email },
  } = await axios.get(
    'https://my-json-server.typicode.com/higorpo/trilha-dev-json-server/profile',
  );
  // if (email === userEmail) {
  //   console.log('eba');
  // } else {
  //   console.log('f');
  // }
};
