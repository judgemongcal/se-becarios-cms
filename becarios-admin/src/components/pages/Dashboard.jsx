import { PostReqSuccessModalBtn } from '../global/Button';
import NavBar from '../global/NavBar';
import NavBarMobile from '../global/NavBarMobile';

function Dashboard() {
  return (
    <div className="flex flex-col justify-start lg:flex-row">
      <div className="navs">
        <NavBar />
        <NavBarMobile />
      </div>

      <div className="content flex flex-col gap-[20rem]">
        <h1 className="bg-brand-blue-dark text-center text-[1.35rem] font-bold tracking-wide">
          Good morning, X
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
