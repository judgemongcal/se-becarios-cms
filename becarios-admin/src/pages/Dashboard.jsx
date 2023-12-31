import Greeting from '../components/dashboard/Greeting';
import { PostReqSuccessModalBtn } from '../components/global/Button';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import RequestList from '../components/manage-content/RequestList';
import { RequestListItem } from '../components/manage-content/RequestListItem';
import ActivityList from '../components/recent-activities/ActivityList';

function Dashboard() {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content flex w-[100%] flex-col gap-[5rem] px-9 md:px-16 lg:mt-[3rem]">
        <Greeting name="Karen" />
        <RequestList />
        <ActivityList />
      </div>
    </div>
  );
}

export default Dashboard;
