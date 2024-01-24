import { createContext, useContext } from 'react';

export const SettingsContext = createContext();

export function useSettingsContext() {
  return useContext(SettingsContext);
}
