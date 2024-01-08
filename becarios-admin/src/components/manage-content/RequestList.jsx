import PendingListItem from '../dashboard/PendingListItem';
import { RequestListItem } from './RequestListItem';
import { NavLink } from 'react-router-dom';

function RequestList() {
  return (
    <div className="bg-brand-input shadow-shadow-db rounded-8 flex w-[100%] flex-col gap-2  lg:max-w-[35.75rem]">
      <div className="header flex flex-row items-center justify-between p-5 py-4">
        <h1 className="text-[1.25rem] font-bold ">
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
        <PendingListItem />
        <PendingListItem />
      </div>

      <div className="view-all bg-brand-yellow hover:bg-brand-yellow-dark  rounded-b-8 w-full cursor-pointer px-2 py-5 text-center text-[1.25rem] font-semibold duration-300 hover:text-white">
        <nav>
          <NavLink to="manage-content bg-brand">
            View All
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default RequestList;
