export type AuthSetters = {
  name: (value: string) => void;
  email: (value: string) => void;
  password: (value: string) => void;
};

export type UserData = {
  name: string;
  email: string;
  password: string;
  setData: AuthSetters;
};
