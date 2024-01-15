import { ActivityListItem } from './ActivityListItem';

function ActivityPageList() {
  return (
    <div className="bg-brand-input shadow-shadow-db rounded-8 mt-[3rem] flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      <div className="req-items mb-4 flex flex-col gap-4 p-5">
        {/* CONVERT INTO ARRAY.MAP */}
        <ActivityListItem />
        <ActivityListItem />
        <ActivityListItem />
      </div>
    </div>
  );
}

export default ActivityPageList;
