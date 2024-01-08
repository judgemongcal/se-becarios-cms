function PendingListItem() {
  return (
    <div className="bg-brand-light shadow-shadow-db rounded-8 flex w-[100%] flex-col gap-2 p-4 lg:max-w-[35.75rem]">
      <p className="activity-label bg-brand-yellow rounded-8 w-[70%] max-w-[200px] px-4 py-1 text-center text-[0.9rem] font-medium">
        Article Post Request
      </p>
      <div className="activity-details flex flex-col px-1 text-left">
        <h2 className="mb-2.5 text-[1.05rem] font-semibold">
          Lorem Ipsum
        </h2>
        <div className="flex flex-row justify-between text-[0.85rem]">
          <p>
            Request from:
            <span className=" font-semibold">
              {' '}
              John Doe
            </span>
          </p>
          <p>X hours ago</p>
        </div>
      </div>
    </div>
  );
}

export default PendingListItem;
