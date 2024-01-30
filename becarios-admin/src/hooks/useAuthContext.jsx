import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../server/firebase';

const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);

  function signIn(email, password) {
    return signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
  }

  const contextValue = { user, signIn };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
