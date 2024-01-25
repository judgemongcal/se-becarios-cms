import { createContext, useContext, useState } from 'react';

export const SettingsContext = createContext();

export function useSettingsContext() {
  return useContext(SettingsContext);
}

export function SettingsProvider({ children }) {
  const [isSAGearClicked, setIsSAGearClicked] =
    useState(false);
  const [isAGearClicked, setIsAGearClicked] =
    useState(false);

  const contextValue = {
    isSAGearClicked,
    setIsSAGearClicked,
    isAGearClicked,
    setIsAGearClicked,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}
