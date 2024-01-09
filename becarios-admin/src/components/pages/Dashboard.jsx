import Greeting from '../dashboard/Greeting';
import { PostReqSuccessModalBtn } from '../global/Button';
import NavBar from '../global/NavBar';
import NavBarMobile from '../global/NavBarMobile';
import RequestList from '../manage-content/RequestList';
import { RequestListItem } from '../manage-content/RequestListItem';

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
      </div>
    </div>
  );
}

export default Dashboard;
