import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { auth } from '../server/firebase';
import { useSignOutContext } from './useSignOutContext';

const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   var timer = setInterval(() => {
  //     console.log(user);
  //   }, 3000);

  //   return function cleanup() {
  //     clearInterval(timer);
  //   };
  // }, []);

  //   This useEffect executes the necessary updates on the currentUser whenever there are changes on login
  //   this has no dependencies so it runs on mount
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
    // }
  }, []);

  function signIn(email, password) {
    return signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function logOut() {
    return signOut(auth);
  }

  const contextValue = {
    user,
    signIn,
    resetPassword,
    logOut,
  };

  console.log(contextValue);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
