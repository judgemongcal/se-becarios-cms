import React, { useState, useEffect } from 'react';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import ContentFilters from '../components/manage-content/ContentFilters';
import SearchField from '../components/global/SearchField';
import ForApprovalList from '../components/manage-content/ForApprovalList';
import ContentList from '../components/manage-content/ContentList';
import PaginationLabel from '../components/global/PaginationLabel';
import { useSignOutContext } from '../hooks/useSignOutContext';
import {
  ApprovePostModal,
  ArchiveReqRejectSuccessModal,
  ArchiveReqSuccessModal,
  EditReqRejectSuccessModal,
  EditReqSuccessModal,
  PostReqRejectSuccessModal,
  PostReqSuccessModal,
  RejectPostModal,
  SignOutModal,
} from '../components/global/Modal';
import ViewArticleModal from '../components/manage-content/ViewArticleModal';
import { useManageContentContext } from '../hooks/useManageContentContext';
import { getCurrentPostedArticleCount } from '../server/API/ManageContentAPI.js';

function ManageContent() {
  const { isSignOutClicked } = useSignOutContext();
  const {
    isPendingItemClicked,
    isApproveBtnClicked,
    isPostApproveSuccess,
    isEditApproveSuccess,
    isArchiveApproveSuccess,
    searchQuery,
    sortOrder,
    setSearchQuery,
    isRejectBtnClicked,
    isPostRejectSuccess,
    isEditRejectSuccess,
    isArchiveRejectSuccess,
  } = useManageContentContext();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [noMatchesFound, setNoMatchesFound] =
    useState(false);

  useEffect(() => {
    setSearchQuery('');
  }, []); // not working as intended

  useEffect(() => {
    // Fetch total number of articles and update totalPages accordingly
    const fetchTotalArticles = async () => {
      try {
        setNoMatchesFound(false);
        const currentSearchQuery = searchQuery; // Capture the current searchQuery value
        const articlesCount =
          await getCurrentPostedArticleCount(
            currentSearchQuery,
          );
        console.log('count: ', articlesCount);

        const articlesPerPage = 9;
        const calculatedTotalPages = Math.ceil(
          articlesCount / articlesPerPage,
        );
        setTotalPages(calculatedTotalPages);
        if (articlesCount === 0) {
          setNoMatchesFound(true);
          setCurrentPage(0);
          // No matches found
          console.log(
            `No matches found for "${currentSearchQuery}"`,
          );
        } else {
          // Reset the current page to 1 when the searchQuery changes
          setCurrentPage(1);
        }
        console.log('total articles now: ', articlesCount);
        console.log('total pages changed: ', totalPages);
      } catch (error) {
        console.error(
          'Error fetching total articles:',
          error,
        );
      }
    };

    fetchTotalArticles();
  }, [searchQuery, sortOrder]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <PageTitle title="Manage Content" />
        <div className=" flex w-full flex-col justify-evenly gap-3 ">
          <ForApprovalList />
          <SearchField type="Posted" />
          <ContentFilters
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          {noMatchesFound ? (
            <div className=" mt-32 text-center text-2xl text-red-500">
              No matches found for "{searchQuery}"
            </div>
          ) : (
            <>
              <div className="pagination mt-[2rem] flex">
                <PaginationLabel
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
              <ContentList
                type="Posted"
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </>
          )}
        </div>
      </div>
      {isSignOutClicked && <SignOutModal />}
      {isPendingItemClicked && <ViewArticleModal />}
      {isApproveBtnClicked && <ApprovePostModal />}
      {isRejectBtnClicked && <RejectPostModal />}
      {isPostApproveSuccess && (
        <PostReqSuccessModal type="manage-content" />
      )}
      {isEditApproveSuccess && (
        <EditReqSuccessModal type="manage-content" />
      )}
      {isArchiveApproveSuccess && (
        <ArchiveReqSuccessModal type="manage-content" />
      )}
      {isPostRejectSuccess && (
        <PostReqRejectSuccessModal type="manage-content" />
      )}
      {isEditRejectSuccess && (
        <EditReqRejectSuccessModal type="manage-content" />
      )}
      {isArchiveRejectSuccess && (
        <ArchiveReqRejectSuccessModal type="manage-content" />
      )}
    </div>
  );
}

export default ManageContent;
