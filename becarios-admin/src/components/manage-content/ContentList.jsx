import ContentListItem from './ContentListItem';

function ContentList({ type }) {
  return (
    <div className=" rounded-8 mt-[2rem] flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      {/* <div className="header flex flex-row items-center justify-between p-8 py-4 lg:mt-4 lg:py-3">
        <h1 className="text-[1.25rem] font-bold lg:text-[1.5rem]">
          Pending for Approval
        </h1>
        <h1 className="bg-brand-red rounded-[3rem] px-3 py-2.5 text-[1.25rem] font-bold tracking-wide text-white">
          10
        </h1>
      </div> */}
      <div className="req-items -mt-5 mb-4 flex flex-col gap-6 md:grid md:grid-cols-2">
        {/* CONVERT INTO ARRAY.MAP */}
        <ContentListItem type={type} />
        <ContentListItem type={type} />
        <ContentListItem type={type} />
      </div>
    </div>
  );
}

export default ContentList;
