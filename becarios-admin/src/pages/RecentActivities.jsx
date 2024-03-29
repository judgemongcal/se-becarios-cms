import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import PaginationLabel from '../components/global/PaginationLabel';
import SearchField from '../components/global/SearchField';
import ActivityFilters from '../components/recent-activities/ActivityFilters';
import ContentList from '../components/manage-content/ContentList';
import {
  BackBtn,
  GenerateReportBtn,
} from '../components/global/Button';
import ActivityList from '../components/recent-activities/ActivityList';
import ActivityPageList from '../components/recent-activities/ActivityPageList';
import { useSignOutContext } from '../hooks/useSignOutContext';
import { SignOutModal } from '../components/global/Modal';

function RecentActivities() {
  const { isSignOutClicked } = useSignOutContext();

  return (
    <div className="flex flex-col justify-start lg:flex-row ">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <BackBtn />
        <PageTitle title="Recent Activities" />

        <div className=" flex w-full flex-col justify-evenly gap-3 ">
          <SearchField type="Activities" />
          <ActivityFilters />
          <ActivityPageList />
          <div className="mt-[2rem] flex flex-row items-center justify-between">
            <PaginationLabel />
            <GenerateReportBtn />
          </div>
        </div>
      </div>
      {isSignOutClicked && <SignOutModal />}
    </div>
  );
}

export default RecentActivities;
