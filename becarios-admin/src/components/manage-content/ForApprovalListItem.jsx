function ForApprovalListItem() {
  return (
    <div className="req-container shadow-shadow-db rounded-8 flex flex-row gap-2 p-5">
      <div className="req-img w-[70%]">
        <img
          src="./src/assets/org_logo.png"
          alt=""
          className="h-auto w-full"
        />
      </div>
      <div className="req-info ">
        <p className="activity-label bg-brand-yellow rounded-8 mb-3 min-w-[70%] max-w-[200px] px-4 py-1 text-center text-[0.9rem] font-medium">
          Article Post Request
        </p>
        <h1 className="req-title mb-2 text-[0.95rem] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit
        </h1>
        <div className="time-info mb-1 flex flex-row gap-3 text-[0.85rem]">
          <p>February 7, 2024</p>
          <p>8:24 AM</p>
        </div>
        <p className="author text-[0.85rem]">
          Submitted by: Hannah Yu
        </p>
      </div>
    </div>
  );
}

export default ForApprovalListItem;
