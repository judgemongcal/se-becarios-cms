import { createContext, useContext, useState } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  const contextValue = {};

  return (
    <AuthContext.Provider valu={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
