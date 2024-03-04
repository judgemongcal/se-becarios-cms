import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export const ArchiveContext = createContext();

export function useArchiveContext() {
  return useContext(ArchiveContext);
}

export function ArchiveProvider({ children }) {
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] =
    useState(false);
  const [isDeleteConfirmed, setIsDeleteConfirmed] =
    useState(false);
  const [isDeleteSuccessful, setIsDeleteSuccessful] =
    useState(false);
  const [isDeleteFailed, setIsDeleteFailed] =
    useState(false);
  const [currentDocId, setCurrentDocId] = useState('');
  const [isPutBackBtnClicked, setIsPutBackBtnClicked] =
    useState(false);
  const [isPutBackSuccessful, setIsPutBackSuccessful] =
    useState(false);
  const [isPutBackFailed, setIsPutBackFailed] =
    useState(false);
  const [isArchiveEdit, setIsArchiveEdit] = useState(false);
  const [isArchiveLoading, setIsArchiveLoading] =
    useState(false);

  useEffect(() => {
    let timer;
    if (isDeleteFailed) {
      timer = setTimeout(() => {
        setIsDeleteFailed(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isDeleteFailed, setIsDeleteFailed]);

  useEffect(() => {
    let timer;
    if (isPutBackFailed) {
      timer = setTimeout(() => {
        setIsPutBackFailed(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isPutBackFailed, setIsPutBackFailed]);

  const contextValue = {
    isDeleteBtnClicked,
    setIsDeleteBtnClicked,
    isDeleteConfirmed,
    setIsDeleteConfirmed,
    isDeleteSuccessful,
    setIsDeleteSuccessful,
    isDeleteFailed,
    setIsDeleteFailed,
    currentDocId,
    setCurrentDocId,
    isPutBackBtnClicked,
    setIsPutBackBtnClicked,
    isPutBackSuccessful,
    setIsPutBackSuccessful,
    isPutBackFailed,
    setIsPutBackFailed,
    isArchiveEdit,
    setIsArchiveEdit,
    isArchiveLoading,
    setIsArchiveLoading,
  };

  return (
    <ArchiveContext.Provider value={contextValue}>
      {children}
    </ArchiveContext.Provider>
  );
}
