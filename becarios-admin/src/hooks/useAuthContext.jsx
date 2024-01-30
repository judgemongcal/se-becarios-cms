import { createContext, useContext } from 'react';

const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const contextValue = {};

  return (
    <AuthContext.Provider valu={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
