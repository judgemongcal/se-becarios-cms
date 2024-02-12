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
  const [isAddAdminBtnClicked, setIsAddAdminBtnClicked] =
    useState(false);
  const [
    isRemoveAdminBtnClicked,
    setIsRemoveAdminBtnClicked,
  ] = useState();
  const [isRemoveSuccessful, setIsRemoveSuccessful] =
    useState(false);
  const [isAddAdminClicked, setIsAddAdminClicked] =
    useState(false);
  const [isAddAdminSuccessful, setIsAddAdminSuccessful] =
    useState(false);
  const [isEditingAdmin, setIsEditingAdmin] =
    useState(false);
  const [isAssignBtnClicked, setIsAssignBtnClicked] =
    useState(false);
  const [isAssignSuccessful, setIsAssignSuccessful] =
    useState(false);
  const contextValue = {
    isSAGearClicked,
    setIsSAGearClicked,
    isAGearClicked,
    setIsAGearClicked,
    isAddAdminBtnClicked,
    setIsAddAdminBtnClicked,
    isRemoveAdminBtnClicked,
    setIsRemoveAdminBtnClicked,
    isRemoveSuccessful,
    setIsRemoveSuccessful,
    isAddAdminClicked,
    setIsAddAdminClicked,
    isAddAdminSuccessful,
    setIsAddAdminSuccessful,
    isEditingAdmin,
    setIsEditingAdmin,
    isAssignBtnClicked,
    setIsAssignBtnClicked,
    isAssignSuccessful,
    setIsAssignSuccessful,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}
