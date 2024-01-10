import { ActivityListItem } from './ActivityListItem';
import { DashboardViewAllBtn } from '../global/Button';
import { NavLink } from 'react-router-dom';

function ActivityList() {
  return (
    <div className="bg-brand-input shadow-shadow-db rounded-8 flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      <div className="header mt-2 flex flex-row items-center justify-between p-5 py-4 lg:mt-4 lg:py-3">
        <h1 className="text-[1.25rem] font-bold md:mb-1.5 md:mt-2 lg:text-[1.5rem]">
          Recent Activities
        </h1>
      </div>
      <div className="req-items mb-4 flex flex-col gap-4 p-5">
        {/* CONVERT INTO ARRAY.MAP */}
        <ActivityListItem />
        <ActivityListItem />
        <ActivityListItem />
      </div>
      <DashboardViewAllBtn path="/recent-activities" />
    </div>
  );
}

export default ActivityList;
