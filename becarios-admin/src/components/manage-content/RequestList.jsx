import { RequestListItem } from './RequestListItem';

function RequestList() {
  return (
    <div className="bg-brand-input shadow-shadow-db rounded-8 flex w-[100%] flex-col gap-2 p-5 lg:max-w-[35.75rem]">
      <div className="header flex flex-row items-center justify-between py-2">
        <h1 className="text-[1.25rem] font-bold ">
          Pending for Approval
        </h1>
        <h1 className="bg-brand-red rounded-[3rem] px-3 py-2.5 text-[1.25rem] font-bold tracking-wide text-white">
          10
        </h1>
      </div>
      {/* CONVERT INTO ARRAY.MAP */}
      <RequestListItem />
      <RequestListItem />
      <RequestListItem />
      <RequestListItem />
      <RequestListItem />
    </div>
  );
}

export default RequestList;
