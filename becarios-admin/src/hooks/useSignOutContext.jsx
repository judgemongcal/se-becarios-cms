import { createContext, useContext, useState } from 'react';

export const SignOutContext = createContext();

export function useSignOutContext() {
  return useContext(SignOutContext);
}

export function SignOutProvider({ children }) {
  const [isSignOutClicked, setIsSignOutClicked] =
    useState(false);

  const contextValue = {
    isSignOutClicked,
    setIsSignOutClicked,
  };

  return (
    <SignOutContext.Provider value={contextValue}>
      {children}
    </SignOutContext.Provider>
  );
}
