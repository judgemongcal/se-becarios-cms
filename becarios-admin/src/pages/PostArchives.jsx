import {
  DeletePostModal,
  DeleteReqSuccessModal,
  RetrieveArchivedPostModal,
  RetrieveReqSuccessModal,
  SignOutModal,
} from '../components/global/Modal';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import PaginationLabel from '../components/global/PaginationLabel';
import SearchField from '../components/global/SearchField';
import ContentFilters from '../components/manage-content/ContentFilters';
import ContentList from '../components/manage-content/ContentList';
import { useSignOutContext } from '../hooks/useSignOutContext';
import { useManageContentContext } from '../hooks/useManageContentContext';
import { useArchiveContext } from '../hooks/useArchiveContext';
import React, { useState, useEffect } from 'react';
import {getCurrentArchivedArticleCount} from '../server/API/ManageContentAPI.js';

function PostArchives() {
  const { isSignOutClicked } = useSignOutContext();
  const {
    isDeleteBtnClicked,
    isDeleteConfirmed,
    isDeleteSuccessful,
    isDeleteFailed,
    isPutBackBtnClicked,
    isPutBackSuccessful,
    isPutBackBtnFailed,
  } = useArchiveContext();
  const {searchQuery, sortOrder, setSearchQuery } =
    useManageContentContext();

    // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [noMatchesFound, setNoMatchesFound] = useState(false);
  
  useEffect(() => {
    setSearchQuery('');
  }, []); // not working as intended

  useEffect(() => {
    // Fetch total number of articles and update totalPages accordingly
    const fetchTotalArticles = async () => {
      try {
        setNoMatchesFound(false);
        //const currentSearchQuery = searchQuery; // Capture the current searchQuery value
        const articlesCount = await getCurrentArchivedArticleCount(searchQuery);
        console.log('count: ', articlesCount);

          const articlesPerPage = 9;
          const calculatedTotalPages = Math.ceil(articlesCount / articlesPerPage);
          setTotalPages(calculatedTotalPages);
          if (articlesCount === 0 && searchQuery !== '') {
            setNoMatchesFound(true);
            setCurrentPage(0);
          // No matches found
          console.log(`No matches found for "${currentSearchQuery}"`);
          } else { // Reset the current page to 1 when the searchQuery changes
            setCurrentPage(1);
          }
          console.log("total articles now: ", articlesCount);
          console.log("total pages changed: ", totalPages);
      } catch (error) {
        console.error('Error fetching total articles:', error);
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
    <div className="flex flex-col justify-start lg:flex-row ">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem]">
        <PageTitle title="Post Archives" />
        <h2 className="mx-auto -mt-[4rem] w-[90%] max-w-[400px] text-center text-[1.15rem] md:text-[1.25rem]">
          <span className="font-bold">Reminder:</span>{' '}
          Archived post will be permanently deleted{' '}
          <span className="font-bold">15 days</span> after
          being archived.
        </h2>
        <div className=" flex w-full flex-col justify-evenly gap-3 ">
          <SearchField type="Archived" />
          <ContentFilters currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          {searchQuery !== '' && noMatchesFound ? (
            <div className=" text-center text-2xl text-red-500 mt-32">
                No matches found for "{searchQuery}"
           </div>
          ):( 
          <>  
            <div className="pagination mt-[2rem]">
              <PaginationLabel currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
            <ContentList type="Archived" currentPage={currentPage} totalPages={totalPages} />
          </>
          )}
        </div>
      </div>
      {isDeleteBtnClicked && <DeletePostModal />}
      {isPutBackBtnClicked && <RetrieveArchivedPostModal />}
      {isPutBackSuccessful && <RetrieveReqSuccessModal />}
      {isDeleteSuccessful && (
        <DeleteReqSuccessModal type="archive" />
      )}
      {isSignOutClicked && <SignOutModal />}
    </div>
  );
}

export default PostArchives;
