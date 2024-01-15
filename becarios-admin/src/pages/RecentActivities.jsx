import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import PageTitle from '../components/global/PageTitle';
import PaginationLabel from '../components/global/PaginationLabel';
import SearchField from '../components/global/SearchField';
import ActivityFilters from '../components/recent-activities/ActivityFilters';
import ContentList from '../components/manage-content/ContentList';
import {
  BacktoDashboardBtn,
  GenerateReportBtn,
} from '../components/global/Button';

function RecentActivities() {
  return (
    <div className="flex flex-col justify-start lg:flex-row ">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content mt-[10rem] flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[8rem] lg:pb-[20%]">
        <BacktoDashboardBtn />
        <PageTitle title="Recent Activities" />

        <div className=" flex w-full flex-col justify-evenly gap-3 ">
          <SearchField />
          <ActivityFilters />
          <div className="flex flex-row items-center justify-between">
            <PaginationLabel />
            <GenerateReportBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentActivities;
