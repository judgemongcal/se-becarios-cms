import { SignOutModal } from '../components/global/Modal';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import PaginationLabel from '../components/global/PaginationLabel';
import SearchField from '../components/global/SearchField';
import ContentFilters from '../components/manage-content/ContentFilters';
import ContentList from '../components/manage-content/ContentList';
import { useSignOutContext } from '../hooks/useSignOutContext';
import { useManageContentContext } from '../hooks/useManageContentContext';

function PostArchives() {
  const { isSignOutClicked } = useSignOutContext();

  return (
    <div className="flex flex-col justify-start lg:flex-row ">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <PageTitle title="Post Archives" />
        <h2 className="mx-auto -mt-[4rem] w-[90%] max-w-[400px] text-center text-[1.15rem] md:text-[1.25rem]">
          <span className="font-bold">Reminder:</span>{' '}
          Archived post will be permanently deleted{' '}
          <span className="font-bold">15 days</span> after
          being archived.
        </h2>
        <div className=" flex w-full flex-col justify-evenly gap-3 ">
          <SearchField type="Archived" />
          <ContentFilters />
          <div className="pagination mt-[2rem]">
            <PaginationLabel />
          </div>

          <ContentList type="Archived" />
        </div>
      </div>
      {isSignOutClicked && <SignOutModal />}
    </div>
  );
}

export default PostArchives;
