import { PostReqSuccessModalBtn } from '../global/Button';
import NavBar from '../global/NavBar';
import NavBarMobile from '../global/NavBarMobile';
import { RequestListItem } from '../manage-content/RequestListItem';

function Dashboard() {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content flex w-[100%] flex-col gap-[20rem] px-9">
        <h1 className=" mt-[5rem] text-[1.5rem] font-bold tracking-wide md:text-[2rem]">
          Good morning, Karen.
        </h1>
        <RequestListItem />
      </div>
    </div>
  );
}

export default Dashboard;
