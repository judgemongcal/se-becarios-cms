import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export const CreateArticleContext = createContext();

export function useCreateArticleContext() {
  return useContext(CreateArticleContext);
}

export function CreateArticleProvider({ children }) {
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
  const [articleImgFile, setArticleImgFile] = useState();
  const [
    isCreateArticleLoading,
    setIsCreateArticleLoading,
  ] = useState(false);
  const [isCreateFailed, setIsCreateFailed] =
    useState(false);
  const [numOfChars, setNumOfChars] = useState(0);

  function resetAllFields() {
    setArticleBody('   ');
    setArticleImageFileName('');
    setArticleImageSrc('');
    setArticleImgFile('');
    setArticleTitle('');
    setIsPreview(false);
    setIsSubmitBtnPressed(false);
    setIsSubmitConfirmed(false);
  }

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
    articleImgFile,
    setArticleImgFile,
    resetAllFields,
    isCreateArticleLoading,
    setIsCreateArticleLoading,
    isCreateFailed,
    setIsCreateFailed,
    numOfChars,
    setNumOfChars,
  };

  return (
    <CreateArticleContext.Provider value={contextValue}>
      {children}
    </CreateArticleContext.Provider>
  );
}
