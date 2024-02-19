import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

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
  const [currentSubmittedBy, setCurrentSubmittedBy] =
    useState('');
  const [currentTitleEdit, setcurrentTitleEdit] =
    useState('');
  const [currentBodyEdit, setcurrentBodyEdit] =
    useState('');
  const [currentImageEdit, setcurrentImageEdit] =
    useState('');
  const [showOriginal, setShowOriginal] = useState(false);
  const [currentDoc, setCurrentDoc] = useState([]);

  // Sorting and Searching State
  const [sortOrder, setSortOrder] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentReqType, setCurrentReqType] = useState('');
  const [isApproveBtnClicked, setIsApproveBtnClicked] =
    useState(false);
  const [isRejectBtnClicked, setIsRejectBtnClicked] =
    useState(false);
  const [isPostApproveSuccess, setIsPostApproveSuccess] =
    useState(false);
  const [isEditApproveSuccess, setIsEditApproveSuccess] =
    useState(false);
  const [
    isArchiveApproveSuccess,
    setIsArchiveApproveSuccess,
  ] = useState(false);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPostApproveSuccess(false);
      setIsEditApproveSuccess(false);
      setIsArchiveApproveSuccess(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [
    isPostApproveSuccess,
    isEditApproveSuccess,
    isArchiveApproveSuccess,
  ]);

  const contextValue = {
    currentTitle,
    setCurrentTitle,
    currentBody,
    setCurrentBody,
    currentAuthor,
    setCurrentAuthor,
    currentImage,
    setCurrentImage,
    currentImageEdit,
    setcurrentImageEdit,
    currentSubmittedBy,
    setCurrentSubmittedBy,
    currentTitleEdit,
    setcurrentTitleEdit,
    currentBodyEdit,
    setcurrentBodyEdit,
    showOriginal,
    setShowOriginal,
    currentDoc,
    setCurrentDoc,
    currentReqType,
    setCurrentReqType,
    isPendingItemClicked,
    setIsPendingItemClicked,
    isPostedSettingsClicked,
    setIsPostedSettingsClicked,
    isApproveBtnClicked,
    setIsApproveBtnClicked,
    isRejectBtnClicked,
    setIsRejectBtnClicked,
    targetId,
    isPostApproveSuccess,
    setIsPostApproveSuccess,
    isEditApproveSuccess,
    setIsEditApproveSuccess,
    isArchiveApproveSuccess,
    setIsArchiveApproveSuccess,
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
