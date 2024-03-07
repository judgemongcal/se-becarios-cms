import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

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
  const [isSettingsLoading, setIsSettingsLoading] =
    useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [isEditSuccessful, setIsEditSuccessful] =
    useState(false);
  const [
    isSettingsRequestFailed,
    setIsSettingsRequestFailed,
  ] = useState(false);
  const [
    isSettingsDownloadSuccess,
    setIsSettingsDownloadSuccess,
  ] = useState(false);

  useEffect(() => {
    let timer;
    if (isEditSuccessful) {
      timer = setTimeout(() => {
        setIsEditSuccessful(false);
      }, 2900);
    }
    return () => clearTimeout(timer);
  }, [isEditSuccessful, setIsEditSuccessful]);

  useEffect(() => {
    let timer;
    if (isSettingsRequestFailed) {
      timer = setTimeout(() => {
        setIsSettingsRequestFailed(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isSettingsRequestFailed, setIsSettingsRequestFailed]);

  useEffect(() => {
    let timer;
    if (isSettingsDownloadSuccess) {
      timer = setTimeout(() => {
        setIsSettingsDownloadSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [
    isSettingsDownloadSuccess,
    setIsSettingsDownloadSuccess,
  ]);

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
    isSettingsLoading,
    setIsSettingsLoading,
    isFailed,
    setIsFailed,
    isEditSuccessful,
    setIsEditSuccessful,
    isSettingsRequestFailed,
    setIsSettingsRequestFailed,
    isSettingsDownloadSuccess,
    setIsSettingsDownloadSuccess,
  };

  useEffect(() => {
    if (isAddAdminSuccessful) {
      const timer = setTimeout(
        () =>
          setIsAddAdminSuccessful(!isAddAdminSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isAddAdminSuccessful, setIsAddAdminSuccessful]);

  useEffect(() => {
    if (isRemoveSuccessful) {
      const timer = setTimeout(
        () => setIsRemoveSuccessful(!isRemoveSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isRemoveSuccessful, setIsRemoveSuccessful]);

  useEffect(() => {
    if (isAssignSuccessful) {
      const timer = setTimeout(
        () => setIsAssignSuccessful(!isAssignSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isAssignSuccessful, setIsAssignSuccessful]);

  useEffect(() => {
    if (isFailed) {
      const timer = setTimeout(
        () => setIsFailed(!isFailed),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isFailed, setIsFailed]);

  useEffect(() => {
    if (isEditSuccessful) {
      const timer = setTimeout(
        () => setIsEditSuccessful(!isEditSuccessful),
        3000,
      );

      return () => clearTimeout(timer);
    }
  }, [isEditSuccessful, setIsEditSuccessful]);

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
}
