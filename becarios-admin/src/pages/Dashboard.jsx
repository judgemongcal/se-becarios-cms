import Greeting from '../components/dashboard/Greeting';
import { PostReqSuccessModalBtn } from '../components/global/Button';
import { SignOutModal } from '../components/global/Modal';
import NavBar from '../components/global/NavBar';
import NavBarMobile from '../components/global/NavBarMobile';
import RequestList from '../components/manage-content/RequestList';
import { RequestListItem } from '../components/manage-content/RequestListItem';
import ActivityList from '../components/recent-activities/ActivityList';
import { useSignOutContext } from '../hooks/useSignOutContext';
import { useUserInfoContext } from '../hooks/useUserInfoContext';

function Dashboard() {
  const { isSignOutClicked } = useSignOutContext();
  const { userInfo } = useUserInfoContext();
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content flex w-[100%] flex-col gap-[5rem] px-9 md:mb-[5rem] md:px-16 lg:ml-[21rem] lg:mt-[3rem]">
        <Greeting name="Karen" />
        <div className="lists flex flex-col gap-[2rem] xl:flex-row">
          {userInfo.role === 'Super Admin' && (
            <RequestList />
          )}
          <ActivityList />
        </div>
      </div>
      {isSignOutClicked && <SignOutModal />}
    </div>
  );
}

export default Dashboard;
