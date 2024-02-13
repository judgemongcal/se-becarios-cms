import { createContext, useContext, useState } from 'react';

export const EditArticleContext = createContext();

export function useEditArticleContext() {
  return useContext(EditArticleContext);
}

export function CreateArticleProvider({ children }) {
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
  const [isSubmitBtnPressed, setIsSubmitBtnPressed] =
    useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitConfirmed, setIsSubmitConfirmed] =
    useState(false);
  const [EditArticleImgFile, setEditArticleImgFile] =
    useState();

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
    isSubmitBtnPressed,
    setIsSubmitBtnPressed,
    isSubmitConfirmed,
    setIsSubmitConfirmed,
    EditArticleImgFile,
    setEditArticleImgFile,
  };

  return (
    <EditArticleContext.Provider value={contextValue}>
      {children}
    </EditArticleContext.Provider>
  );
}
