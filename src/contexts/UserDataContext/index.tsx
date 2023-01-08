import { createContext } from 'react';
import { data, UserData } from './data';

export const globalContext = createContext<UserData>(data);

export const UserDataContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
};
