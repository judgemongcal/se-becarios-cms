import { createContext, useContext, useState } from 'react';

export const CreatePostContext = createContext();

export function useCreatePostContext() {
  return useContext(CreatePostContext);
}

export function CreatePostProvider({ children }) {
  const [articleTitle, setArticleTitle] = useState('');

  const [articleImageFileName, setArticleImageFileName] =
    useState('');
  const [articleImageSrc, setArticleImageSrc] =
    useState('');
  const [articleBody, setArticleBody] = useState('');
  const [isSubmitBtnPressed, setIsSubmitBtnPressed] =
    useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [isSubmitConfirmed, setIsSubmitConfirmed] =
    useState(false);

  const contextValue = {
    articleTitle,
    setArticleTitle,
    articleImageFileName,
    setArticleImageFileName,
    articleImageSrc,
    setArticleImageSrc,
    articleBody,
    setArticleBody,
    isPreview,
    setIsPreview,
    isSubmitBtnPressed,
    setIsSubmitBtnPressed,
    isSubmitConfirmed,
    setIsSubmitConfirmed,
  };

  return (
    <CreatePostContext.Provider value={contextValue}>
      {children}
    </CreatePostContext.Provider>
  );
}
