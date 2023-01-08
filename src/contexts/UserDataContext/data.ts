type AuthSetters = {
  name: (name: string) => void;
  email: (email: string) => void;
  password: (password: string) => void;
};

export type UserData = {
  name: string;
  email: string;
  password: string;
  setData: AuthSetters;
};

export const data: UserData = {
  name: '',
  email: '',
  password: '',
  setData: {
    name: (name) => {
      data.name = name;
    },
    email: (email) => {
      data.email = email;
    },
    password: (password) => {
      data.password = password;
    },
  },
};
