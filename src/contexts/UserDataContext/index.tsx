import { createContext, useState } from 'react';
import { AuthSetters, UserData } from './types';

export const UserDataContext = createContext<UserData | null>(null);

export const UserDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const setData: AuthSetters = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const resetData = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <UserDataContext.Provider
      value={{ name, email, password, setData, resetData }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
