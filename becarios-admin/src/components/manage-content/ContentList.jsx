import ContentListItem from './ContentListItem';

function ContentList({ type }) {
  return (
    <div className=" rounded-8 mt-[2rem] flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      <div className="req-items -mt-5 mb-4 flex flex-col gap-6 md:grid md:grid-cols-3 ">
        {/* CONVERT INTO ARRAY.MAP */}
        <ContentListItem type={type} />
        <ContentListItem type={type} />
        <ContentListItem type={type} />
      </div>
    </div>
  );
}

export default ContentList;
