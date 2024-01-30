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

  //   This useEffect executes the necessary updates on the currentUser whenever there are changes on login
  //   this has no dependencies so it runs on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
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

  function logOut() {
    return signOut(auth);
  }

  const contextValue = { user, signIn, logOut };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
