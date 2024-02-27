import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export const EditArticleContext = createContext();

export function useEditArticleContext() {
  return useContext(EditArticleContext);
}

export function EditArticleProvider({ children }) {
  const [EditArticleTitle, setEditArticleTitle] =
    useState('');

  const [
    EditArticleImageFileName,
    setEditArticleImageFileName,
  ] = useState('');
  const [EditArticleImageSrc, setEditArticleImageSrc] =
    useState('');
  const [EditArticleBody, setEditArticleBody] =
    useState('');
  const [isEditBtnPressed, setIsEditBtnPressed] =
    useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isEditConfirmed, setIsEditConfirmed] =
    useState(false);
  const [EditArticleImgFile, setEditArticleImgFile] =
    useState();
  const [isArchiveBtnPressed, setIsArchiveBtnPressed] =
    useState(false);
  const [isArchiveConfirmed, setIsArchiveConfirmed] =
    useState(false);
  const [isArchiveFailed, setIsArchiveFailed] =
    useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   let timer;
  //   if (isArchiveFailed) {
  //     timer = setTimeout(() => {
  //       setIsArchiveFailed(false);
  //     }, 3000);
  //   }
  //   return () => clearTimeout(timer);
  // }, [isArchiveFailed, setIsArchiveFailed]);

  const contextValue = {
    EditArticleTitle,
    setEditArticleTitle,
    EditArticleImageFileName,
    setEditArticleImageFileName,
    EditArticleImageSrc,
    setEditArticleImageSrc,
    EditArticleBody,
    setEditArticleBody,
    isPreview,
    setIsPreview,
    isEditBtnPressed,
    setIsEditBtnPressed,
    isEditConfirmed,
    setIsEditConfirmed,
    EditArticleImgFile,
    setEditArticleImgFile,
    isArchiveBtnPressed,
    setIsArchiveBtnPressed,
    isArchiveConfirmed,
    setIsArchiveConfirmed,
    isArchiveFailed,
    setIsArchiveFailed,
    isArchived,
    setIsArchived,
    isLoading,
    setIsLoading,
  };

  return (
    <EditArticleContext.Provider value={contextValue}>
      {children}
    </EditArticleContext.Provider>
  );
}
