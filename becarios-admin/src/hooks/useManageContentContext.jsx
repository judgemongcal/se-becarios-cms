import { createContext, useContext, useState } from 'react';

export const ManageContentContext = createContext();

export function useManageContentContext() {
  return useContext(ManageContentContext);
}

export function ManageContentProvider({ children }) {
  const [
    isPostedSettingsClicked,
    setIsPostedSettingsClicked,
  ] = useState(false);

  const [targetId, setTargetId] = useState();

  const contextValue = {
    isPostedSettingsClicked,
    setIsPostedSettingsClicked,
    targetId,
    setTargetId,
  };

  return (
    <ManageContentContext.Provider value={contextValue}>
      {children}
    </ManageContentContext.Provider>
  );
}
