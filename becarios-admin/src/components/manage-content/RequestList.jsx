import PendingListItem from '../dashboard/PendingListItem';
import { DashboardViewAllBtn } from '../global/Button';
import { RequestListItem } from './RequestListItem';
import { NavLink } from 'react-router-dom';

function RequestList() {
  return (
    <div className="bg-brand-input shadow-shadow-db rounded-8 flex min-w-[100%] flex-col gap-2  lg:max-w-[40%]">
      <div className="header flex flex-row items-center justify-between p-5 py-4 lg:mt-4 lg:py-3">
        <h1 className="text-[1.25rem] font-bold lg:text-[1.5rem]">
          Pending for Approval
        </h1>
        <h1 className="bg-brand-red rounded-[3rem] px-3 py-2.5 text-[1.25rem] font-bold tracking-wide text-white">
          10
        </h1>
      </div>
      <div className="req-items flex flex-col gap-4 p-5">
        {/* CONVERT INTO ARRAY.MAP */}
        <PendingListItem />
        <PendingListItem />
        <PendingListItem />
      </div>
      <DashboardViewAllBtn />
    </div>
  );
}

export default RequestList;
