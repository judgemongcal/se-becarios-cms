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
  const [isPendingItemClicked, setIsPendingItemClicked] =
    useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentBody, setCurrentBody] = useState('');
  const [currentAuthor, setCurrentAuthor] = useState('');
  const [currentImage, setCurrentImage] = useState('');

  // Sorting and Searching State
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Event handlers
  const handleSortAlphaUp = () => {
    console.log('Sort Alpha Up Clicked');
    setSortOrder('alpha-asc');
  };

  const handleSortAlphaDown = () => {
    console.log('Sort Alpha Down Clicked');
    setSortOrder('alpha-desc');
  };

  const handleSortDateAsc = () => {
    console.log('Sort Date Asc Clicked');
    setSortOrder('date-asc');
  };

  const handleSortDateDesc = () => {
    console.log('Sort Date Desc Clicked');
    setSortOrder('date-desc');
  };

  const contextValue = {
    currentTitle,
    setCurrentTitle,
    currentBody,
    setCurrentBody,
    currentAuthor,
    setCurrentAuthor,
    currentImage,
    setCurrentImage,
    isPendingItemClicked,
    setIsPendingItemClicked,
    isPostedSettingsClicked,
    setIsPostedSettingsClicked,
    targetId,
    setTargetId,
    sortOrder,
    setSortOrder,
    searchQuery,
    setSearchQuery,
    handleSortAlphaUp,
    handleSortAlphaDown,
    handleSortDateAsc,
    handleSortDateDesc,
  };

  return (
    <ManageContentContext.Provider value={contextValue}>
      {children}
    </ManageContentContext.Provider>
  );
}
