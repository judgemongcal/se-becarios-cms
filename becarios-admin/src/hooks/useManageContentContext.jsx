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
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigateLeft = () => {
    console.log('Prev. Page Clicked');
    // Add logic to handle navigating to the previous page
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNavigateRight = () => {
    console.log('Next Page Clicked');
    // Add logic to handle navigating to the next page
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Sorting and Searching State
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Event handlers
  const handleSortAlphaUp = () => {
    console.log('Sort Alpha Up Clicked');
    setSortOrder('alpha-asc');
    setSearchQuery('');
  };

  const handleSortAlphaDown = () => {
    console.log('Sort Alpha Down Clicked');
    setSortOrder('alpha-desc');
    setSearchQuery('');
  };

  const handleSortDateAsc = () => {
    console.log('Sort Date Asc Clicked');
    setSortOrder('date-asc');
    setSearchQuery('');
  };

  const handleSortDateDesc = () => {
    console.log('Sort Date Desc Clicked');
    setSortOrder('date-desc');
    setSearchQuery('');
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
    handleNavigateLeft,
    handleNavigateRight,
    setCurrentPage,
    currentPage
  };

  return (
    <ManageContentContext.Provider value={contextValue}>
      {children}
    </ManageContentContext.Provider>
  );
}
